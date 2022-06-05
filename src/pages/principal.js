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

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario handleRegister={handleRegister} />
        <ListaTareas listaTareas={listaTareas} />
      </div>
    </>
  );
};

export default Principal;
