import React from 'react'
import Complete from '../Icons/Complete'
import Delete from '../Icons/Delete'
import '../Styles/Item.css';

const Item = (props) => {
  return (
    <div className="alert alert-dark Item" role="alert">
      <Complete
        completed={props.completed}
        onComplete={props.onCompleted}
      />
      <span
        className={`Item-p ${props.completed && 'Item-p--complete'}`}
      >
        {props.text}
      </span>
      <Delete
        onDelete={props.onDeleted}
      />
    </div>
  )
}

export default Item