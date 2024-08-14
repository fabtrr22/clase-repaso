import React, { useState } from "react";
import Message from "./Message";

const Form = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [flag, setFlag] = useState(false);
  //Crear un estado para manejar el renderizado del mensaje de error

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    //Realizar validaciones para después mostrar un mensaje de error
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Entradas para {show.artista}</button>
      </form>
      {flag ? <Message name={name} email={email} /> : null}
    </div>
  );
};

export default Form;