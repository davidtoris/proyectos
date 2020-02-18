import {
  MOSTRAR_FORMULARIO,
  AGREGAR_PROYECTO,
  OBTENER_PROYECTO
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_FORMULARIO:
      return {
        ...state,
        formulario: true
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        formulario: false
      };
    case OBTENER_PROYECTO:
      return {
        ...state,
        proyectos: action.payload
      };
    default:
      return state;
  }
};
