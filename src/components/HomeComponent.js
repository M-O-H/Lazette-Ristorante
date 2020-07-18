import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return (
        <div className="container">
            <div className="container div1">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish}
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion}
                            isLoading={props.promosLoading}
                            errMess={props.promosErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader}
                            isLoading={props.leaderLoading}
                            errMess={props.leaderErrMess} />
                    </div>
                </div>
            </div>

            <Card>
                <CardImg src="https://firebasestorage.googleapis.com/v0/b/confusionserver-3dbbc.appspot.com/o/images%2Fback.jpg?alt=media&token=1f117fb2-6f6b-4350-9fdd-b838f1e23d24" alt="Wallpaper" className="wallpaper" />
                <CardImgOverlay>
                    <CardTitle className="menuItems">
                        <div className="container div2">
                            <div className="row row-header">
                                <div className="col-12 col-sm-9 intro">
                                    <h2>Introducing.....</h2>
                                    <h1><strong className="lock-down">The Recipe Man!</strong></h1>
                                    <hr className="my-1" />
                                    <h4>Bored amidst the <em className="lock-down">Lockdown??</em></h4>
                                    <p className="dalgona">We know you are tired of Dalgona Coffee, Momos, Noodles and what not!</p>
                                    <p className="dalgona">Why not try our new <em>free</em> recipe finder and get <strong>authentic & healthy</strong> recepies at home?</p>
                                    <p></p>
                                    <hr className="my-2" />
                                    <h5 className="mr-auto">Find 'Immunity Friendly' recepies only at <strong className="recipeManText">#RecipeMan</strong>.</h5>
                                    <a role="button" className="btn btn-danger tryrecipeman" href="/recipie"><i className="fa fa-cutlery fa-lg"></i> Try Recipe Man Now!</a>
                                </div>

                            </div>
                        </div>
                    </CardTitle>
                </CardImgOverlay>
            </Card>

        </div>
    );
}

export default Home;

// <div className="col-12 col-sm-3">
// <img src="https://firebasestorage.googleapis.com/v0/b/confusionserver-3dbbc.appspot.com/o/images%2Foriginal.png?alt=media&token=b75db7df-0ec8-42c6-be83-52e258efa4b9" className="rounded img-fluid joey-image" alt="Responsive Joey"></img>
// <h4 className="stay-at-home">  #StayAtHome</h4>
// <h4 className="stay-at-home">  #EatLikeJoey</h4>
// </div>