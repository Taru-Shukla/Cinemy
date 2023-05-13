import './Task.scss';
import React, { useEffect, useState } from 'react';
import { AddNewTodo } from '../AddNewTodo/AddNewTodo';
import {Edittask} from '../EditTask/Edittask.js'

export function Task (props){
   const [visible,setVisible]=useState(false);
   const [descVisible,setdescVisible]=useState(false);
   const [taskStatus,settaskStatus]=useState(props.task.isTaskComplete)
 
   const onTaskClick=(title)=>{
      
    }
    const deleteItem=(id)=>{
        props.deleteHandler(id);
    }
    const updateTaskHandler=(task,id)=>{
        props.updateTaskHandler(task,id);
    }
    const toggleVisibility=()=>{
        setVisible(!visible);
    }   

     const toggleDescVisibility=()=>{
        setdescVisible(!descVisible);
        console.log(props.task);
    }
     const toggleTaskStatus=(id)=>{
         const task={'isTaskComplete':taskStatus};
        settaskStatus(!taskStatus);
       props.toggleTaskComplete(task,id)

    }

  
    return(
        <div className='container-task'>
            <p>{props.task.movieName}</p>
            <p>{props.task.movieDescription}</p>
            <p>{props.task.movieReleaseYear}</p>
            <p>{props.task.movieGenre}</p>
            <p>{props.task.movieLanguage}</p>
            <p>{props.task.movieDirector}</p>
            <p>{props.task.movieDuration}</p>
            <p>{props.task.movieUserRating}</p>
            <p>{props.task.movieIsForKids}</p>
            <p>{props.task.movieCertificate}</p>
            <p>{props.task.movieImage}</p>
            <p>{props.task.movieUserReviews}</p>
            <p>{props.task.movieIMDBRating}</p>
            <p>{props.task._id}</p>
           
        </div>
    
    )
}


 