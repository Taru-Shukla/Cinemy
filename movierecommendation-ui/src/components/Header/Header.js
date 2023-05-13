import React from 'react';
import SearchBar from '../FrontPage/SearchBar';
//import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './../Header/Header.scss';
// import Logo from '../images/cinemy.png';
// import User from '../images/cinemy.png';
class Header extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: ''
    }
    this.logoutHandle = this.logoutHandle.bind(this);
  }
 
  //handle logout
  logoutHandle(e) {
    e.preventDefault();
    localStorage.clear();
    this.setState({ loggedIn: false });
    this.setState({ username: '' });
    window.location.assign('/');
  }
 
  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('loggedIn') });
    this.setState({ username: localStorage.getItem('username') });
  }
 
  render() {
    return (
      <div>
      
        <header>
          <nav className='left-nav'>
         
           <SearchBar />
         </nav>
         



         </header>
       </div>
    )
  }
}
 
export default Header;