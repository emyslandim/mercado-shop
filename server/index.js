const express = require("express");
const paymentsRoutes = require("./routes/paymentsRoutes.js");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 500;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Seu servidor está funcionando!');
  });

app.use("/", paymentsRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
