import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Posts from './components/pages/Blog/Posts';
import ReactDatePicker from "./components/pages/ReactDatePicker";
import DatetimePickerPage from './components/pages/DatetimePickerPage';
import LoginModal from './components/login-modal/LoginModal';
import './components/pages/PageStyle.scss';
import GalleryPage from './components/gallery/GalleryPage';
import { UsersListing } from './components/users/UsersListing';

function App() { 

  // Login Modal Flag
  const [showLoginModal, setShowLoginModal]     = useState(false);

  // Method to show / hide the modal
  const handleShowLoginModal = () => {
    setShowLoginModal(!showLoginModal); 
  }

  return (
    <Router>
      <nav className="navui1">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/users'>Users Listing</Link></li>
          <li><Link to='/datepicker'>React Datepicker</Link></li>
          <li><Link to='/datetimepicker'>React Date Time Picker</Link></li>
          <li><button className="btnui" onClick={handleShowLoginModal}>Login</button></li>
        </ul>
      </nav>

      <LoginModal show={showLoginModal} close={handleShowLoginModal} ></LoginModal>


      <div className="pagewr">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={Posts}/>
          <Route path="/gallery" component={GalleryPage}/>
          <Route path="/users" component={UsersListing}/>
          <Route path="/datepicker" component={ReactDatePicker}/>
          <Route path="/datetimepicker" component={DatetimePickerPage}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
