const express = require("express"); // require --> commonsjs

const app = express();
app.disable("x-powered-by"); // Desabilitar el header X-Powered-by: Express

app.get("/", (req, res) => {
  res.json({ message: "Ejemplo de string" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`El servidor escucha en el puerto http://localhost:${PORT}`);
});
