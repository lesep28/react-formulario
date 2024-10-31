import React, { useState } from "react";
import Message from "./Message";

import FormStyles from "../styles/Form.module.css";


const Form = () => {

  //   const [nombre, setNombre] = useState("");
  //   const [direccion, setDireccion] = useState("");

  const [user, setUser] = useState({
    nombre: "",
    edad: "",
    epokemonFavorito: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    const regexString= /[A-Za-z]/;
    console.log(regexNum.test(user.edad));
    if (
      user.nombre.length >= 3 && regexString.test(user.nombre)&&
      regexNum.test(user.edad) && !isNaN(user.edad)&&(user.edad>0)
      //&& (user.pokemonFavorito)
      

      //regexNum.test(user.direccion)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };



  return (
    <div>
        
      {/* {condicion ? true : false } */}
      {show ? (
        <Message user = {user} />
      ) : (
 
        <form onSubmit={handleSubmit}>
          <div className={FormStyles.formContainer}>
          <span>Agregá tu Pokémon favorito completando las opciones.</span>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Edad: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />
          <label>Pokémon favorito: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />
          <button>Enviar</button>
          </div>
          
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor coloque la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });
