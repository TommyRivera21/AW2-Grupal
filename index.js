const app = require('./appconsole').app;
require("dotenv").config();
const Server = require("./server");
const server = new Server();
server.listen();


(async () => {

    await app.run()
})()