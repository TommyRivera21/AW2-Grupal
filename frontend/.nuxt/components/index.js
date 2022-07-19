export { default as CrudContratos } from '../..\\components\\CrudContratos.vue'
export { default as CrudTareas } from '../..\\components\\CrudTareas.vue'
export { default as FomularioTarea } from '../..\\components\\FomularioTarea.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as FormularioLogin } from '../..\\components\\FormularioLogin.vue'
export { default as FormularioRegistro } from '../..\\components\\FormularioRegistro.vue'
export { default as ListaTareas } from '../..\\components\\ListaTareas.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Navbar2 } from '../..\\components\\navbar2.vue'
export { default as PerfilUsuario } from '../..\\components\\PerfilUsuario.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
