import React from 'react'
import "./Tag.css"
const Tag = (props) => {
  const taskStyle = {
    HTML : {backgroundColor: "#fda821"},
    CSS : {backgroundColor: "#15d4c8"},
    JavaScript : {backgroundColor: "#ffd12c"},
    React : {backgroundColor: "#4cdafc"},
    default : {backgroundColor: "#f9f9f9"}
  }
  return (
    <button type='button' 
    style={props.checkTask ? taskStyle[props.taskName] : taskStyle.default}
    className='tag' onClick={() => props.selectTag(props.taskName)}>{props.taskName}</button>
  )
}

export default Tag