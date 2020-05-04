// Component to Display list of Dishes.


// Imports
import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


// Component is defined like this
// insted of input as (props), we destructured it to {dish, onClick}
    function RenderMenuItem({dish, onClick}){
        return(
            <Card onClick={()=>onClick(dish.id)}>
                <CardImg src={dish.image} alt={dish.name} width="100%"/>
                <CardImgOverlay body className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Card>
        );
    }
   
// Aliter way to implement a Funcitonal component   
// Here we input (props) instead of destructuring 
    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className="col-12 col-md-5 mt-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div> 
           
        );
    }

    



// Exporting the Component
export default Menu;