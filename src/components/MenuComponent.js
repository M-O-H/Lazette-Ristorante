// Component to Display list of Dishes.


// Imports
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

// Component is defines like this
class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    //setState Methods
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        })
    }

    renderDish(dish){
        if(dish!=null)
        {
            return(
                <Card>
                    <CardImg src={dish.image} alt={dish.name} width="100%"/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>    
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className="col-12 col-md-5 mt-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
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
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div> 
           
        );
    }
}


// Exporting the Component
export default Menu;