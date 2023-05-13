import React from "react";
import '../LoginPage/LoginPage.scss'
import { Navigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SelectGenre from '../SelectGenre/SelectGenre.js';

import AdminCreateMovie from "../AdminCreateMovie/AdminCreateMovie";
import AdminCRUDoperations from "../AdminCRUDoperations/AdminCRUDoperations";


//document.body.style.backgroundColor="rgba(" + 54+ "," + 80 + "," + 109 + ","+255+")";

	export default function AccountCreation (props) {
		const [userName,setUserName]=useState();
		const [userPassword,setPassword]=useState();
		let [movieList,setMovieList] =useState([]);
	    const navigate=useNavigate();
	    // this.handleChange = this.handleChange.bind(this);
	    // this.handleSubmit = this.handleSubmit.bind(this);
	  
	  const filter=()=>{
			alert("filter");
	  }
	  const login=(user)=>{
		 
		try{
			if(user.userName !== null){

				if(user.isAdmin){
					//admin login page 
					console.log(movieList);
					navigate("/AdminCRUDoperations",{state:{movieList:movieList}},{ replace: true });
					
				

				}else{
				navigate("/SelectGenre",{state:{filter:{filter}}},{ replace: true });
				}
			}
		}catch(err){
			alert("invalid uname/pass");
		}
		
		
		 
	  }

	 

	 const handleSubmit=()=> {
	   // event.preventDefault();
	    //const { username, password } = this.state;
		
	    const data = {
			userName: userName,
			userPassword: userPassword,
	      recommendedMovies: [],
	      watchedMovies: [],
	      login: true,
	    };
		
		const url = 'http://localhost:5001/users/getuserdetails/'+userName+'/'+userPassword;


		fetch(url)
		.then(response => response.json())
		.then(data => 
			login(data[0]));

		
	  }
	// const  handleChange=(event)=> {
	//   const { value, name } = event.target;
	//     this.setState({ [name]: value });
	//   }
	  const  myFunction=()=> {
		var x = document.getElementById("myImg").src;
		document.getElementById("container").innerHTML = x;
	  }

	//   render() {
	//     if (this.state.done) {
	//       return <Navigate to="/" />;
	//     }

    const addMovies=(arr)=>{
		 
		  
		  let a1=[];
			   arr.forEach(m=>{
				  
				   
					a1.push(m);
			 
			   })
			  
			   setMovieList(a1);
			   
	   }
	useEffect(()=>{
		const  fetchData=async()=>{
			await fetch('http://localhost:5001/movies/getmovie')
			.then((response) => response.json())
			.then((taskitems)=> {
				   //console.log(taskitems);
			 // setMv(taskitems);
			  addMovies(taskitems);
			  }
			  );	
		}
	  fetchData();
	},[]);
	 
	    return (
		<div >
	      <div className="container-loginpage">
			   <img className="img"src="images/cinemylogo.png" alt="cinemy logo"/>
	        <form >
	          <h2>Sign-In account</h2>
	         
	          <div className="form-group">
	            <label>Username</label>
				<br/>
				<br/>
	            <input className="form-control" type="text"placeholder="username"value={userName}
	              onChange={(e) => setUserName(e.target.value)} name="username"></input>
				  <br/>
				<br/>
	          </div>
	          <div className="form-group">
	            <label>Password</label>
				<br/>
				<br/>
	            <input  className="form-control"  type="password" placeholder="password" value={userPassword}
	              onChange={(e) => setPassword(e.target.value)} name="password"></input>
				  <br/>
				<br/>
	          </div>
			  <br/>
				<br/>
	          {/* <button className="button">Sign-In</button> */}
	        </form>
			<button onClick={(e=>{handleSubmit()})} className="btn2-loginpage" type="submit" >Login</button> 
			{/* <label>==LOGIN==<NavLink to='/SelectGenre'> LOGIN </NavLink></label> */}
			<div className="subContainer-1">
			<br/>
			<br/>
			<label className="label-login">Create your Cinemy account?<NavLink to='/UserAccountCreate'> SIGN UP </NavLink></label>
			<br/>
			<br/>
			</div>
	      </div>
		  <footer class="ftr1">
			<div class="ftrtail1" >
                <div class="copyRights1">
                    <div class="leftCR1">
                        &copy; Copyright 2021, Cinemy Inc., <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy |  Services |  Terms and Conditions  </b>
                    </div>
                </div>
            </div> 
		  </footer>
		  </div>
		 
	    );
	  
		}
