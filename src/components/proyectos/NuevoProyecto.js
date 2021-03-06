import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // State desde el Context
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
    error
  } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: ""
  });

  // Extraer nombre de proyecto
  const { nombre } = proyecto;

  // Leer los inputs
  const handleChange = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  const handleForm = () => {
    mostrarFormulario();
  };

  // Submit form
  const handleSubmit = e => {
    e.preventDefault();

    // validacion del form
    if (nombre === "") return mostrarError();
    // agregar al state
    agregarProyecto(proyecto);

    // reiniciar formulario
    guardarProyecto({
      nombre: ""
    });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleForm}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {error ? (
        <p className="mensaje error">El nombre del proyecto es obigatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
