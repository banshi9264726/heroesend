<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form>
          <div class="form-group">
            <label for="name">英雄新名</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="请输入英雄姓名">
          </div>
          <div class="form-group">
            <label for="gender">英雄从别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="请输入英雄性别">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
        </form>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'
export default {
  data () {
    return {
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  methods: {
    handleAdd () {
      axios.post('http://localhost:3000/heroes', this.formData)
        .then((res) => {
          if (res.status === 201) {
            // 添加成功
            this.$router.push({
              name: 'heroes'
            })
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
