import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

const Encabezado = (props) => {
  return (
    <Jumbotron className="text-center bg-dark text-light">
      <h1>{props.titulo}</h1>
      <p>
        Utilizando datos del proyecto OpenWeather <a href="https://openweathermap.org/" target="_new">https://home.openweathermap.org/</a> 
      </p>
    </Jumbotron>
  );
};

export default Encabezado;
