import React from 'react';

const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>{props.title} is due {props.deadline}</p>
      <p className="desc">{props.desc}</p>
      <hr></hr>
      <img src={props.image} className="taskImage"></img>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
    </div>
  )
}

export default Task;