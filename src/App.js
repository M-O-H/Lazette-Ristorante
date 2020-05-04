import React, { Component } from 'react';
// Main Component
import Main from './components/MainComponent.js';
// Custom CSS
import './App.css';
// Router
import { BrowserRouter } from 'react-router-dom';


// App Component
class App extends Component {

  render(){

  return (
    <BrowserRouter>
      <div>
        <Main></Main>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
