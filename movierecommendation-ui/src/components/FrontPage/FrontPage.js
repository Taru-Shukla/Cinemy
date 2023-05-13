import React,{useState} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './../FrontPage/FrontPageAndSearch.scss';
import ModalVideo from 'react-modal-video';
import SearchBar from './../FrontPage/SearchBar';
import PropBar from './../PropBar/PropBar';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipe = this.swipe.bind(this);
    this.state = {
      loggedIn: false,
      username: '',
      showPopup: false,
      isOpen: false

    }
    this.openModal = this.openModal.bind(this)
  }
  openModal () {
    this.setState({isOpen: true})
  }

  swipe(){
    const conent = document.querySelector('#content');
    conent.scrollLeft -= 500;
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (<div className='display'>
    <h1 className='heading'>Welcome to movie recommendation</h1>
    <h1 className="teading-2">
        Top Pick's
      </h1>
  
    <div className='front-page-wrapper'>
    <Header />
      <div className='search-container'>  
        <header className='front-page-header'>
          
        </header>       
      </div>
    </div>
    {/* <div className="swipe" id="content">
      <button onClick={this.swipe.bind(this)} id="left-button"> 
      {
      this.state.isToggleOn ? 'ON' : 'OFF' 
      }
      Swipe </button>
      <div className="internal">class 1</div>
      <div className="internal">class 2</div>
      <div className="internal">class 3</div>
      <div className="internal">class 4</div>
      <div className="internal">class 1</div>
      <div className="internal">class 2</div>
      <div className="internal">class 3</div>
      <div className="internal">class 4</div>
  </div> */}
    {/* <div className = "video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/JcgJvJqCdrw" 
    title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>
</div> */}

<div className="card">
        <img className="image"src="images/HarryPotter1.jpeg" alt="Part 1"/>
        <img className="img1"src="images/star.png"/>
       <p className="movie-desc">7.6<br/>
       Harry Potter and the Philosopher's Stone
       <br/>
       <br/>
       <br/>
       <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='VyHV0BRtdxo' onClose={() => this.setState({isOpen: false})} />
        <button className="btn-1" onClick={this.openModal}>Watch Trailer</button>
      </React.Fragment>
       </p>
       
       {this.state.showPopup ? 
      
          <Popup
          closePopup={this.openModal}/>: null
        }

  </div>
  <div className="card-1">
        <img className="image"src="images/HarryPotter2.jpeg" alt="Part 1"/>
        <img className="img1"src="images/star.png"/>
       <p className="movie-desc">7.4<br/>
       Harry Potter and the Chamber Of Secrets
       <br/>
       <br/>
       <br/>
       <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='1bq0qff4iF8' onClose={() => this.setState({isOpen: false})} />
        <button className="btn-1" onClick={this.openModal}>Watch Trailer</button>
      </React.Fragment> 
      </p>
       
       {this.state.showPopup ? 
      
          <Popup
          closePopup={this.togglePopup.bind(this)}/>: null
        }

  </div>
  <div className="card-2">
        <img className="image"src="images/HarryPotter3.jpeg" alt="Part 1"/>
        <img className="img1"src="images/star.png"/>
       <p className="movie-desc">7.9<br/>
       Harry Potter and the Prisoner of Azkaban
       <br/>
       <br/>
       <br/>
       <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='1ZdlAg3j8nI' onClose={() => this.setState({isOpen: false})} />
        <button className="btn-1" onClick={this.openModal}>Watch Trailer</button>
      </React.Fragment> 
         </p>
       
       {this.state.showPopup ? 
      
          <Popup
          closePopup={this.togglePopup.bind(this)}/>: null
        }

  </div>
  <div className="card-3">
        <img className="image"src="images/HarryPotter4.jpeg" alt="Part 1"/>
        <img className="img1"src="images/star.png"/>
       <p className="movie-desc">7.7<br/>
       Harry Potter and the Goblet of Fire
       <br/>
       <br/>
       <br/>
       <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='3EGojp4Hh6I' onClose={() => this.setState({isOpen: false})} />
        <button className="btn-1" onClick={this.openModal}>Watch Trailer</button>
      </React.Fragment>
             </p>
       
       {this.state.showPopup ? 
      
          <Popup
          closePopup={this.togglePopup.bind(this)}/>: null
        }

  </div>
  <div className="card-4">
        <img className="image"src="images/HarryPotter5.jpeg" alt="Part 1"/>
        <img className="img1"src="images/star.png"/>
       <p className="movie-desc">7.5<br/>
       Harry Potter and the Order of the Phoenix
       <br/>
       <br/>
       <br/>
       <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='y6ZW7KXaXYk' onClose={() => this.setState({isOpen: false})} />
        <button className="btn-1" onClick={this.openModal}>Watch Trailer</button>
      </React.Fragment>     
        </p>
       
       {this.state.showPopup ? 
      
          <Popup
          closePopup={this.togglePopup.bind(this)}/>: null
        }

  </div>
 <Footer />
  </div>
    )
  }
}

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>Back</button>
        </div>
      </div>
    );
  }
}
export default FrontPage;