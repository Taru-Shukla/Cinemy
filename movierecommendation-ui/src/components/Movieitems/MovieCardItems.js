import './MovieCardItems.scss';  
import React, { useEffect, useRef, useState } from 'react';

export default function MovieCardItems (props){
    const [like,setLike]=useState(false);
    const whiteHeart = '\u2661';
    const blackHeart = '\u2665';

    const toggleComedy=()=>{
        setLike(!like);
    }
    const editAction=()=>{
props.editAction(props.movie);
    }
    const[liked, setLiked]= useState(null);

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

            <a href={props.movie.movieUserReviews} alt="Video Url">
                Play
                </a>
            <p className="p-order">
     Cinemy Rating   {props.movie.movieIMDBRating} /10
     
            </p>
            <button onClick={(e)=>{toggleComedy()}} className={like? "like" : "unlike"} > &#9825;</button>
            </div>
            
          
            

       </div>
    )
}
