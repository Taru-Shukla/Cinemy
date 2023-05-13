import React, { useState } from 'react';
import './../FrontPage/FrontPageAndSearch.scss';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

 render() {
    return (
      <nav className='header-wrapper'>
      <form className='search-form' action='/property'>
        <div className='input-wrapper'>
          <Link to='/UserAccountCreate'>
            <button className="btn-signup"> SIGN UP </button>
          </Link>
          <Link to='/LoginPage'>
            <button className="btn-signin"> SIGN IN </button>
          </Link>
        </div>
      </form>
      
      </nav>
   )
  }
}
    
export default SearchBar;

// export default function SearchBar(){

//   const[query,setQuery] = useState('');
//   const navigate=useNavigate();

//   const filter=()=>{
//     alert("filter");
//   }
//   const login=(user)=>{
		 
// 		try{
// 			if(user.userName !== null){

// 				if(user.isAdmin){
// 					//admin login page 
// 					navigate("/AdminCrudMovie")
// 					console.log("Admin login");

// 				}else{
// 				navigate("/SelectGenre",{state:{filter:{filter}}},{ replace: true });
// 				}
// 			}
// 		}catch(err){
// 			alert("invalid uname/pass");
// 		}
		
		
		 
// 	  }

//   const handleSubmit=()=> {
//     // event.preventDefault();
//      //const { username, password } = this.state;
   
//      const search = {
//     movieName:query,
//     movieGenre:query,
//     movieActors: query
//      };
   
//    const url = 'http://localhost:5001/movies/getmovie';


//    fetch(url)
//    .then(response => response.json())
//    .then(data => 
//      login(data[0]));

   
//    }

//   return (
//        <nav className='header-wrapper'>
//       <form className='search-form' >
//     <img classname="image" src="images/logo.png" width= " 50px" height = "50px" alt="cinemy logo"/> 
//         <div className='input-wrapper'>
//           <input type='text' 
//           autoComplete='off' className='search-input' 
//           placeholder='Enter a Movie, Genre, Actor, Actress'
//            value={query}
//            onChange={(e) => setQuery(e.target.value)}
//            />
//            </div>
//            </form>
//            <div className='search-btn-container'>
//            <button className='search-button'  onClick={(e=>{handleSubmit()})}>Search</button>
//            </div>
//            </nav>


//   );

// }