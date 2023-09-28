const http = require('node:http') // protocolo HTTP

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  console.log('request received: ', req.url)
  res.end('Haaaaa!!!')
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
