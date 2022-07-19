import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _071afa72 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _9e572a8c = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages/Registro" */))
const _19858740 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Contratos.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Contratos" */))
const _2d6538b3 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\Perfil.vue' /* webpackChunkName: "pages/UsuarioRegistrado/Perfil" */))
const _3c3ff6b6 = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\TareasUsuario.vue' /* webpackChunkName: "pages/UsuarioRegistrado/TareasUsuario" */))
const _0673cd8b = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\tasks\\index.vue' /* webpackChunkName: "pages/UsuarioRegistrado/tasks/index" */))
const _273cabca = () => interopDefault(import('..\\pages\\UsuarioRegistrado\\tasks\\form.vue' /* webpackChunkName: "pages/UsuarioRegistrado/tasks/form" */))
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
    path: "/Login",
    component: _071afa72,
    name: "Login"
  }, {
    path: "/Registro",
    component: _9e572a8c,
    name: "Registro"
  }, {
    path: "/UsuarioRegistrado/Contratos",
    component: _19858740,
    name: "UsuarioRegistrado-Contratos"
  }, {
    path: "/UsuarioRegistrado/Perfil",
    component: _2d6538b3,
    name: "UsuarioRegistrado-Perfil"
  }, {
    path: "/UsuarioRegistrado/TareasUsuario",
    component: _3c3ff6b6,
    name: "UsuarioRegistrado-TareasUsuario"
  }, {
    path: "/UsuarioRegistrado/tasks",
    component: _0673cd8b,
    name: "UsuarioRegistrado-tasks"
  }, {
    path: "/UsuarioRegistrado/tasks/form",
    component: _273cabca,
    name: "UsuarioRegistrado-tasks-form"
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
