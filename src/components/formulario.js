import React, {useState} from "react";

const Formulario = ({handleRegister}) => {

  const [titulo, setTitulo] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    handleRegister(titulo)
  }

  return (
    <form className="col-4 ml-auto mr-auto mb-5">
      <div className="form-group">
        <label>Título de la tarea</label>
        <input type="text" className="form-control" onChange={(e) => setTitulo(e.target.value)}/>
        <small className="form-text text-muted">
          Escriba la tarea que desee registrar
        </small>
      </div>
      <button className="btn btn-primary" type="submit" onClick={handleClick}>
        Registrar
      </button>
    </form>
  );
};

export default Formulario;
