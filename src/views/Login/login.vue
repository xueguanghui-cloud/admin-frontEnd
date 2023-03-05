<script setup lang="ts">
import request from '@/service'
request.get({ url: '/login', params: { name: 'jack' } }).then((res) => {
  console.log(res)
})
</script>

<template><div class="login">login</div></template>

<style scoped lang="scss"></style>
