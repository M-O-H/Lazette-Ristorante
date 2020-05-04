// This is like a Pseudo Container Component
// Duplicate App.js
import React, { Component } from 'react';
// Menu Component
import Menu from './MenuComponent';
// Import the Dishes
import { DISHES } from '../shared/dishes';
// DishDetail import here
import Dishdetail from './DishdetailComponent';
// Header Component
import Header from './HeaderComponent';
// Footer Component
import Footer from './FooterComponent';
// Home Component
import Home from './HomeComponent';
// Router
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  // One way to Render a Component is like const HomePage
  // One is like to render the Menu component 'inline'
  render(){

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

  return (
    <div>
    <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}/>
        <Redirect to="/home" />
      </Switch>
    <Footer/>
    </div>
  );
  }
}

export default Main;
