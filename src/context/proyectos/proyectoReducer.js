import {
  MOSTRAR_FORMULARIO,
  AGREGAR_PROYECTO,
  OBTENER_PROYECTO,
  MOSTRAR_ERROR,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_FORMULARIO:
      return {
        ...state,
        formulario: true
      };
    case MOSTRAR_ERROR:
      return {
        ...state,
        error: true
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        error: false,
        formulario: false
      };
    case OBTENER_PROYECTO:
      return {
        ...state,
        proyectos: action.payload
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(
          proyecto => proyecto.id === action.payload
        )
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          proyecto => proyecto.id !== action.payload
        ),
        proyecto: null
      };
    default:
      return state;
  }
};
