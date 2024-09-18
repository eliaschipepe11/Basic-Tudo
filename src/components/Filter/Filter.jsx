import React from 'react'
import * as c from './FilterStyle'

function Filter({order,setorder,setfilter}) {

  
  return (
    <div style={{display:'flex', justifyContent:'space-between',  gap:'10px'}}>
      <c.Select onChange={(e)=>setfilter(e.target.value)}>
        <c.Option value="Todas" >Todas</c.Option>
        <c.Option value="Concluídas">Concluídas</c.Option>
        <c.Option value="pendentes">pendentes</c.Option>
      </c.Select>
      <c.OrderContainer >
        <c.Orderby onClick={()=> setorder('Asc')} >Asc</c.Orderby>
        <c.Orderby onClick={()=>setorder('Dec')} >Dec</c.Orderby>       
      </c.OrderContainer>
    </div>
  )
}

export default Filter
