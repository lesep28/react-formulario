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
  const [errorMessage, setErrorMessage] = useState( "");

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    const regexString= /[a-zA-ZáÁ]$/;
    console.log(regexNum.test(user.edad));
    if (user.nombre.trim().length <= 3){
      setError(true);
      setErrorMessage("El nombre debe tener más de 3 carácteres")
    } 
    else if(!regexString.test(user.nombre)){
      setError(true);
      setErrorMessage("El nombre solo permite letras")
    }
    else if(!regexNum.test(user.edad)){
      setError(true);
      setErrorMessage("La edad debe ser un valor numérico")

    }
    else if((user.edad<0) || (user.edad>99)){
      setError(true);
      setErrorMessage("La edad debe ser un valor mayor a 0 y menor a 99")

    }
    else if(user.pokemonFavorito.length <= 0){
      setError(true);
      setErrorMessage("El pokemón debe tener al menos un carácter")
    }

    else {
      setShow(true);
      setError(false);
    }
    
  };



  return (
    <div>
        
      {show ? (
        <Message user={user.nombre} edad={user.edad} pokemonFavorito={user.pokemonFavorito}/>
      ) : (
 
        <form onSubmit={handleSubmit}>
          <div className={FormStyles.formContainer}>
          <span>Agrega tu Pokémon favorito completando las opciones.</span>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Edad: </label>
          <input 
            type=  "text"
            onChange={(event) =>
              setUser({ ...user, edad: event.target.value })
            }
          />
          <label>Pokémon favorito: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, pokemonFavorito: event.target.value })
            }
          />
          <button>Enviar</button>
          </div>
          
          {error ? (
            <h4 style={{ color: "red" }}>
              {errorMessage}
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
