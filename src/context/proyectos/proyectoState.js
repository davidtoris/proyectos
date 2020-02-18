import React, { useReducer } from "react";
import uuid from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  MOSTRAR_FORMULARIO,
  AGREGAR_PROYECTO,
  OBTENER_PROYECTO,
  MOSTRAR_ERROR,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

const ProyectoState = props => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Potencia" },
    { id: 3, nombre: "Web App" },
    { id: 4, nombre: "React" }
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    error: false,
    proyecto: null
  };

  //Dispatch para ejecutar las acceiones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: MOSTRAR_FORMULARIO
    });
  };

  const agregarProyecto = proyecto => {
    // agregar un id con uuid
    proyecto.id = uuid.v4();
    // insertar en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    });
  };
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos
    });
  };
  const mostrarError = () => {
    dispatch({
      type: MOSTRAR_ERROR
    });
  };

  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    });
  };
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        error: state.error,
        proyecto: state.proyecto,

        mostrarFormulario,
        agregarProyecto,
        obtenerProyectos,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
