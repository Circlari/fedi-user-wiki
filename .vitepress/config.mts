import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fedi 新手用户指南",
  description: "一个面向新手用户的fediverse指南。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/intro/index.md' }
    ],

    sidebar: [
      { text: '联邦宇宙',
        items: [
          { text: '引入', link: '/intro/index.md' },
        ]
      },
      { text: 'Mastodon',
        items: [
          { text: '简介', link: '/mastodon/intro.md' },
        ]
      },
      { text: 'Misskey',
        items: [
          { text: '简介', link: '/mastodon/intro.md' },
        ]
      },
      { text: '本站贡献',
        items: [
          { text: '指南', link: '/contribute-guide.md' },
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
