

 import React from 'react';
 import { Task } from '../Task/Task.js';
import { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
 import './Movieitems.scss';

 export default function Movieitems(props){
    const [mv,setMv]=useState([]);
    const [filters,setFilters]=useState([]);
    const [allMovies,setAllMovies]=useState([]);
    const location=useLocation();
    let filteredList=[];
    const navigate=useNavigate();

    const filterTask=(arr)=>{
     const filter=location.state.filter;
      
       filter.forEach(element=>{
            arr.forEach(m=>{
              console.log(m.movieIsForKids);
                 if(element=== m.movieGenre){

                    filteredList.push(m);
                }
            })
      })
      console.log(arr);
       navigate("/list",{state:{fList:filteredList,allmovies:arr}},{ replace: true });
    }
     useEffect()
     {
         
        fetch('http://localhost:5001/movies/getmovie')
         .then((response) => response.json())
         .then((taskitems)=> {
           filterTask(taskitems);

           }
           );}

     
     return(
         <div>
             <h1>HHII Movie List</h1>
             {/* insert navbar and searchbox */}
             <h1>Search results</h1>

              <div style={{display:"flex",flexDirection:"column"}}>
      {filteredList.map(c => <li movie={c} />)}
     </div> 
     
    
    
        
         </div>
       
     );
 }