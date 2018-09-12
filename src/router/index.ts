import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import BRoutes from '@/router/b/BIndex'
import CRoutes from '@/router/c/CIndex'

Vue.use(Router)

/**
 * 模块路由；
 * 在模块前统一加上该目录，所有的模块路由都在该路径下
 * @param moduleName 模块名称，在模块前统一加上该目录，所有的模块路由都在该路径下
 * @param routes 路由数组
 */
function _routeModule (moduleName:string, routes:Array<RouteConfig>):Array<RouteConfig> {
  routes.forEach((route:RouteConfig) => {
    route.path = `/${moduleName}${route.path}`
  })
  return routes
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ..._routeModule('b', BRoutes),
    ..._routeModule('c', CRoutes)
  ]
})
