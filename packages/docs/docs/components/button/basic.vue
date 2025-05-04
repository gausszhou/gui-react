<template>
  <div ref="el"></div>
</template>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import Basic from './basic.tsx'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(Basic, {}, null))
})
</script>