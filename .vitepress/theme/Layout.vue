// .vitepress/theme/Layout.vue
<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

onMounted(() => {
  import('@waline/client/dist/waline.css') // 动态引入样式，避免 SSR 报错
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
