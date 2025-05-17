import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fedi 新手用户指南",
  description: "一个面向新手用户的fediverse指南。",
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
      message: 'Powered by Vitepress',
      copyright: '©2025 Circlari-team and all contributers'
    }
  }
})
