const middleware = {}

middleware['usuarioRegisstrado'] = require('..\\middleware\\usuarioRegisstrado.js')
middleware['usuarioRegisstrado'] = middleware['usuarioRegisstrado'].default || middleware['usuarioRegisstrado']

export default middleware
