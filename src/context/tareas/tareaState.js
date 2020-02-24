import React, { useReducer } from "react";

import tareaReducer from "./tareaReducer";
import tareaContext from "./tareaContext";

import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA} from "../../types";

const TareaState = props => {
  const initialState = {
    tareas: [
      { id:1, nombre: "Que color quiero", estado: true, proyectoId: 1 },
      { id:2, nombre: "Cambiar el tamaño", estado: false, proyectoId: 2 },
      { id:3, nombre: "Modificar el State", estado: true, proyectoId: 3 },
      { id:4, nombre: "Trabajar en el Head", estado: false, proyectoId: 2 },
      { id:5, nombre: "Revisar con el cliente", estado: false, proyectoId: 1 },
      { id:6, nombre: "Que color quiero", estado: true, proyectoId: 1 },
      { id:7, nombre: "Cambiar el tamaño", estado: false, proyectoId: 3 },
      { id:8, nombre: "Modificar el State", estado: true, proyectoId: 2 },
      { id:9, nombre: "Trabajar en el Head", estado: false, proyectoId: 4 },
      { id:10, nombre: "Revisar con el cliente", estado: false, proyectoId: 4 }
    ],
    tareasproyecto: null,
    errortarea: false
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // Obtener las tareas de un proyecto
  const obtenerTareas = proyectoID => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoID
    });
  };

  // Agregar una tarea al proyecto seleccionado
  const agregarTarea = tarea =>{
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  } 

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA

    })
  }

  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
  }


  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,

        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
