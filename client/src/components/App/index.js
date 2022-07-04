import React, { useState } from "react";
import "./index.css";
import CepResult from "../CepResult/index";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

function App() {
  const [cep, setCep] = useState({});
  const [input, setInput] = useState("");

  const alertInput = async () => {
    if (input === "" || input.length < 8) {
      alert("Cep inválido!");
    }

    try {
      const { data } = await api.get(input);
      setCep(data);
      setInput("");
      return;
    } catch {
      alert("Cep inválido!");
      return;
    }
  };

  return (
    <div className="container">
      <h1>Busca Cep</h1>
      <form>
        <div className="form-group div-container">
          <input
            className="form-control"
            type="text"
            placeholder="  Digite seu CEP"
            value={input}
            maxLength="8"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => alertInput()}
          >
            Pesquisar
          </button>
        </div>
        <br />

        {cep.cep ? (
          <CepResult
            cep={cep.cep}
            Logradouro={cep.logradouro}
            Bairro={cep.bairro}
            Localidade={cep.localidade}
            UF={cep.uf}
            IBGE={cep.ibge}
            DDD={cep.ddd}
          />
        ) : (
          <div className="div-cep">Digite um Cep válido acima!</div>
        )}
      </form>
    </div>
  );
}

export default App;
