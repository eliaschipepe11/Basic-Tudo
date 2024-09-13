import React from 'react'
import * as c from './../ComponentStyled'
import Tarefa from './Tarefa'


const Tarefas = ({data,deletar,completar}) => {

  const deleteTask = (id)=>{
    teste(id);
  }

  return (
    <c.Tarefas>
      {
        data && data.map(
          (item,index)=> <Tarefa datatask={item} name={item.name} date={item.date} deletar={deletar} id={item.id} completar={completar} />
        )
      }
      {
        console.log(data)
      }
    </c.Tarefas>
  )
}

export default Tarefas
