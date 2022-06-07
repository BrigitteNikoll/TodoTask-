import React from "react";

const listaTareas = ({
  listaTareas,
  handleToggle,
  handleEliminar,
  recibirEditable,
}) => {
  const botonIncompleta = (id) => (
    <button className="btn btn-secondary mr-2" onClick={() => handleToggle(id)}>
      Marcar incompleta
    </button>
  );

  const botonCompleta = (id) => (
    <button className="btn btn-success mr-2" onClick={() => handleToggle(id)}>
      Marcar completada
    </button>
  );

  const botonEditar = (tarea) => (
    <button className="btn btn-warning" onClick={() => recibirEditable(tarea)}>
      Editar
    </button>
  );

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
                {tarea.completado ? "Tarea completada" : "Tarea incompleta"}
              </p>
              {tarea.completado
                ? botonIncompleta(tarea.id)
                : botonCompleta(tarea.id)}
              {tarea.completado ? botonEliminar(tarea.id) : botonEditar(tarea)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default listaTareas;
