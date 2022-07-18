import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _603822ca = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _420999f1 = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages/Registro" */))
const _6fac1612 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Contratos.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Contratos" */))
const _dea90348 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Perfil.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Perfil" */))
const _aece8248 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\TareasUsuario.vue' /* webpackChunkName: "pages/UsuarioRegistrado/TareasUsuario" */))
const _572f7074 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\tasks\\index.vue' /* webpackChunkName: "pages/UsuarioRegistrado/tasks/index" */))
const _f8bcf3dc = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\tasks\\form.vue' /* webpackChunkName: "pages/UsuarioRegistrado/tasks/form" */))
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
    path: "/Login",
    component: _603822ca,
    name: "Login"
  }, {
    path: "/Registro",
    component: _420999f1,
    name: "Registro"
  }, {
    path: "/UsuarioRegistrado/Contratos",
    component: _6fac1612,
    name: "UsuarioRegistrado-Contratos"
  }, {
    path: "/UsuarioRegistrado/Perfil",
    component: _dea90348,
    name: "UsuarioRegistrado-Perfil"
  }, {
    path: "/UsuarioRegistrado/TareasUsuario",
    component: _aece8248,
    name: "UsuarioRegistrado-TareasUsuario"
  }, {
    path: "/UsuarioRegistrado/tasks",
    component: _572f7074,
    name: "UsuarioRegistrado-tasks"
  }, {
    path: "/UsuarioRegistrado/tasks/form",
    component: _f8bcf3dc,
    name: "UsuarioRegistrado-tasks-form"
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
