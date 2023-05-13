import React from 'react';
import './App.scss';
import FrontPage from './components/FrontPage/FrontPage';
import AccountCreation from './components/AccountCreation/AccountCreation';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MovieDirectory from './components/MovieDirectory/MoviePage';
import Genre from './components/Genre/Genre';
import SelectGenre from './components/SelectGenre/SelectGenre';
import  Movieitems  from './components/Movieitems/Movieitems.js';
import List from './components/Movieitems/List.js';
import { Task } from './components/Task/Task.js'
import { Edittask } from './components/EditTask/Edittask';
import { AddNewTodo } from './components/AddNewTodo/AddNewTodo';
import UserAccountCreate from './components/UserAccountCreate/UserAccountCreate.js';
import AdminUpdateMovie from './components/AdminUpdateMovie/AdminUpdateMovie.js';
import  AdminCRUDoperations  from './components/AdminCRUDoperations/AdminCRUDoperations';
import Carousel from './components/Carousel/Carousel';

//routes to pages
function App() {

 

  return (
  <div>
 <Router>
    <Routes>
      <Route path="/" element={<Carousel />} />
      <Route path="AccountCreation" element={<AccountCreation />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SelectGenre" element={<SelectGenre />} />
       <Route path="/MovieDirectory" element={<MovieDirectory />} />
       <Route path="/Movieitems" element={<Movieitems/>}/>
       <Route path="/Genre" element={<Genre />} />
       <Route path="/List" element={<List />} />
       <Route path="/AdminUpdateMovie" element={<AdminUpdateMovie />} />
       <Route path="/UserAccountCreate" element={<UserAccountCreate />} />
       <Route path="/AdminCRUDoperations" element={<AdminCRUDoperations/>} />
       <Route path="/Carousel" element={<Carousel/>} />
      </Routes>
    </Router>
  </div>
   
   
   
  );
}



export default App;