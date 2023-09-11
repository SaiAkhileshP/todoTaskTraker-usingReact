import React from 'react'
import "./Taskcolumns.css"
import Taskcard from './Taskcard'

const Taskcolumns = (props) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'><img className='task_column_icon' src={props.icon} alt=''/> {props.title}</h2>
      
      {
        props.tasks.map((tasks,index) => tasks.status === props.status && <Taskcard key={index} title={tasks.inputText} tasks = {tasks.tasks} handleDelete = {props.handleDelete} index = {index} />)
      }

    </section>
  )
}

export default Taskcolumns