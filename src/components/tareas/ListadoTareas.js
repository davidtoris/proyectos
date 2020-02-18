import React, {Fragment} from 'react';


const ListadoTareas = () => {

    return ( 
        <Fragment>
            <h2>Proyecto: Título del proyecto actual </h2>

            <ul className="listado-tareas">
                
                 
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
               
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;