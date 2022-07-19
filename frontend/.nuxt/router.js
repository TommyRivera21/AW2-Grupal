import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71e21460 = () => interopDefault(import('..\\pages\\Contratos.vue' /* webpackChunkName: "pages/Contratos" */))
const _73778f42 = () => interopDefault(import('..\\pages\\CrearTareas.vue' /* webpackChunkName: "pages/CrearTareas" */))
const _071afa72 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _07e7307f = () => interopDefault(import('..\\pages\\PanelTareas.vue' /* webpackChunkName: "pages/PanelTareas" */))
const _9e572a8c = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages/Registro" */))
const _70f101c5 = () => interopDefault(import('..\\pages\\TareasUsuario.vue' /* webpackChunkName: "pages/TareasUsuario" */))
const _2d6538b3 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Perfil.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Perfil" */))
const _73fd910a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Contratos",
    component: _71e21460,
    name: "Contratos"
  }, {
    path: "/CrearTareas",
    component: _73778f42,
    name: "CrearTareas"
  }, {
    path: "/Login",
    component: _071afa72,
    name: "Login"
  }, {
    path: "/PanelTareas",
    component: _07e7307f,
    name: "PanelTareas"
  }, {
    path: "/Registro",
    component: _9e572a8c,
    name: "Registro"
  }, {
    path: "/TareasUsuario",
    component: _70f101c5,
    name: "TareasUsuario"
  }, {
    path: "/UsuarioRegistrado/Perfil",
    component: _2d6538b3,
    name: "UsuarioRegistrado-Perfil"
  }, {
    path: "/",
    component: _73fd910a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
