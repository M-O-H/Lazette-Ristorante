import React, { Component } from 'react';
// First Component from ReactStrap
import {Navbar, Jumbotron, NavbarBrand} from 'reactstrap'

// The reason for using class component in place of 
// Functional comp. is because we have to maintain some UI state
// here.

// React.Fragment or <> is just like a <div> to return only one component
class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;