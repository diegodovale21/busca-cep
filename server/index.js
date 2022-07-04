const express = require("express");
const cors = require("cors");
const Correio = require("./Correios/Correios");
const consulta = new Correio();
const app = express();
const port = 3333;

app.use(cors());
app.listen(port, () => console.log(`Ouvindo a porta ${port}`));
app.get("/", (req, res, error) => {
  const { cepFind } = req.query;

  consulta
    .consultaCEP({ cep: cepFind })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => res.send(error));
});
