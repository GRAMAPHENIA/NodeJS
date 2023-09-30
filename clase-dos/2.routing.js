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
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>404</h1>');
      }
    case 'POST':
      switch (url) {
        case '/lovecraft': {
          let body = '';

          //escuchar el evento data
          req.on('data', (chunk) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            const data = JSON.parse(body);
            //ejemplos de lo que puedo hacer, llamar a una base de datos para guardar info
            res.writeHead(201, {
              'Content-Type': 'application/json; charset=utf-8',
            });
            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404 not found');
      }
  }
};

// Crear servidor
const server = http.createServer(processRequest);
// Escucha de puerto
server.listen(1234, () => {
  console.log('El servidor esta escuchando en el puerto http://localhost:1234');
});
