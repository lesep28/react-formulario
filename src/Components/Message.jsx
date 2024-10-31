import React from "react";

const Message = ({ nombre, edad, pokemonFavorito }) => {
  return (
    <>
      <h4>Gracias, {nombre} por suscribirte!</h4>
      <h4>A la edad de {edad} años, tu pokemon favorito es {pokemonFavorito}</h4>
    </>
  );
};

export default Message;
