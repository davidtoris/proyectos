import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  MOSTRAR_FORMULARIO,
  AGREGAR_PROYECTO,
  OBTENER_PROYECTO
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
    formulario: false
  };

  //Dispatch para ejecutar las acceiones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: MOSTRAR_FORMULARIO
    });
  };

  const agregarProyecto = proyecto => {
    dispatch({
      type: AGREGAR_PROYECTO
    });
  };
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
        agregarProyecto,
        obtenerProyectos
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
