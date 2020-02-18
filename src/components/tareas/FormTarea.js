import React, { useState } from "react";

const FormTarea = () => {
  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: ""
  });

  // extraer el nombre del proyecto
  const { nombre } = tarea;

  // Leer los valores del formulario
  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    // validar

    // Si es edición o si es nueva tarea

    guardarTarea({
      nombre: ""
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>

      <p className="mensaje error">El nombre de la tarea es obligatorio</p>
    </div>
  );
};

export default FormTarea;
