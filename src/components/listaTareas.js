import React from "react";
import tareas from "../utils/tareas";

const listaTareas = () => {
  const botonIncompleta = (
    <button className="btn btn-primary mr-2">Marcar incompleta</button>
  );

  const botonCompleta = (
    <button className="btn btn-primary mr-2">Marcar completada</button>
  );

  const botonEditar = <button className="btn btn-warning">Editar</button>;
  const botonEliminar = <button className="btn btn-danger">Eliminar</button>;

  return (
    <div className="row">
      {tareas.map((tarea) => (
        <div className="col-4 mb-4">
          <div className="card" key={tarea.id}>
            <div className="card-body">
              <h5 className="card-title">{tarea.titulo}</h5>
              <p className="card-text">
                {tarea.competado ? "Tarea completada" : "Tarea incompleta"}
              </p>
              {tarea.completado ? botonIncompleta : botonCompleta}
              {tarea.completado ? botonEliminar : botonEditar}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default listaTareas;
