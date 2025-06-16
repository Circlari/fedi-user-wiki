---
title: 内容贡献指南
createTime: 2025/05/17 19:57:27
permalink: /contributing/
---
## 如何进行贡献

本站内容依靠联邦宇宙中每一个人的贡献撑起，如您愿意为本站的内容提供助力，可通过以下方式：

### 直接编辑文档
若您对于联邦宇宙的了解深厚，可在主仓库的 "[**Discussion**](https://github.com/Circlari/fedi-user-wiki/discussions)（讨论）"中联系我们，成为 **Collabator**（协作者），即可直接对主仓库内容编辑，无需通过提交合并流程。

### 编辑副本 → 提交合并
1. 在[**本站项目仓库**](https://github.com/Circlari/fedi-user-wiki)点击 "[**fork**](https://github.com/Circlari/fedi-user-wiki/fork)"（分叉）按钮，在您的 Github 账号上创建一个分叉副本。
2. 在您自己的副本仓库中进行内容等编辑
3. 完成后点击 "**Contribute**"（贡献）按钮，提交 "**Pull Requst**"（合并请求）
4. 等待主仓库管理员对您的合并请求进行审核，若显示 "**Merged**" ，则您的本次提交将在本站页面上体现。
::: tip 数据安全提示
- 为防止因各种意外情况导致您的内容丢失，建议在本地或其他方式进行内容编辑后，复制到在您的副本仓库中提交。
- 对于图片等，建议将其托管在有长期保障其可访问性的图床等。也可联系我们获取管理员所使用的图床的账号。（仅用于本站项目）
:::
::: details 编辑指引
1. 修改内容 <br>
        1.1 查看``docs/.vuepress/plume.config.ts``文件，找到您想要修改的页面所对应的``md``文件。<br>也可以通过站点页面下方的“编辑此页“快速定向。<br>
        1.2 对相关文件进行修改。   
2. 新增页面<br>
        2.1 在相应内容板块的文件夹下创建新``.md``文件，如``/meet-fedi/new-page.md``。<br>
        2.2 对站点不同配置文件进行条目增加。（此处以``/meet-fedi/``为例
::: code-tabs
@tab docs/.vuepress/plume.config.ts
```js
export default defineThemeConfig({
    ...
    sidebar: {
      '/meet-fedi/': [
        { text: '什么是联邦宇宙', link: 'intro.md' },
        { text: 'Fedi 概念', link: 'concepts.md' },
        { text: '联邦宇宙的优点', link: 'why.md'},
        { text: '新页面', link: 'new-page.md'} // [!code ++]
      ]
    }
})
```
@tab docs/meet-fedi/index.md
```md
- [什么是联邦宇宙](./intro.md)
- [Fedi 概念](./concepts.md)
- [联邦宇宙的优点](./why.md)
- [新页面](./new-page.md) // [!code ++]
```

:::
    

### 提出内容修改/增删意见
通过对应页面下方评论区、主仓库的 "[**Discussion**](https://github.com/Circlari/fedi-user-wiki/discussions)（讨论）"中提出您的想法。

## 文章版权相关
本站定位为开放协作文档站，因此可能会采用其他博主的文章或他人投稿。  
对于此类情况，请按以下流程操作。  
### 添加文章信息的版权部分
``` md
---
title:     // 文章标题
createTime:      // 创建时间
permalink:      // 文章永久链接
copyright:     // 文章版权信息 （若为原创此区块无需添加）
  creation:      // 版权类型： reprint（转载）/ translate（翻译）
  license:       // CC版权类型
  source:       // 来源地址
  author:      // 作者信息
    name:      // 作者名
    url:      // 作者链接
---
```  
### 文章开头的提示
``` md
::: info 内容相关
本页由 [作者名](作者博客/Github地址) 贡献，内容来自其[...文章](原文地址)的...。
:::
```

## 联络
- 主仓库 [**讨论区**](https://github.com/Circlari/fedi-user-wiki/discussions)（首选）
- 联系邮箱：  
  Circlari-team: [**circlari@tkg3.top**](mailto:circlari@outlook.com) 

**所有贡献者后续均会在[贡献者列表](/contributer-list.md)专页进行展示。**


