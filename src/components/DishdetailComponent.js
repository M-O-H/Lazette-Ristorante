// Component to Display Details of the Dish.

//Imports
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import {Link} from 'react-router-dom';


class Dishdetail extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
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
                    <li>-- {comment.author} {new Intl.DateTimeFormat('en-US', {year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
                </div>);
        })}
        </div>
        );
    }

    render(){
        return (
        <div className="container">

        <Breadcrumb>
        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
        </Breadcrumb>

        <div className="row">
        <div className="col-12 col-md-5 col-xs-12 col-sm-12 col-lg-5 col-xl-5 m-1">
        {this.renderDish(this.props.dish)}
        </div>
        {this.renderComments(this.props.comments)}
        </div>
        </div>
        );
    };
};

// Exporting the Component
export default Dishdetail;