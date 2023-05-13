
 import React from 'react';
 import { Task } from '../Task/Task.js';
import { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom';
import './movieCard.scss';


export default function movieCard (props)
{
    return(
    <div className="card">
        <p className="p-title">{props.movie.movieName}</p>
        <p className="p-subtitle-1"> {props.movie.movieDescription}</p>
        <p className="p-subtitle-1">{props.movie.movieReleaseYear}</p>
        <p className="p-subtitle-1">{props.movie.movieGenre}</p>
        <p className="p-subtitle-1">{props.movie.movieActors}</p>
    </div>
)
}