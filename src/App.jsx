
import { useState } from 'react'
import * as c from './AppStyle'
import InputArea from './components/InputArea/InputArea'
import Tarefas from './components/Tarefas/Tarefas'

function App() {

  const [data,setData] = useState([
  ])
  const [TaskName,setTaskName] = useState(''); 
  const [Error,setError] = useState('');

  const Add = (newTaskname,newdate)=>{
    let lastID= data.length<=0 ? 1 : data[data.length -1].id+1;  
    const now = new Date()
    let newTask = {id:lastID,title:`${newTaskname}`,completed:false,date:`${now.getDate()}-${now.getUTCMonth() +1}-${now.getFullYear()}`}
    setData( [...data,newTask]);    
    setTaskName('')
  }
  const remove = (id)=>{   
    let newData = data.filter(item=>item.id!=id)
    setData(newData)
  }
  const completTudo = (id)=>{
    let newdata = [...data]
     newdata.map((item)=>item.id==id?item.completed=!item.completed: item)
     setData(newdata)
  }

  return(
    <c.mainContainer>
      <c.context>
        <InputArea placeHolder={'Digite um titulo para a tarefa...'} Add={Add}  value={TaskName} onChange={(e)=>setTaskName(e.target.value)} />
        {data && data.length>0? <Tarefas data={data} completar={completTudo} deletar={remove} /> : null}
      </c.context>
    </c.mainContainer>
  )
}

export default App
