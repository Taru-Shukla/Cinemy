import './AddNewTodo.scss';
import React, { useState } from 'react';

export function AddNewTodo (props){
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [duedate,setDate]=useState('');
    const [duetime,setTime]=useState('');
    const [descVisible,setdescVisible]=useState(false);
//on submit the button
   const onSubmit=()=>{
       const task={
           'title':title,'description':description, 'duedate': duedate, 'duetime': duetime
       }
       console.log(task);
       postData(task);
    }
   // data using post api 
    const postData=(task)=>{
        props.taskHandler(task);
    }

    const toggleDescVisibility=()=>{
      setdescVisible(!descVisible);
      console.log(props.task);
  }

    return(
        
<div>
          <span className="menu"  onClick={(e)=>{toggleDescVisibility()}}>&#43;</span>

          {descVisible? 
            <div className='container-task1'>
        <form className="form-container" >
      <label> <b>Enter Task Title: </b>
      <input
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      </label> 
      <label><b> &nbsp; &nbsp; Enter Task Description: </b>
      <input
          type="description" 
          value={description}
          onChange={(e) => {setDescription(e.target.value);}}
        />
        
      </label>

      <label><b>&nbsp; &nbsp; Due Date: </b>
      <input
          type="Date" 
          value={duedate}
          onChange={(e) => setDate(e.target.value)}
        />
      </label> 

      <label> <b> &nbsp; &nbsp; Due Time: </b>
      <input
          type="Time" 
          value={duetime}
          onChange={(e) => setTime(e.target.value)}
        />
      </label> 
      <button type="submit" onClick={(e=>{onSubmit()})}> &nbsp; &nbsp; submit</button> 


    </form>
    </div>
    :null}
       
       </div>)
    
}


 