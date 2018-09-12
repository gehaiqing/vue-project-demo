import { RouteConfig } from 'vue-router'

/**
 * B端路由
 */
import home from '@/views/b/home.vue'
let routes:Array<RouteConfig> = [{
  path: '/',
  name: 'BHome',
  component: home
}]

export default routes
