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
//Contact Component
import Contact from './ContactComponent';
// Comment Component
import { COMMENTS } from '../shared/comments';
// Promotion Component
import { PROMOTIONS } from '../shared/promotions';
// 
import { LEADERS } from '../shared/leaders';
// Router
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  // One way to Render a Component is like const HomePage
  // One is like to render the Menu component 'inline'
  render(){

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    // Extract the match and not any other data
    // 10 in params is base 10 for integer numbers.
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

  return (
    <div>
    <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}/>
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/home" />
      </Switch>
    <Footer/>
    </div>
  );
  }
}

export default Main;
