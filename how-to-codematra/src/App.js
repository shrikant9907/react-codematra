import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ReactDatePicker from "./components/pages/ReactDatePicker";
import DatetimePickerPage from './components/pages/DatetimePickerPage';
import LoginModal from './components/login-modal/LoginModal';
import './components/pages/PageStyle.scss';

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
          <li><Link to='/datepicker'>React Datepicker</Link></li>
          <li><Link to='/datetimepicker'>React Date Time Picker</Link></li>
          <li><button class="btnui" onClick={handleShowLoginModal}>Login</button></li>
        </ul>
      </nav>

      <LoginModal show={showLoginModal} close={handleShowLoginModal} ></LoginModal>


      <div className="pagewr">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/datepicker" component={ReactDatePicker}/>
          <Route path="/datetimepicker" component={DatetimePickerPage}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
