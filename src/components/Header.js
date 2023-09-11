import React ,{useState}from 'react'
import Tag from './Tag'
import "./Header.css"

const Header = ({setTasks}) => {
    const [taskData , setTaskData] = useState({
        inputText:"",
        status:"Todo",
        tasks:[]
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setTaskData((prev) => {
            return {...prev, [name] : value}              
        });                                 
    }

    const selectTag = (taskName) =>{
        if(taskData.tasks.some(item => item === taskName)){
           const filterTasks =  taskData.tasks.filter(item => item !== taskName)
           
           setTaskData((prev) => {
            return {...prev, tasks : filterTasks}
           })
        }
        else{
            setTaskData((prev) => {
                return {...prev, tasks : [...prev.tasks,taskName]}
            })
        }
        
    }

    const checkTask = (task) =>{
       return taskData.tasks.some(item => item === task)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        //  console.log(taskData);
        setTasks((prev) => {
            return [...prev, taskData]
         })



         setTaskData({
            inputText:"",
            status:"Todo",
            tasks:[]
         })
         
    }

    
    // console.log(taskData.tasks)
   
  return (
    <header className='app_header'>
        
        <form onSubmit={handleSubmit}>
            <center style={{marginBottom:"15px"}}><h3>A Simple Todo Task Traker using React</h3></center>
            <input type='text' className='input' placeholder='Enter your task' name="inputText" value={taskData.inputText} onChange={handleChange}/>
            <div className='tasks'>
                <div className='taskList'>
                    <Tag taskName="HTML" selectTag={selectTag} checkTask={checkTask("HTML")}/>
                    <Tag taskName="CSS" selectTag={selectTag} checkTask={checkTask("CSS")}/>
                    <Tag taskName="JavaScript" selectTag={selectTag} checkTask={checkTask("JavaScript")}/>
                    <Tag taskName="React" selectTag={selectTag} checkTask={checkTask("React")}/>
                </div>

                <div className='status'>
                    <select className='task_status' name="status" value={taskData.status} onChange={handleChange}>
                        <option value="Todo">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    <button type='submit' className='addTask_button'>+ Add Task</button>

                </div>
            </div>
        </form>
    </header>
  )
}

export default Header

