<template>
  <div id="waline"></div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import Waline from '@waline/client'

const route = useRoute()

function initWaline() {
  Waline({
    el: '#waline',
    serverURL: 'https://fediwiki-comment.tkg3.top',  // 指向你 Docker 部署的后端
    path: route.path                            // 用页面路径区分评论区
    dark: 'auto',
  })
}

onMounted(initWaline)          // 首次挂载时加载评论
watch(route, initWaline)       // 路由切换时重载评论区
</script>

<style scoped>
#waline { margin-top: 2rem; }
</style>
