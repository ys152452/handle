<script setup lang="ts">
import '~/init'

const { height } = useWindowSize()

watchEffect(() => {
  document.documentElement.style.setProperty('--vh', `${height.value / 100}px`)
})
</script>

<template>
  <router-view #="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
