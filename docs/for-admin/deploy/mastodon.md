---
title: Mastodon (长毛象）部署流程
createTime: 2025/05/18 20:36:38
permalink: /for-admin/deploy/mastodon/
copyright:
  creation: reprint
  license: CC-BY-NC-SA-4.0
  source: https://blog.byteloid.one/2024/11/01/docker%E9%83%A8%E7%BD%B2mastodon/
  author:
    name: Bingxin
    url: https://blog.byteloid.one
---
::: tip
本页专注于 Mastodon 服务端的部署流程，涉及域名、服务器等资源的内容请至“[必要的数字基建资源](/for-admin/resources/)”查看。
:::
::: info 内容相关
本页由 [@Bingxin](https://github.com/bingxin666) 贡献，内容来自其博客文章（[1](https://blog.byteloid.one/2024/11/01/docker%E9%83%A8%E7%BD%B2mastodon/), [2](https://blog.byteloid.one/2024/12/27/mastodon%E7%AC%AC%E4%BA%8C%E9%83%A8%E5%88%86/)）的优化。
:::

## 通过 Docker Compose 部署

### 下载 `docker-compose.yml`

从 `https://raw.githubusercontent.com/mastodon/mastodon/refs/heads/main/docker-compose.yml` 下载 `docker-compose.yml` 文件到服务器。

其中，`services` 分为以下几个部分：
 - `db`：默认的 PostgreSQL 数据库服务 (如果使用现成的 PostgreSQL 实例，请注释或删除此部分)。
 - `redis`：默认的 Redis 服务 (如果使用现成的 Redis 实例，请注释或删除此部分)。
 - `es`：Mastodon 的搜索服务，由 Elasticsearch 提供，默认注释。
 - `web`：Mastodon 的 Web 服务。
 - `streaming`：Mastodon 的 streaming 服务。
 - `sidekiq`：Sidekiq 服务。
 - `tor`: 洋葱路由服务，除非你的实例有特殊需求，否则默认不启用。
 - `privoxy`: 代理服务，默认不启用，需要额外配置文件。

`web`、`streaming`、`sidekiq` 中的 `image: ghcr.io/mastodon/mastodon:<version>` 指定了 Mastodon 的版本号，建议使用最新的稳定版本。

一般来说，一个 Mastodon 实例需要至少 `web`、`streaming`、`sidekiq` 三个服务，对于初次部署 Mastodon 的用户，建议同时启用 `db` 和 `redis`。

### 生成配置文件

在 `docker-compose.yml` 所在目录下，运行以下命令生成配置文件：

```shell
touch .env.production
docker compose run --rm web bundle exec rake mastodon:setup
```

接着会进入到配置生成流程，

如果你没有把 Postgres 和 Redis 分离部署，则 PostgreSQL 的默认用户名是 `postgres`，密码直接回车，Redis 部分直接回车，否则请根据你实际情况填写。

流程参考如下：

```shell
[+] Creating 2/0
 ✔ Container mastodon-db-1     Running                                                                                   0.0s 
 ✔ Container mastodon-redis-1  Running                                                                                   0.0s 
Your instance is identified by its domain name. Changing it afterward will break things.
Domain name: baka.ink

Single user mode disables registrations and redirects the landing page to your public profile.
Do you want to enable single user mode? yes

Are you using Docker to run Mastodon? Yes

PostgreSQL host: db
PostgreSQL port: 5432
Name of PostgreSQL database: postgres
Name of PostgreSQL user: postgres
Password of PostgreSQL user: 
Database configuration works! 🎆

Redis host: redis
Redis port: 6379
Redis password: 
Redis configuration works! 🎆

Do you want to store uploaded files on the cloud? No

Do you want to send e-mails from localhost? No
SMTP server: smtp.example.com
SMTP port: 587
SMTP username: Admin
SMTP password: 123456
SMTP authentication: plain
SMTP OpenSSL verify mode: peer
Enable STARTTLS: always
E-mail address to send e-mails "from": Mastodon <notifications@baka.ink>
Send a test e-mail with this configuration right now? no

Do you want Mastodon to periodically check for important updates and notify you? (Recommended) Yes

This configuration will be written to .env.production
Save configuration? Yes
Below is your configuration, save it to an .env.production file outside Docker:
```

随后会输出配置文件内容，请将其保存到 `.env.production` 文件中。

### 启动 Mastodon

运行以下命令启动 Mastodon：

```shell
docker compose up -d
```

此时，目录下应当会出现以下文件夹：

```shell
root@mastodon:~/mastodon# ls
docker-compose.yml  public  redis  postgres14
```

为相应文件夹赋权：

```shell
docker compose down
chown 991:991 -R ./public
chown -R 70:70 ./postgres14
docker compose up -d
```

此时 Mastodon 应当已经启动成功。

## 配置反向代理

### 使用反向代理服务器

#### 官方 Nginx 配置

对于 Nginx，官方提供了一个配置模板，可以参考 [Mastodon Nginx 配置](https://github.com/mastodon/mastodon/blob/main/dist/nginx.conf)。

**但请注意，如果你是通过 Docker 部署的 Mastodon，Nginx 的配置文件应当将 `try_files $uri =404;` 全部替换为 `try_files $uri @proxy;`。**

此外，配置文件仅供参考，实际部署时需要根据你的服务器环境进行调整。

#### 直接配置反向代理

相较于官方提供的 Nginx 配置，直接配置反向代理更为简单。

简单来说，你只需要：
 - 访问 `/` 路径时，代理到 `http://127.0.0.1:3000`。
 - 访问 `/api/v1/streaming` 路径时，代理到 `http://127.0.0.1:4000`。

此时 Mastodon 应当已经可以通过反向代理访问。

### 使用 Cloudflare Tunnel

如果你是直接安装 Cloudflare Tunnel 到宿主机，请直接参考上方关于直接配置反向代理的内容。

此外，也可以将 Cloudflare Tunnel 与 Mastodon 的 Docker Compose 配合使用。

在 `docker-compose.yml` 中添加以下服务：

```yaml
  tunnel:
    image: cloudflare/cloudflared
    restart: always
    command: tunnel --no-autoupdate run --token <token>
    depends_on:
      - web
    networks:
      - external_network
      - internal_network
```

替换 `<token>` 为你的 Cloudflare Tunnel 令牌，然后使用 `docker-compose up -d` 启动服务。

打开 Cloudflare One 面板，找到你的 Tunnel，添加以下两个**公共主机名**：

 - 域为你部署 Mastodon 的域，类型选择 HTTP，URL 填写 `web:3000`，HTTP 设置中设置 HTTP 主机头为你的域。
 - 域为你部署 Mastodon 的域，路径填写 `api/v1/streaming`，类型选择 HTTP，URL 填写 `streaming:4000`，HTTP 设置中设置 HTTP 主机头为你的域。

随后将服务为 `http://streaming:4000` 的移动至最上方。

此时 Mastodon 应当已经可以通过 Cloudflare Tunnel 访问。

## 配置全局搜索

### 修改 `docker-compose.yml` 和 `.env.production`

打开 `docker-compose.yml`，修改以下被注释的地方：

```yaml
  es:
    restart: always
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.4
    environment:
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m -Des.enforce.bootstrap.checks=true"
      - "xpack.license.self_generated.type=basic"
      - "xpack.security.enabled=false"
      - "xpack.watcher.enabled=false"
      - "xpack.graph.enabled=false"
      - "xpack.ml.enabled=false"
      - "bootstrap.memory_lock=true"
      - "cluster.name=es-mastodon"
      - "discovery.type=single-node"
      - "thread_pool.write.queue_size=1000"
     networks:
        - external_network
        - internal_network
     healthcheck:
        test: ["CMD-SHELL", "curl --silent --fail localhost:9200/_cluster/health || exit 1"]
     volumes:
        - ./elasticsearch:/usr/share/elasticsearch/data
     ulimits:
       memlock:
         soft: -1
         hard: -1
       nofile:
         soft: 65536
         hard: 65536
     ports:
       - '127.0.0.1:9200:9200'
```

编辑 `.env.production`，在最后加上：

```env
ES_ENABLED=true
ES_HOST=es
ES_PORT=9200
```

### 启动 Elasticsearch

启动服务：

```shell
docker compose up -d
```

出现 `elasticsearch` 文件夹后，赋权：

```shell
chown 1000:1000 -R elasticsearch
```

重启服务：

```shell
docker compose down
docker compose up -d
```

建立搜索索引：

```shell
docker compose run --rm web bin/tootctl search deploy
```

### 可能遇到的问题

#### 虚拟内存问题

部分错误信息：

```log
max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

查询资料后发现是由于虚拟内存导致的，[参见此文档](https://www.elastic.co/guide/en/elasticsearch/reference/5.0/vm-max-map-count.html#vm-max-map-count)。

解决方法是在宿主机执行以下指令：

```shell
echo "vm.max_map_count=262144" >> /etc/sysctl.conf
sysctl -w vm.max_map_count=262144
```

#### Java 内存分配问题

示例错误信息：

```log
initial heap size [134217728] not equal to maximum heap size [536870912]; this can cause resize pauses and prevents mlockall from locking the entire heap
```

打开 `docker-compose.yml`，修改以下行的 `Xms` 和 `Xmx` 为同一数值：

```yaml
es:
  restart: always
  image: docker.elastic.co/elasticsearch/elasticsearch:7.17.4
  environment:
    - "ES_JAVA_OPTS=-Xms512m -Xmx512m -Des.enforce.bootstrap.checks=true"
......
```