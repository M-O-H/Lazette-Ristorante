// This is like a Pseudo Container Component which calls the Presentational Components (Quite Obvious)
// Duplicate App.js
import React, { Component } from 'react';
// Menu Component
import Menu from './MenuComponent';
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
// About Component
import About from './AboutComponent';

// Import the Dishes
import { DISHES } from '../shared/dishes';
// Comments
import { COMMENTS } from '../shared/comments';
// Promotions 
import { PROMOTIONS } from '../shared/promotions';
// Leaders 
import { LEADERS } from '../shared/leaders';

// Router
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Each state is an array of objects
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  // One way to Render a Component is like- const HomePage one.
  // One is like to render the Menu component i.e. 'inline'
  render(){

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              // Only That dish will go which is featured=true in dishes object array.
              // We pass 'dish' as props to Home Component
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              // lly for promotions
              // promotion as props to Home Comp.
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
              // leader as props to Home Comp.
          />
      );
    }

      
      // DishwithId is a component.
      // It passes props- 'dish', 'comments' to Dishdetail Component.
      // RenderMenuItems passes 3 items as props to this DishWithId Component.
      // These are match, location, history. [This is default Router thing, we can't do anything].
      // match- carries the passed route parameters inside it (from RenderManuItem to DishWithId)
      // We destructure it to {match} prop.
      // location- where we are in URL location (not used here).
      // history- the history (not used here).
      // match object has params match.params has key value pairs. From RenderMenuItem the value passed is dish.id and here we key it as dishId
      // This dishId is used below in <Route />
      // parseInt converts string to Integer in base 10, hence 10 is required.
      // We pass the ONLY DISH whose ID mathches, and the COMMENT ARRAY whose dishId's match.
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


    const AboutPage = () =>{
      return(<About leaders={this.state.leaders}/>);
    }

    // exact keyword for /menu is very very important.
  return (
    <div>
    <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}/>
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path="/contactus" component={Contact}/>
        <Route exact path="/aboutus" component={AboutPage}/>
        <Redirect to="/home" />
      </Switch>
    <Footer/>
    </div>
  );
  }
}

export default Main;
