import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Requests from './pages/Requests/Requests';
import CreateInvoice from './pages/Requests/CreateInvoice';
import GenerateInvoice from './pages/Requests/GenerateInvoice';
import {FormContext} from './pages/FormContext';

import './App.css';


function App() {
  const [formState, setFormState] = React.useState({})
  return (
    <FormContext.Provider value={{formState, setFormState}}>
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/requests" component={ Requests } />
          <Route exact path="/requests/create-invoice" component={ CreateInvoice } />
          <Route exact path="/requests/generate-invoice" component={ GenerateInvoice } />
        </Switch>
      </Router>
    </div>
    </FormContext.Provider>
  );
}

export default App;
