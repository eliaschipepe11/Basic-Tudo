import React, { useState } from 'react'
import * as c from './../ComponentStyled'
import Tarefa from './Tarefa'
import Filte from './../Filter/Filter'
import Filter from './../Filter/Filter'

const Tarefas = ({data,deletar,completar}) => {

  const [filter,setFilter]= useState('Todas')
  const [order,setOrder]= useState('Asc')
  const deleteTask = (id)=>{
    teste(id);
  }
  const filtrar = (filterType)=>{
    setFilter(filterType);
    console.log(filterType)
  }

  return (
    <c.Tarefas >
      <Filte order={order} setorder={setOrder} setfilter={setFilter}/>
      {
      
       data.filter(todo=> filter=='Todas'? todo : (filter=="Concluídas"? todo.completed: !todo.completed)).sort((a,b)=>order=='Asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))
        .map(
          (item,index)=> <Tarefa datatask={item}  deletar={deletar} completar={completar} />
        )
      }
      {
        console.log(data)
      }
    </c.Tarefas>
  )
}

export default Tarefas
