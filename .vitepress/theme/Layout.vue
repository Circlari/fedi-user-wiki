<script setup>
import DefaultTheme from 'vitepress/theme'
import { useWaline } from 'vitepress-theme-website'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Waline />
    </template>
  </DefaultTheme.Layout>
</template>
