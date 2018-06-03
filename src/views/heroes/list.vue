<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="index">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)"
                  @click.prevent="handleDelete(item.id)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'

export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get('http://localhost:3000/heroes')
        .then((res) => {
          if (res.status === 200) {
            this.list = res.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleDelete (id) {
      // 提示用户是否删除
      if (!confirm('是否删除')) {
        return
      }
      // 发送请求
      axios.delete(`http://localhost:3000/heroes/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // 删除成功
            this.loadData()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
