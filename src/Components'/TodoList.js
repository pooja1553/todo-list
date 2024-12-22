import React from 'react'

const TodoList = (props) => {
  return (
    <>
    <div className='one'>
        <li className='list-item'>
            {props.item}
            <span><i className="fa-solid fa-trash-can icon" onClick={()=>props.deleteItems(props.index)}></i></span>
        </li>
    </div>
    </>
  )
}

export default TodoList