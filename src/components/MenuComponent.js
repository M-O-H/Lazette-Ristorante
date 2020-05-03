// Component to Display list of Dishes.


// Imports
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';


// Component is defines like this
class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDish: {}
        };
    }

    //setState Methods
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        })
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 mt-5 m-1">
                    <Card key = {dish.id} onClick={()=>this.onDishSelect(dish)}>
                        <CardImg src={dish.image} alt={dish.name} width="100%"/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail passed = {this.state.selectedDish}/>
            </div> 
           
        );
    }
}


// Exporting the Component
export default Menu;