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



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: 0
    };
    console.log(this.props)

  }
 
    //setState Methods
    onDishSelect(dishId){
        this.setState({
            selectedDish:dishId
        });
    }

  render(){

  return (
    <div>
    <Header/>
    <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
    <Dishdetail dish={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />
    <Footer/>
    </div>
  );
  }
}

export default Main;
