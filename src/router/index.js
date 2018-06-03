import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
import HeroesList from '@/views/heroes/list'
import EquipsList from '@/views/equips/list'
import WeaponsList from '@/views/weapons/list'

Vue.use(Router)

export default new Router({
  routes: [
    {name: 'home', path: '/', redirect: {name: 'heroes'}},
    {name: 'heroes', path: '/heroes', component: HeroesList},
    {name: 'equips', path: '/equips', component: EquipsList},
    {name: 'weapons', path: '/weapons', component: WeaponsList}
  ]
})
