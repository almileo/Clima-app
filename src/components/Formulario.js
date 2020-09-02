import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Formulario = (props) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [error, setError] = useState(false);
  const [errorMsj, setErrorMsj] = useState("");

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar los campos
    if (busqueda.ciudad.trim() === "" || busqueda.pais === "") {
      //mostrar cartel de completar campos
      console.log("todo mal");
      setError(true);
      setErrorMsj("Todos los campos son obligatorios");
      return;
    }

    setError(false);
    setErrorMsj("");
    console.log("todo bien");

    //consulta a la API
    consultarAPI();
  };

  const consultarAPI = async () => {
    const apiKey = "9c691bb600a3d5014d1206534cac3eb2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${apiKey}&units=metric`;

    const respuesta = await fetch(url);
    console.log(respuesta);
    const resultado = await respuesta.json();
    console.log(resultado);

    if (resultado.cod === "404") {
      // mostrar el mensaje de error
      setError(true);
      setErrorMsj("La ciudad no fue encontrada");
      props.setResultadoConsulta({});
    } else {
      setError(false);
      props.setResultadoConsulta(resultado);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error === true ? (
        <Alert variant="danger">{errorMsj}</Alert>
      ) : null}

      <Form.Group controlId="ciudad">
        <Form.Label>Ciudad *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej.: Hurlingham"
          onChange={handleChange}
          name="ciudad"
        />
      </Form.Group>
      <Form.Group controlId="pais">
        <Form.Label>Pais *</Form.Label>
        <Form.Control as="select" onChange={handleChange} name="pais">
          <option value="">---Seleccione un pais---</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brasil</option>
          <option value="CL">Chile</option>
          <option value="RU">Rusia</option>
          <option value="ES">España</option>
        </Form.Control>
      </Form.Group>
      <Button variant="info" type="submit" className="w-100">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;
