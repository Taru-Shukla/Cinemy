import React from "react";
import './AccountCreation.scss'
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

	class AccountCreation extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      email: "",
	      password: "",
	      firstname: "",
	      lastname: "",
	      username: "",
	      done: false,
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }
	// Handle submit event
	  handleSubmit(event) {
	    event.preventDefault();
	    const { username, password, email, firstname, lastname } = this.state;
	    const data = {
	      username: username,
	      password: password,
	      email: email,
	      firstname: firstname,
	      lastname: lastname,
	      recommendedMovies: [],
	      watchedMovies: [],
	      login: true,
	    };
	    console.log("submitted");
	    fetch("/api/v1/Users", {
	      method: "POST",
	      headers: {
	        "Content-Type": "application/json",
	      },
	      body: JSON.stringify(data),
	    })
	      .then((res) => {
	        return res.json();
	      })
	      .then((res) => {
	        if (res.created) {
	          this.setState({ done: true });
	          this.props.handleLogin(data);
	        }
	      })
	      .catch((err) => {
	        console.log("error is :" + err.message);
	      });
	  }
	  handleChange(event) {
	    const { value, name } = event.target;
	    this.setState({ [name]: value });
	  }
	  // image  by element id
	  myFunction() {
		var x = document.getElementById("myImg").src;
		document.getElementById("container").innerHTML = x;
	  }

	  render() {
	    if (this.state.done) {
	      return <Navigate to="/" />;
	    }
	    return (
	      <div className="container">
			<img className="img"src="images/cinemylogo.png" alt="cinemy logo"/>
	        <form onSubmit={this.handleSubmit}>
	          <h2>Create account</h2>
	          <div className="form-group">
	            <label>First Name</label>
				<br/>
				<br/>
	            <input className="form-control" type="text" placeholder="firstname"value={this.state.firstname}
	              onChange={this.handleChange} name="firstname"></input>
				  <br/>
				<br/>
	          </div>
	          <div className="form-group">
	            <label>Last Name</label>
				<br/>
				<br/>
	            <input className="form-control" type="text" placeholder="lastname" value={this.state.lastname}
	              onChange={this.handleChange} name="lastname"></input>
				  <br/>
				<br/>
	          </div>
	          <div className="form-group">
	            <label>Email</label>
				<br/>
				<br/>
	            <input className="form-control" type="email" placeholder="email"value={this.state.email}
	              onChange={this.handleChange} name="email"></input>
				  <br/>
				<br/>
	          </div>
	          <div className="form-group">
	            <label>Username</label>
				<br/>
				<br/>
	            <input className="form-control" type="text"placeholder="username"value={this.state.username}
	              onChange={this.handleChange} name="username"></input>
				  <br/>
				<br/>
	          </div>
	          <div className="form-group">
	            <label>Password</label>
				<br/>
				<br/>
	            <input  className="form-control"  type="password" placeholder="password" value={this.state.password}
	              onChange={this.handleChange}  name="password" ></input>
				  <br/>
				<br/>
	          </div>
			  <br/>
				<br/>
	          <button className="button">Create your Cinemy Account</button>
	        </form>
			<div className="subContainer">
			<br/>
			<br/>
			<label>Already have an account?<NavLink to="/LoginPage" className="nav-link">
			Sign-In
             </NavLink></label>
			<br/>
			<br/>
			</div>
			<footer>
			<div class="ftrtail">
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
	}
	export default AccountCreation;

