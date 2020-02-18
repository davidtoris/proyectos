import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring
  const [proyectoActual] = proyecto;
  const handleRemove = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre} </h2>

      <ul className="listado-tareas"></ul>

      <button type="button" className="btn btn-eliminar" onClick={handleRemove}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
