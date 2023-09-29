// Creacion de Api
const http = require('node:http');
const lovecraftJSON = require('./lovecraft/biblioteca.json');
// Procesar request
const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
    case 'GET':
      switch (url) {
        case '/lovecraft/biblioteca':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(lovecraftJSON));
        default:
          res.stattusCode = 404;
          res.setHeader('ContentType', 'text/html; charset=utf-8');
          return res.end('<h1>404</h1>');
      }
    case 'POST':
      switch (url) {
        case '/love': {
          const body = '';
        }
      }
  }
};
// Crear servidor
const server = http.createServer(processRequest);
// Escucha de puerto
server.listen(1234, () => {
  console.log('El servidor esta escuchando en el puerto http://localhost:1234');
});
