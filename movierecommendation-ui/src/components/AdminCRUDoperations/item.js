import './item.scss';  
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function item (props){
    
    const editAction=()=>{
props.editAction(props.movie);
    }
    const deleteAction=()=>{
   
        try{
            console.log("in delteaction");
        console.log(props.movie.id);
        const deletemovieID = props.movie.id;
        const uri='http://localhost:5001/movies/deletemovie/'+deletemovieID;
        fetch(uri, { method: 'DELETE' });
    
        console.log(uri);
        alert(props.movie.movieName + "  Movie Deleted !");
        

        }
        catch(error)
        {
            alert(error);
        }
        
    }

    return(
        <div className="order">
            <div>
            <img className="image-1" src={props.movie.movieImage} alt="BigCo Inc. logo"/>
            </div>
            <div style={{margin:"10px"}}>
            <p className="p-title-2">
        {props.movie.movieName}
            </p>
            <p className="p-order">
      Description:  {props.movie.movieDescription}
            </p>
            <p className="p-order">
    Genre:    {props.movie.movieGenre}
            </p>
            <p className="p-order">
     Language:   {props.movie.movieLanguage}
            </p>
            <p className="p-order">
    Duration:    {props.movie.movieDuration}
            </p>
            <p className="p-order">
     IMDB Rating   {props.movie.movieIMDBRating} /10
            </p>
            
            <a href={props.movie.movieUserReviews} >
           <button> Play</button>
           </a>
                
              
            
            <div onClick={()=>{editAction()}} className="edit"><p className="p-title-3">EDIT</p></div>
            {<div onClick={()=>{deleteAction()}} className="edit"><p className="p-title-3">Delete</p></div> }

            </div>
            
          
            

       </div>
    )
}
