import React, {useState , useEffect} from 'react'
import "./App.css"
import Header from './components/Header'
import Taskcolumns from './components/Taskcolumns'
import Todo from "./assets/direct-hit.png"
import Doing from "./assets/glowing-star.png"
import Done from "./assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks");

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  // console.log(tasks)
useEffect(()=>{
  localStorage.setItem("tasks" , JSON.stringify(tasks))
} ,[tasks])

  const handleDelete = (taskIndex) =>{
    alert("Are you conform to delete");
   const newTask =  tasks.filter((task, index) => index !== taskIndex)
      setTasks(newTask)
  }
  return (
    <div className='app'>
      <Header setTasks = {setTasks}/>
      <main className='main_section'>
       <Taskcolumns title="To do" icon={Todo} tasks={tasks} status="Todo" handleDelete = {handleDelete}/>
       <Taskcolumns title="Doing" icon={Doing} tasks={tasks} status="Doing" handleDelete = {handleDelete}/>
       <Taskcolumns title="Done" icon={Done} tasks={tasks} status="Done" handleDelete = {handleDelete}/>
        
      </main>
    </div>
  )
}
