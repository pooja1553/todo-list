import { useState } from 'react';
import './App.css';
import TodoInput from './Components\'/TodoInput';
import TodoList from './Components\'/TodoList';

function App() {
  const [list,setlist] = useState([]);
  let addList = (text) => {
    if(text!=''){
    setlist([...list,text]);
  }
  else{
    alert("Please add something on input");
  }
}
let deleteItems = (index) => {
  let newItem = [...list];
  newItem.splice(index,1);
  setlist(newItem)
}


  return (
    <>
     <div className='box-1'>
     <TodoInput addList={addList}/>
     <h1>Todo List</h1></div>
     {/* <hr/> */}
     {list.map((items,i)=>{
      return (
        <TodoList key={i} item={items} index={i} deleteItems={deleteItems}/>
      )
     })}
    </>
  );
}

export default App;

