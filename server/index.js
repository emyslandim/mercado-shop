const express = require("express");
const paymentsRoutes = require("./routes/paymentsRoutes.js");
const cors = require('cors');

const app = express();
const port = 500;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Seu servidor está funcionando!');
  });

app.use("/", paymentsRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
