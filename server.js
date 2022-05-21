const express =  require('express');
const cors=  require('cors');
const { dbConnection } = require('./database/config');

class Server
{
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths = {
            usuarios: '/api/usuarios'
        }
        this.conectarDB();
        this.middlewares();
        this.routes();
        this.router.use('/6b4/project', this.app);
        this._express = express().use(this.router);
    }
    async conectarDB(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
            this.app.use(this.paths.usuarios 
                , require('./routes/usuarios') )
    }
    listen(){
        this._express.listen( this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        } )
    }
}

module.exports = Server;