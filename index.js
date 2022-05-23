require("dotenv").config();
const Server = require("./server");
// const server = new Server();
// server.listen();

// CODIGO PARA INICIAR LA APP DE CONSOLA
const { app } = require("./appconsole");

const run = async () => {
  const server = new Server();
  const api = await server.listen();
  app.run();
};

run();
