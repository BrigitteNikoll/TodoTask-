import React, { useState, useEffect } from "react";

const Formulario = ({
  handleRegister,
  editable,
  handleEditar,
}) => {
  const [titulo, setTitulo] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (!editable) {
      handleRegister(titulo);
    } else {
      handleEditar({
        id: editable.id,
        titulo: titulo,
        completado: editable.completado,
      });
    }
    setTitulo("");
  };

  useEffect(() => {
    if (editable) {
      setTitulo(editable.titulo);
    }
  }, [editable]);

  return (
    <form className="col-4 ml-auto mr-auto mb-5">
      <div className="form-group">
        <label>Título de la tarea</label>
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <small className="form-text text-muted">
          Escriba la tarea que desee registrar
        </small>
      </div>
      <button
        className={editable ? "btn btn-warning" : "btn btn-primary"}
        type="submit"
        onClick={handleClick}
        disabled={!titulo}
      >
        {editable ? "Editar" : "Registrar"}
      </button>
    </form>
  );
};

export default Formulario;
