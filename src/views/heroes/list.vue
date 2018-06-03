<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <router-link :to="{name: 'heroesadd'}" class="btn btn-success">Add</router-link>
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
                  <router-link :to="{name: 'heroesedit', params: {id: item.id}}">edit</router-link>
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
      this.$http.get('/heroes')
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
      this.$http.delete(`/heroes/${id}`)
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
