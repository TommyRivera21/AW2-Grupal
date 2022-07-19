import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0752cc09 = () => interopDefault(import('..\\pages\\Contratos.vue' /* webpackChunkName: "pages/Contratos" */))
const _6f9900ab = () => interopDefault(import('..\\pages\\CrearTareas.vue' /* webpackChunkName: "pages/CrearTareas" */))
const _603822ca = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _0408a1e8 = () => interopDefault(import('..\\pages\\PanelTareas.vue' /* webpackChunkName: "pages/PanelTareas" */))
const _420999f1 = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages/Registro" */))
const _2b088624 = () => interopDefault(import('..\\pages\\TareasUsuario.vue' /* webpackChunkName: "pages/TareasUsuario" */))
const _dea90348 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Perfil.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Perfil" */))
const _e26ba8b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0752cc09,
    name: "Contratos"
  }, {
    path: "/CrearTareas",
    component: _6f9900ab,
    name: "CrearTareas"
  }, {
    path: "/Login",
    component: _603822ca,
    name: "Login"
  }, {
    path: "/PanelTareas",
    component: _0408a1e8,
    name: "PanelTareas"
  }, {
    path: "/Registro",
    component: _420999f1,
    name: "Registro"
  }, {
    path: "/TareasUsuario",
    component: _2b088624,
    name: "TareasUsuario"
  }, {
    path: "/UsuarioRegistrado/Perfil",
    component: _dea90348,
    name: "UsuarioRegistrado-Perfil"
  }, {
    path: "/",
    component: _e26ba8b8,
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
