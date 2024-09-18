import React from 'react'
import { useState } from 'react'
import * as c from './../ComponentStyled'

const InputArea = ({placeHolder,Add,value,onChange}) => {

  const [Error,setError] = useState('')

  
  const  Submit = (e)=>{
    e.preventDefault();
    if(!value ){
      setError('Digite um nome para atarefa..')
      strop = setTimeout(() =>setError(''), 7500);
      return; 
    }
      Add(value);

  }

  return (
    <div >
      <c.InputArea onSubmit={(e)=>Submit(e)}>
      <c.Input placeholder={placeHolder} value={value} te onChange={onChange} />
      <c.Button type='submit' onClick={Submit} >Add</c.Button>
      </c.InputArea>
      <p className='error-message' >{Error}</p>
    </div>
    
  )
}

export default InputArea
