import React from "react";
import  { useState } from 'react'
import { NavLink } from "react-router-dom";
import '../UserAccountCreate/UserAccountCreate.scss'


export default function UserAccountCreate (props){
    const [uname, setUname] = useState('');
    const [upassword, setUpassword] = useState('');
    const [uemail, setUemail] = useState('');
    const [uisadmin, setUIsadmin] = useState('');

    const onSubmit=()=>{
        let tempAdmin=false;
        if(uisadmin==='Yes')
        {
             tempAdmin=true;

        }
       
        const user={
            'userName':uname,
            'userEmail':uemail,
            'userPassword':upassword,
            'isAdmin':tempAdmin
        }
        setUname('');
        setUpassword('');
        setUemail('');
        setUIsadmin('');

        postNewUser(user);
        window.confirm("Successfully created account!");
    }


   const postNewUser=(user)=>{
 
        const requestOptions ={
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        };
        fetch('http://localhost:5001/users/addnewuser', requestOptions)
         .then(response => response.json());
      }

      return(
          <div>
            <div className="container-1">
	    	<img className="img"src="images/cinemylogo.png" alt="cinemy logo"/>
            <form className="form-account">
            <h2>Create Cinemy Account</h2>
                <div className="form-group">
                    <label> User Name:
                        <input type="text"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                        />
                    </label>
	            </div>
                    <br></br>
		        <div className="form-group">
                    <label>
                        Password:
                        <input type="password"
                        value={upassword}
                        onChange={(e) => setUpassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <br></br>
                    <label>
                        User Email:
                        <input type="text"
                        value={uemail}
                        onChange={(e) => setUemail(e.target.value)}
                        />
                    </label>
                </div>
                    <br></br>
		        <div className="form-group">
                <label>
                        Is User Admin:
                        <input type="text"
                        value={uisadmin}
                        onChange={(e) => setUIsadmin(e.target.value)}
                        />
                </label>
                    </div>
                     <div  onChange={(e) => setUIsadmin(e.target.value)}>
                        <input type="radio" value="Yes" name="isadmin" /> Yes
                        <input type="radio" value="NO" name="isadmin" />  No
                     </div>

                    <br>
                    </br>
                </form>
                <button  className="button-submit-1" type="submit" onClick={(e=>{onSubmit()})}>Create my account</button>
            <br/>
            <div className="subContainer">
			<br/>
			<br/>
			    <label>Already have an account?<NavLink to="/LoginPage" className="nav-link">
			    Sign-In
                </NavLink>
                </label>
			<br/>
			<br/>
			</div>
            </div>
            <footer class="ftr">
			<div class="ftrtail" >
                <div class="copyRights">
                    <div class="leftCR">
                        &copy; Copyright 2021, Cinemy Inc., <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy |  Services |  Terms and Conditions  </b>
                    </div>
                </div>
            </div> 
		  </footer>
          </div>
      
        
    );
}
