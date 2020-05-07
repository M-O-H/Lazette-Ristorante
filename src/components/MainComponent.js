// This is like a Pseudo Container Component which calls the Presentational Components (Quite Obvious)
// Duplicate App.js
import React, { Component } from "react";
// Menu Component
import Menu from "./MenuComponent";
// DishDetail import here
import Dishdetail from "./DishdetailComponent";
// Header Component
import Header from "./HeaderComponent";
// Footer Component
import Footer from "./FooterComponent";
// Home Component
import Home from "./HomeComponent";
//Contact Component
import Contact from "./ContactComponent";
// About Component
import About from "./AboutComponent";
// Import the ACTION
import { addComment, fetchDishes } from "../redux/ActionCreators";
import { actions } from "react-redux-form";

// Router
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// Above withRouter and below are used to connet this MainCompto the REDUX Store.
import { connect } from "react-redux";

// Below function maps state to be available as props to our components
// state is the state from the reduX Store
// Whatever we used as this.state.dish (say) will be changed to this.props.dish everywhere.
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    //this.state = {};
  }

  // Executes as soon as a Component is Mounted.
  componentDidMount() {
    this.props.fetchDishes();
  }

  // One way to Render a Component is like- const HomePage one.
  // One is like to render the Menu component i.e. 'inline'
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          // Only That dish will go which is featured=true in dishes object array.
          // We pass 'dish' as props to Home Component
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          // lly for promotions
          // promotion as props to Home Comp.
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          // leader as props to Home Comp.
        />
      );
    };

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
    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    const AboutPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    // exact keyword for /menu is very very important.
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes}></Menu>}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Route exact path="/aboutus" component={AboutPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// CONNECTING TO REACT STORE (The React-Redux Connect)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
