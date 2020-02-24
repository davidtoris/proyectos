import React, { useState, useContext, Fragment } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, error } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { agregarTarea, validarTarea, errortarea, obtenerTareas } = tareasContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: ""
  });

  // extraer el nombre del proyecto
  const { nombre } = tarea;

  //Si no hay proyecto seleccionado
  if(!proyecto) return null

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto

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
    if (nombre.trim() === "") {
      validarTarea();
      return
    } 

    // agregar  la nueva tarea al state de tareas
    tarea.estado = false
    tarea.proyectoId = proyectoActual.id
    agregarTarea(tarea)

    // Obtener y filtrar las tareas del proyecto actual 
    obtenerTareas(proyectoActual.id)

    //reiniciar formulario
    guardarTarea({
      nombre: ''
    });
  };

  return (
    <Fragment>
      {proyecto ? (
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
          {errortarea ? (
            <p className="mensaje error">
              El nombre de la tarea es obligatorio
            </p>
          ) : null}
        </div>
      ) : null}
    </Fragment>
  );
};

export default FormTarea;
