import { defineConfig } from 'vitepress'
import { useData } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Fedi 新手用户指南",
  description: "一个面向新手用户的fediverse指南。",
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '联邦宇宙', link: '/intro/index.md' },
      { text: '应用生态', link: '/software/index.md' },
      { text: '部署教程', link: '/for-admin/index.md' }
    ],

    sidebar: [
      { text: '联邦宇宙',
        items: [
          { text: '引入', link: '/intro/index.md' },
        ]
      },
      { text: '应用生态',
        items: [
          { text: 'Mastodon（长毛象）', link: '/software/mastodon.md' },
          { text: 'Misskey', link: '/software/misskey.md' },
        ]
      },
      { text: '部署教程',
        items: [
          { text: 'Mastodon（长毛象）', link: '/for-admin/mastodon-deploy.md' },
          { text: 'Misskey', link: '/for-admin/misskey-deploy.md' },
        ]
      },
      { text: '客户端推荐', link: '/app/index.md'},
      { text: '本站贡献',
        items: [
          { text: '指南', link: '/contributing.md' },
          { text: '贡献者列表', link: '/contributers.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Circlari/fedi-user-wiki' }
    ],
    
    footer: {
      message: 'Powered by <a href="https://vitepress.dev/zh/" target="_blank" rel="noopener">VitePress</a>',
      copyright: '©2025 Circlari-team and all contributors<br>本站内容使用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> 协议。'
    },

    search: {
      provider: 'local'
    },
  }
})
