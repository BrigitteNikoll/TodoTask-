import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

const ACTIONS = {
  CARGAR_TAREAS: "cargar-tareas",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CARGAR_TAREAS:
      return tareas;

    default:
      return state;
  }
}

const Principal = () => {
  //Estados del componente
  const [listaTareas, setListaTareas] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);
  const [editable, setEditable] = useState(null);

  //Ciclo de vida con useEffect
  useEffect(() => {
    dispatch({ type: ACTIONS.CARGAR_TAREAS });
  }, []);

  //Función para agregar una nueva tarea
  const handleRegister = (tarea) => {
    console.log("Agregando tarea");
    const ultimoId = listaTareas[listaTareas.length - 1].id;

    setListaTareas((estadoPrevio) => [
      ...estadoPrevio,
      { id: ultimoId + 1, titulo: tarea, completado: false },
    ]);
  };

  //Función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    const nuevaLista = listaTareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
    );
    setListaTareas(nuevaLista);
  };

  //Función para eliminar una tarea
  const handleEliminar = (id) => {
    const nuevaLista = listaTareas
      .map((tarea) => (tarea.id === id ? null : tarea))
      .filter((tarea) => tarea != null);
    setListaTareas(nuevaLista);
  };

  //Función para recibir la tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  //Función para editar una tarea
  const handleEditar = (nuevaTarea) => {
    const nuevaLista = listaTareas.map((tarea) =>
      tarea.id === nuevaTarea.id
        ? {
            id: nuevaTarea.id,
            titulo: nuevaTarea.titulo,
            completado: nuevaTarea.completado,
          }
        : tarea
    );
    setListaTareas(nuevaLista);
    setEditable(nuevaLista);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario
          handleRegister={handleRegister}
          editable={editable}
          handleEditar={handleEditar}
        />
        <ListaTareas
          listaTareas={state}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
};

export default Principal;
