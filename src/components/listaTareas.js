import React from "react";

const listaTareas = ({ listaTareas, handleToggle, handleEliminar }) => {
  const botonIncompleta = (id) => (
    <button className="btn btn-primary mr-2" onClick={() => handleToggle(id)}>
      Marcar incompleta
    </button>
  );

  const botonCompleta = (id) => (
    <button className="btn btn-primary mr-2" onClick={() => handleToggle(id)}>
      Marcar completada
    </button>
  );

  const botonEditar = <button className="btn btn-warning">Editar</button>;
  
  const botonEliminar = (id) => (
    <button className="btn btn-danger" onClick={() => handleEliminar(id)}>
      Eliminar
    </button>
  );

  return (
    <div className="row">
      {listaTareas.map((tarea) => (
        <div className="col-4 mb-4">
          <div className="card" key={tarea.id}>
            <div className="card-body">
              <h5 className="card-title">{tarea.titulo}</h5>
              <p className="card-text">
                {tarea.competado ? "Tarea completada" : "Tarea incompleta"}
              </p>
              {tarea.completado
                ? botonIncompleta(tarea.id)
                : botonCompleta(tarea.id)}
              {tarea.completado ? botonEliminar(tarea.id) : botonEditar}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default listaTareas;
