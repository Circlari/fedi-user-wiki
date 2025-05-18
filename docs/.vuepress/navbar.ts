import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '初识 Fedi', link: '/meet-fedi/', icon: 'ph:fediverse-logo' }, 
  { text: '应用生态', link: '/software/', icon: 'mdi:mastodon' },   
])