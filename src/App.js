import React, { Component } from 'react';
import logo from './logo.svg';
// First Component from ReactStrap
import { Navbar,NavbarBrand } from 'reactstrap'
// Menu Component
import Menu from './components/MenuComponent';
// Import the Dishes
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render(){

  return (
    <div>
    
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    /** Comment- We pass dishes to Menu i.e. the Child of App class */
    <Menu dishes={this.state.dishes}/>
    </div>
  );
  }
}

export default App;
