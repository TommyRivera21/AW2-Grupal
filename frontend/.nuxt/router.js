import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f1642fa4 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _5773d37e = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages/Registro" */))
const _037ce604 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Contratos.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Contratos" */))
const _7c33f06f = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Perfil.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Perfil" */))
const _2fc26169 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\TareasUsuario.vue' /* webpackChunkName: "pages/UsuarioRegistrado/TareasUsuario" */))
const _46342537 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Login",
    component: _f1642fa4,
    name: "Login"
  }, {
    path: "/Registro",
    component: _5773d37e,
    name: "Registro"
  }, {
    path: "/UsuarioRegistrado/Contratos",
    component: _037ce604,
    name: "UsuarioRegistrado-Contratos"
  }, {
    path: "/UsuarioRegistrado/Perfil",
    component: _7c33f06f,
    name: "UsuarioRegistrado-Perfil"
  }, {
    path: "/UsuarioRegistrado/TareasUsuario",
    component: _2fc26169,
    name: "UsuarioRegistrado-TareasUsuario"
  }, {
    path: "/",
    component: _46342537,
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
