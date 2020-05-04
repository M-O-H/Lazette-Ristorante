// This is like a Pseudo Container Component
// Duplicate App.js
import React, { Component } from 'react';
// First Component from ReactStrap
import { Navbar,NavbarBrand } from 'reactstrap'
// Menu Component
import Menu from './MenuComponent';
// Import the Dishes
import { DISHES } from '../shared/dishes';
// DishDetail import here
import Dishdetail from './DishdetailComponent';


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
    
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
    <Dishdetail dish={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />
    </div>
  );
  }
}

export default Main;
