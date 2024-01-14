import React, { useState } from 'react';
import './style.css';

const todoinputComponent = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddClick = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className='todo-input'>
      <input
        type="text"
        placeholder="Add item"
        value={taskText}
        onChange={handleInputChange}/>
      <button type="button" className="add" onClick={handleAddClick}>
        Add
      </button>

   <div id="search">
    <input type="text" placeholder="Search" />
   </div>
   <button type="button">Search</button>
  </div>
 );
};
    
export default todoinputComponent;
