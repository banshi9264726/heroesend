<template>
  <div id="app">
    <my-header></my-header>
  </div>
</template>

<script>
// 导入头部组件
import MyHeader from '@/components/myheader'
export default {
  name: 'App',
  // 注册局部组件
  components: {
    MyHeader
  }
}
</script>

<style>
</style>
