
require("dotenv").config();
const Server = require("./server");
const server = new Server();
server.listen();

// CODIGO PARA INICIAR LA APP DE CONSOLA

/* const run = async () => {
  const server = new Server();
  server.listen();
  app.run();
};

run(); */

