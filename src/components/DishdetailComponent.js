// Component to Display Details of the Dish.

//Imports
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state = {               
        }
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
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments == null)
        {
            return(<div></div>)
        }
        return (<div className="col-12 col-md-5 col-xs-12 col-sm-12 col-lg-5 col-xl-5 m-1">
            <h4>Comments</h4>
            {comments.map((comment)=>{
            return(                
                <div key={comment.id}>
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} {comment.date}</li>
                </ul>
                </div>);
        })}
        </div>
        );
    }

    render(){
        return (
        <div className="row">
        <div className="col-12 col-md-5 col-xs-12 col-sm-12 col-lg-5 col-xl-5 m-1">
        {this.renderDish(this.props.passed)}
        </div>
        {this.renderComments(this.props.passed.comments)}
        </div>
        );
    };
};

// Exporting the Component
export default Dishdetail;