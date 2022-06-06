import React, { useState, useEffect } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

const Principal = () => {
  //Estados del componente
  const [listaTareas, setListaTareas] = useState([]);

  //Ciclo de vida con useEffect
  useEffect(() => {
    setListaTareas(tareas);
  }, []);

  //Función para agregar una nueva tarea
  const handleRegister = (tarea) => {
    console.log("Agregando tarea");
    const ultimoId = listaTareas[listaTareas.length - 1].id;

    setListaTareas([
      ...listaTareas,
      { id: ultimoId + 1, titulo: tarea, completado: false },
    ]);
  };

  //Función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    const nuevaTarea = listaTareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
    );
    setListaTareas(nuevaTarea);
  };

  //Función para eliminar una tarea
  const handleEliminar = (id) => {
    const getId = listaTareas
      .map((tarea) => (tarea.id === id ? null : tarea))
      .filter((tarea) => tarea != null);
    setListaTareas(getId);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario handleRegister={handleRegister} />
        <ListaTareas
          listaTareas={listaTareas}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
        />
      </div>
    </>
  );
};

export default Principal;
