// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useWaline } from 'vitepress-theme-website'
import { useData } from 'vitepress';
import './style.css'
import WalineComment from './components/WalineComment.vue';


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    useWaline({
      serverURL: 'https://fediwiki-comment.tkg3.top',  // 替换为你的 Waline 后端地址
      dark: 'auto',
    })
  }
} satisfies Theme
