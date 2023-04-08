import React from "react";

function Saler({type, model, size, price, isSet, id}) {
    
  return (
    <div>
      <h2>{type}</h2>

      <ul>
        <li>Corte da carne: {model}</li>
        <li>Promoção No: {id}</li>
        <li>Peso da embalagem mais o corte: {size}</li>
        <li>Valor do kg: {price}</li>
      </ul>

      {isSet ? (
        <p style={{ color: "white", backgroundColor: "green" }}>
          Disponivel no estoque!
        </p>
      ) : (
        <p style={{ color: "white", backgroundColor: "red" }}>
          Infelizmente não temos mais no estoque!
        </p>
      )}
    </div>
  );
}

export default Saler;
