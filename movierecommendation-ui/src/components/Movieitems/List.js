import React from 'react';
 import { Task } from '../Task/Task.js';
import { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
 import './Movieitems.scss';
 import Item from '../AdminCRUDoperations/item.js'
 import MovieCardItems from './MovieCardItems.js';
 import './list.scss'

 export default function List(props){
    const[query,setQuery]=useState();
     const location=useLocation();
     const filter=location.state.filter;
     const [searchmovieslist, setSearhmovielist] = useState([]);
     const[show,setShow]=useState(true);
     const navigate=useNavigate();
     

     const handleSubmit=()=> {
         navigate("/UserAccountCreate");
     }

     const onSubmit=()=>{
        const searchquery = query;
        const temp = [];
    // console.log("in onsubmit");
    //console.log(searchquery);
///filter part=>
const allmovies = location.state.allmovies;
//console.log("in submit" +allmovies);

//filter.forEach(searchquery=>{
    allmovies.forEach(m=>{
        let moviegenre = (m.movieGenre).toLowerCase();
        let movieactor = (m.movieActors).map(a => a.toLowerCase());
        let lowersearchquery = searchquery.toLowerCase();
        if(moviegenre === lowersearchquery){
            temp.push(m);
        }
        else{
            movieactor.forEach(b => {
                if(b.trim() === lowersearchquery){
                    temp.push(m);
                }
                else{
                     console.log("else b");        
                 }
            }
            ) 
        }
 })
 if(!temp.length){
    setShow(false);  
 }
 setSearhmovielist (temp);
     }
   

     return(
        <div>
            <button className="btn-list" onClick={(e=>{handleSubmit()})}> Sign Out </button>
        <div>
    <div style={{display:"flex",flexDirection:"column"}}>
            
            <input type='text' autoComplete='off' className='search-input' placeholder=' &nbsp; Search Cinemy for a Movie, Genre, Actor, Actress'
          value={query}
           onChange={(e) => setQuery(e.target.value)}
           />
            <div className='search-btn-container'>
           </div>
           <h1 className="moviesearch">Searched Movies</h1>
           {show ? 
           <div className="grid"> 
                           {searchmovieslist.map(c => <MovieCardItems movie={c} />)}
            </div> 
            : <h1>No such movie  found!!!</h1>}
            
         <div >
           <button className='search-button-container' onClick={(e=>{onSubmit()})}>
            Search
           </button>
           </div>


            
            <h1 className="movierec">Recommended Movies</h1>
            <div className="grid"> 
                           {location.state.fList.map(c => <MovieCardItems movie={c} />)}
            </div>
            <h1 className="allmovierec">All Movies</h1>
            <div className="grid"> 
            
                      
                           {location.state.allmovies.map(c => <MovieCardItems movie={c} />)}
            </div>
            
        </div>
        </div>
   </div>
    )
}
