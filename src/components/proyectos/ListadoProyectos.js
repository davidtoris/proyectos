import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
      {proyectos.map(proyecto => (
        <CSSTransition
        key={proyecto.id}
        timeout={200}
        classNames="proyecto"
        >
          <Proyecto  proyecto={proyecto} />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
