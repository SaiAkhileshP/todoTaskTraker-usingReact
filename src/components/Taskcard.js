import React from 'react'
import "./Taskcard.css"
import Tag from './Tag'
import DeleteIcon from "../assets/delete.png"

const Taskcard = ({title, tasks, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>

        <div className='taskcard_bottom_line'>
            <div className='task_card_tags'>
                {
                  tasks.map((task , index) => <Tag key={index} taskName={task} checkTask = {true}/>)
                }
            </div>
            <div className='task_delete' onClick={() =>handleDelete(index)}>
                <img src={DeleteIcon} className='delete_icon' />
            </div>
        </div>
    </article>
  )
}

export default Taskcard