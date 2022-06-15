import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

const ACTIONS = {
  CARGAR_TAREAS: "cargar-tareas",
  REGISTRAR_TAREA: "registrar-tarea",
  TOOGLE_TAREA: "toogle-tarea",
  DELETE_TAREA: "delete-tarea",
  UPDATE_TAREA: "update-tarea",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CARGAR_TAREAS:
      return tareas;
    case ACTIONS.REGISTRAR_TAREA:
      return [...state, crearTarea(action.payload.titulo)];
    case ACTIONS.TOOGLE_TAREA:
      return toogle(state, action.payload.id);
    case ACTIONS.DELETE_TAREA:
      return deleteTask(state, action.payload.id);
      case ACTIONS.UPDATE_TAREA:
        return editarTodo(state, action.payload.nuevaTarea);
    default:
      return state;
  }
}

function crearTarea(titulo) {
  return {
    id: Math.random(4, 1000),
    titulo,
    completado: false,
  };
}

function toogle(state, id) {
  return state.map((tarea) =>
    tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
  );
}

function deleteTask(state, id) {
  return state
    .map((tarea) => (tarea.id === id ? null : tarea))
    .filter((tarea) => tarea != null);
}

function editarTodo(state, nuevaTarea) {
  return state.map((tarea) =>
    tarea.id === nuevaTarea.id
      ? {
          id: nuevaTarea.id,
          titulo: nuevaTarea.titulo,
          completado: nuevaTarea.completado,
        }
      : tarea
  );
}

const Principal = () => {
  //Estados del componente
  /* const [listaTareas, setListaTareas] = useState([]); */
  const [state, dispatch] = useReducer(reducer, []);
  const [editable, setEditable] = useState(null);

  //Ciclo de vida con useEffect
  useEffect(() => {
    dispatch({ type: ACTIONS.CARGAR_TAREAS });
  }, []);

  //Función para agregar una nueva tarea
  const handleRegister = (titulo) => {
    dispatch({ type: ACTIONS.REGISTRAR_TAREA, payload: { titulo } });
  };

  //Función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    dispatch({ type: ACTIONS.TOOGLE_TAREA, payload: { id } });
  };

  //Función para eliminar una tarea
  const handleEliminar = (id) => {
    dispatch({ type: ACTIONS.DELETE_TAREA, payload: { id } });
  };

  //Función para recibir la tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  //Función para editar una tarea
  const handleEditar = (nuevaTarea) => {
    dispatch({ type: ACTIONS.UPDATE_TAREA, payload: { nuevaTarea } });
    setEditable(null);
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
