import React from "react";

const Formulario = () => {
  return (
    <form className="col-4 ml-auto mr-auto mb-5">
      <div className="form-group">
        <label>Título de la tarea</label>
        <input type="text" className="form-control" />
        <small className="form-text text-muted">
          Escriba la tarea que desee registrar
        </small>
      </div>
      <button className="btn btn-primary" type="submit">
        Registrar
      </button>
    </form>
  );
};

export default Formulario;
