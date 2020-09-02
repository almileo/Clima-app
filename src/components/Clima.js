import React from "react";
import Card from "react-bootstrap/Card";

const Clima = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>El clima en {props.resultadoConsulta.name} es:</Card.Title>
        <div className="text-center">
          <img
            src={`http://openweathermap.org/img/wn/${props.resultadoConsulta.weather[0].icon}@2x.png`}
            alt={props.resultadoConsulta.weather[0].main}
          />
          Temperatura {props.resultadoConsulta.main.temp} °C
        </div>

        <Card.Text className="text-center ">
          Temperatura maxima: {props.resultadoConsulta.main.temp_max} °C
        </Card.Text>
        <Card.Text className="text-center ">
          Temperatura minima: {props.resultadoConsulta.main.temp_min} °C
        </Card.Text>
        <Card.Text className="text-center ">
          Humedad: {props.resultadoConsulta.main.humidity} %
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Clima;
