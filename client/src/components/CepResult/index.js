import React from "react";
import "./index.css";
const CepResult = ({ cep, Logradouro, Bairro, Localidade, UF, IBGE, DDD }) => {
  return (
    <div className="list-group list">
      <ul className="list-group-item">
        <h5>Resultado:</h5>
        <span>Cep: {cep}</span>
        <span>Logradouro: {Logradouro}</span>
        <span>Bairro: {Bairro}</span>
        <span>Localidade: {Localidade}</span>
        <span>UF: {UF}</span>
        <span>IBGE: {IBGE}</span>
        <span>DDD: {DDD}</span>
      </ul>
    </div>
  );
};

export default CepResult;
