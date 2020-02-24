import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return{
        ...state,
        tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
      }
    case AGREGAR_TAREA:
      return{
        ...state,
        // En el array de tareas deja lo que tengas y agrega la tarea que llega por el action.payload
        tareas: [action.payload, ...state.tareas],
        errortarea: false
      }
    case VALIDAR_TAREA:
      return{
        ...state,
        errortarea: true
      }
    case ELIMINAR_TAREA:
      return{
        ...state,
        tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
      }
    default:
      return state;
  }
};
