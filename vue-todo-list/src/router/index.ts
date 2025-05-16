import {createRouter,createWebHashHistory} from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      component: () => import('@/pages/todolist/index.vue')
    },
  ]
})

export default router