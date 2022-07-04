let request = require("request");

class Correios {
  constructor() {
    this.cepUrl = "http://viacep.com.br/ws/{CEP}/json";
  }

  consultaCEP(args) {
    let arg = Object.assign({}, args);

    if ("cep" in arg === false) {
      throw new Error("Você precisa informar um CEP ex: { cep: 00000000 }");
    }

    return new Promise((resolve, reject) => {
      let url = this.cepUrl.replace("{CEP}", arg.cep.replace("-", "", "."));

      request(url, (error, resp, body) => {
        if (error) {
          return reject(error);
        }
        try {
          return resolve(JSON.parse(body));
        } catch (e) {
          return reject({
            Erro: 404,
            MsgErro: "Cep não encontrado",
          });
        }
      });
    });
  }
}

module.exports = Correios;
