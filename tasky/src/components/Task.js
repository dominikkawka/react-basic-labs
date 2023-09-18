import React from 'react';

const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>{props.title} is due {props.deadline}</p>
      <p className="desc">{props.desc}</p>
      <hr></hr>
      <img src={props.image} height="80px" width="80px"></img>
      
    </div>
  )
}

export default Task;