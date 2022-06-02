import React from 'react'
import Formulario from '../components/formulario'
import ListaTareas from '../components/listaTareas'

const Principal = () => {
  return (
<>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario/>
        <ListaTareas/>
      </div>
    </>
  )
}

export default Principal;