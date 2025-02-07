import React, { useState } from 'react'
import * as c from './../ComponentStyled'
import lixoImg from './../../assets/img/trash_30px.png'

const Tarefa = ({datatask,completar,deletar}) => {
  const [task,settask]= useState(null);
const complet = (id)=>{

}

  return (
    <c.Tarefa style={{backgroundColor:datatask.completed ?'#47474ec2':''}}>
        <c.TarefaDescrition style={{textDecoration: datatask.completed ? 'line-through' :'none'}} >
          <strong >{datatask.title}</strong>
          <i className='date'>{datatask.date}</i>
        </c.TarefaDescrition>
        <c.TarefaControls>
            <button className='button-concluir' onClick={()=>completar(datatask.id)}> Concluir</button>
            <button className='button-delete' onClick={()=>deletar(datatask.id)}> X</button>   
        </c.TarefaControls>
        {
          console.log(!datatask.completed ? 'line-through' :'none')
        }
    </c.Tarefa>
  )
}

export default Tarefa
