import {createRouter,createWebHashHistory} from "vue-router"
import Layout from "@/layouts/index.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      component: Layout,
      redirect: '/base',
      children: [
        { path: 'base', component: () => import('@/pages/BaseTodoList/index.vue') },
      ]
    },
  ]
})

export default router