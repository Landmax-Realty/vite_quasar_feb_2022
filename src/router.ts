import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes: RouteRecordRaw[] = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('router beforeEach', router.currentRoute.value.fullPath)
  next()
})
export default router
