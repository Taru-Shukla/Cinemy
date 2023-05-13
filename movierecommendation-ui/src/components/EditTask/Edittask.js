import './EditTask.scss';
import React, { useState } from 'react';

export function Edittask (props){
    const [title,setTitle]=useState(props.task.title);
    const [description,setDescription]=useState(props.task.description);
    const [duedate,setDate]=useState(props.task.duedate);
    const [duetime,setTime]=useState(props.task.duetime);
      


   const onSubmit=()=>{
       const task={
           'title':title,'description':description, 'duedate': duedate, 'duetime': duetime
       }
       props.updateTaskHandler(task,props.task.id);
    }
    
    
    return(
        <div className='container-task'>
<form  >
      <label>Enter Task Title:
      <input
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      </label> 
      <label>Enter Task Description:
      <input
          type="description" 
          value={description}
          onChange={(e) => {setDescription(e.target.value);}}
        />
      </label>

      <label>Due Date:
      <input
          type="Date" 
          value={duedate}
          onChange={(e) => setDate(e.target.value)}
        />
      </label> 

      <label>Due Time:
      <input
          type="Time" 
          value={duetime}
          onChange={(e) => setTime(e.target.value)}
        />
      </label> 
      <button type="submit" onClick={(e=>{onSubmit()})}>submit</button> 

    </form>
        </div>
    
    )
}


 