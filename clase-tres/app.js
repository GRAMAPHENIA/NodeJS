const express = require("express"); // require --> commonsjs
const lovecraft = require("./biblioteca.json");

const app = express();
app.disable("x-powered-by"); // Desabilitar el header X-Powered-by: Express

app.get("/", (req, res) => {
  res.json({ message: "Ejemplo de string" });
});

// Todos los recursos que sean LOVECRAFT se identifican con /lovecraft
app.get("/lovecraft", (req, res) => {
  const {genero} = req.query
  if (genero) {
    const filtro = lovecraft.filter (
      book => book.genero.some(g => g.toLowerCase() === genero.toLowerCase())
    )
    return res.json(filtro)
  }
  res.json(lovecraft);
});

app.get("/lovecraft/:id", (req, res) => {
  const { id } = req.params;
  const biblioteca = lovecraft.find((biblioteca) => biblioteca.id === id);
  if (biblioteca) return res.json(biblioteca);

  res.status(400).json({ message: "Libro no encontrado" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`El servidor escucha en el puerto http://localhost:${PORT}`);
});
