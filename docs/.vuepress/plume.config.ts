import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/Circlari/fedi-user-wiki' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
   footer: {
     message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a><br>Licensed by <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
     copyright: '©2025 Circlari-team and all contributers',
   },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Fedi 新手用户指南',
    description: '一个面向新手用户的联邦用户指南。',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  sidebar: {
      '/meet-fedi/': [
        { text: '什么是联邦宇宙', link: 'intro.md' },
        { text: 'Fedi 概念', link: 'concepts.md' },
        { text: '联邦宇宙的优点', link: 'why.md'}
      ],
      '/software/': [
        { text: 'Mastodon', link: 'mastodon.md' },
        { text: 'Misskey', link: 'misskey.md' },
      ],
      '/for-admin/': [
        { text: '必要的数字"基建"资源', link: 'resources.md' },
        { text: '运营的很多事', link: 'operating.md' },
        { text: 'Mastodon 部署', link: 'deploy/mastodon.md' },
        { text: 'Misskey 部署', link: 'deploy/misskey.md' },
      ],
    }

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
