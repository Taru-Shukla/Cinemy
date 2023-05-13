import React from 'react';
import  { useState } from 'react';
import AdminUpdateMovie from '../AdminUpdateMovie/AdminUpdateMovie';
import AdminCreateMovie from '../AdminCreateMovie/AdminCreateMovie';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Item from './item.js'
import './AdminCRUDoperations.scss';
import { useNavigate } from 'react-router-dom';

export default function AdminCRUDoperations (){
    let loc=useLocation(); let nav=useNavigate();
    const navigate=useNavigate();
    const [editMovie,setEdit]=useState({
        "movieName": "updated movie name ",
    "movieDescription": "Hari om",
    "movieReleaseYear": "2021",
    "movieGenre": "Religious",
    "movieLanguage": "Hindi",
    "movieActors": [
        "Akshay Kumar",
        "Kareena Kapoor",
        "vani Kapoor"
    ],
    "movieDirector": "SanjayLeelaBhansali",
    "movieDuration": 300,
    "movieUserRating": 5,
    "movieIsForKids": true,
    "movieCertificate": "Approved",
    "movieImage": "happyImage",
    "movieIMDBRating": "9.99",
    "id": "61a6887ce4b258254bb18fbf"
    });

    const handleSubmit=()=> {
        navigate("/UserAccountCreate");
    }
    const editAction=(movie)=>{
    nav('/AdminUpdateMovie',{state:{edit:movie,movies:loc.state.movieList}},{replace:true});
            }
        
    const[movielist, setMovielist]=useState([]);
    const [ready,setready]=useState(false);
    let list=[];
           
const displaymovie = ()=>{
    let movieelement=[];
    fetch('http://localhost:5001/movies/getmovie')
         .then((response) => response.json())
         .then((movies)=> {
           
          movies.forEach(e=>{
              movieelement.push(e);
          })
            }
                   );
                  
            setMovielist(movieelement);
            console.log(movielist);
            setready(true);
    
}

    return(
        <div>
           <div className="admin">
           <button className="btn-signout"onClick={(e=>{handleSubmit()})}> Sign Out </button>
           <AdminCreateMovie>Admin create tag</AdminCreateMovie>

           <div className="grid">
              
             {loc.state.movieList.map(c => <Item editAction={editAction} movie={c} />)}
      
     </div> 
     </div>
        </div>
         
    );
}




    
  
    
   
   
  