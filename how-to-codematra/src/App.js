import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ReactDatePicker from "./components/pages/ReactDatePicker";
import './components/pages/PageStyle.scss';

function App() { 
  return (
    <Router>

      <nav className="navui1">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/datepicker'>React Datepicker</Link></li>
        </ul>
      </nav>

      <div className="pagewr">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/datepicker" component={ReactDatePicker}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
