import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Encabezado from "./components/Encabezado";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Footer from './components/Footer';

function App() {
  const [resultadoConsulta, setResultadoConsulta] = useState({});

  return (
    <div>
      <Encabezado titulo="App del clima"></Encabezado>
      <section className="container">
        <div className="row vh-100">
          <div className="col-sm-12 col-md-6">
            {Object.entries(resultadoConsulta).length !== 0 ? (
              <Clima resultadoConsulta={resultadoConsulta}></Clima>
            ) : null}
          </div>
          <div className="col-sm-12 col-md-6">
            <Formulario
              setResultadoConsulta={setResultadoConsulta}
            ></Formulario>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
