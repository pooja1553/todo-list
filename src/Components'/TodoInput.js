import React, { useState } from 'react';

const TodoInput = (props) => {
    const [text,setText] = useState('');
  return (
    <>
    <div className='box'>
        <div className='box1'>
          <div className='box2'>
           <input placeholder='Enter text' type='text' value={text} onChange={e=>{setText(e.target.value)}}></input>
           <button onClick={()=>{props.addList(text);
            setText("")}}>+</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default TodoInput