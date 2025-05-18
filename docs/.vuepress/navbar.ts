import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '初识 Fedi', link: '/meet-fedi/', icon: 'ph:fediverse-logo' }, 
  { text: '应用生态', link: '/software/', icon: 'mdi:mastodon' },
  { text: '站长指南', link: '/for-admin/', icon: 'material-symbols:deployed-code-account-sharp'}, 
  { text: '贡献内容', icon: 'fluent:document-heart-20-regular', 
    items: [
      { text: '操作指南', link: '/contributing.md', },
      { text: '贡献者名录', link: '/contributer-list.md', },
    ],
  }, 
])