import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import * as yup from 'yup'
import './App.css';
import FormSchema from './Components/FormSchema'
import Form from './Components/Form';
import User from  './Components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
      
      </header>
    </div>
  );
}

export default App;
