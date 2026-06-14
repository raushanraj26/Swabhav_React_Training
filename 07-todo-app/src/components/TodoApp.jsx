import React, { useState } from 'react';

const TodoApp = () => {
    const [inputValue,setInputValue] =useState("");
    const [tasks,setTasks] =useState([]);
    const addTask = () => {
 const newTask = {id: Date.now(),text: inputValue,done:false};
 setTasks([ ...tasks,newTask]);
    setInputValue("");
};
const toggleTask = (id) => {}
  return (<>
    <div><h1>Todo App</h1>

      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <button onClick={addTask}>Add Task</button></div>
      <div>
        {
 tasks.map((task)=>(
   <div>
     <input type="checkbox" checked={task.done} onClick={() => toggleTask(task.id)}/>
     {task.text}

   </div>
 ))
}
      </div>
      </>
      

      
  )
}

export default TodoApp