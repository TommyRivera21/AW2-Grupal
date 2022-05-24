const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

class Server {
    constructor() {
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths = {
            usuarios: '/api/usuarios',
            contratos: '/api/contratos',
            tareas: '/api/tareas',
        }
        this.conectarDB();
        this.middlewares();
        this.routes();
        this.router.use('/6toB/servicioTareas', this.app);
        this._express = express().use(this.router);
    }
    async conectarDB() {
        await dbConnection()
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.paths.usuarios, require('./routes/usuariosR'));
        this.app.use(this.paths.contratos, require('./routes/contratosR'));
        this.app.use(this.paths.tareas, require('./routes/tareasR'));

    }
    listen() {
        this._express.listen(this.port);
    }
}

module.exports = Server;