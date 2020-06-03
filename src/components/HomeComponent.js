import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Toast,
  ToastBody,
  ToastHeader,
  Jumbotron,
  Container
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

// Since we passed one item (say dish, promotion), we destructure it in {item}
// Also, only leaders have designation != null
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

// var div1 = {
//   backgroundImage: `url(${back})`,
//   backgroundSize: "cover",
//   width: "100%",
//   height: "800px",
//   color: "#fff",
// }


// We receive dish, promotion, leader as props from MainComponent and pass it to RenderCard Component
function Home(props) {
  return (
    <div className="div0">
      <div className="div1 col-12 col-md-12 col-sm-12 col-xl-12" >
        <h1 className="placeText">LAZETTE</h1>
        <h2 className="homeh2">The place where you relish! with an open heart.</h2>
        <p className="homep">We take inspiration from the World's best cuisines, and create
        a unique fusion experience.
        <br />Our lipsmacking creations will
      tickle your culinary senses!</p>
        <p>Also, stuck at home, try different recipes from out RecipieMan!</p>
      </div>
      <div className="container-fluid">
        <Jumbotron fluid>
          <Container fluid>
            <div className="container-fluid">
              <div className="row row-header">
                <div className="col-12 col-sm-6">
                  <h1>STUCK AT HOME?</h1>
                  <p>TRY OUT OUR RECIPIE MAN!</p>
                  <p className="">Tired of Dalgona, Momos, Pizza, Maggi and blah blah blah?</p>
                  <p className="">Try our RECIPIE MAN for free to get new ideas during your homestay...</p>
                  <a
                    role="button"
                    className="btn btn-danger btn-lg"
                    href="/recipie"
                  >
                    <i className="fa fa-cutlery"></i> RECIPIE MAN :P
                </a>
                </div>
                <div className="col-12 col-sm-6">
                  <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="img-fluid" alt="Responsive image"></img>
                </div>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <div className="row align-items-start div2">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.dish}
              isLoading={props.dishesLoading}
              errMess={props.dishesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.promotion}
              isLoading={props.promoLoading}
              errMess={props.promoErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.leader}
              isLoading={props.leaderLoading}
              errMess={props.leaderErrMess}
            />
          </div>
        </div>
      </div>

    </div >
  );
}

export default Home;
