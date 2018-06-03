<template>
  <div id="app">
    <my-header></my-header>
    <div class="container-fluid">
      <div class="row">
        <my-aside></my-aside>
      </div>
    </div>
  </div>
</template>

<script>
// 导入头部组件
import MyHeader from '@/components/myheader'
// 导入侧边栏组件
import MyAside from '@/components/myaside'
export default {
  name: 'App',
  // 注册局部组件
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style>
</style>
