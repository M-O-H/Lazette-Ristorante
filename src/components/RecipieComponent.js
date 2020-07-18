import React, { useState } from 'react';
// to assign id's to each dish, we take help of UUID
import { v4 as uuidv4 } from "uuid";
import {
    Card,
    CardImg,
    CardText,
    CardSubtitle,
    CardBody,
    CardTitle,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Jumbotron,
    Container
} from "reactstrap";
import { Link } from "react-router-dom";

import Alert from "./AlertComponent.js"

const RecipieDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {

        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li>
                    {ingredient.text}
                </li>
                <li>
                    {ingredient.weight}
                </li>
            </ul>
        )
    })
}

const CautionRecipieDetails = ({ Cautions }) => {
    return Cautions.map(Caution => {

        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li>
                    {Caution}
                </li>
            </ul>
        )
    })
}

const HealthLabelsDetails = ({ healthLabels }) => {
    return healthLabels.map(healthLabel => {

        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li>
                    {healthLabel}
                </li>
            </ul>
        )
    })
}

const RenderRecipie = ({ eachrecipie }) => {

    const [show, setShow] = useState(false);
    console.log({ eachrecipie })// Will be shown in Browser's Console.
    return (
        <div className="col-xs col-md-3 recipe-card">
            <Card>
                <CardImg src={eachrecipie.image} alt={eachrecipie.label} />
                <CardBody>
                    <CardTitle>{eachrecipie.label}</CardTitle>
                    <CardSubtitle>
                        <a href={eachrecipie.url} target="_blank"
                            rel="noopener noreferrer">
                            URL for Recipe
            </a></CardSubtitle>
                    <CardText>
                        <Button onClick={() => { setShow(!show) }}>
                            Basic Ingredients
                    </Button>
                        {show && <RecipieDetails ingredients={eachrecipie.ingredients}></RecipieDetails>}
                        <div>
                            Calories: {eachrecipie.calories}
                        </div>
                        <div>
                            Health Tags:
                        <HealthLabelsDetails healthLabels={eachrecipie.healthLabels}></HealthLabelsDetails>
                        </div>
                        <div>
                            Cautions, contains:
                            <CautionRecipieDetails Cautions={eachrecipie.cautions}></CautionRecipieDetails>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
        </div>

    )
}

const Recipie = () => {

    // HOOKS
    const [query, setQuery] = useState("");
    const [recipies, setRecipies] = useState([]);
    const [alert, setAlert] = useState("")

    const APP_ID = "692c4457";
    const APP_KEY = "86bf43e80b416a214eeb71a9a1cb6c7a"
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getRecipies = async () => {
        if (query !== "") {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            if (!data.more) {
                return setAlert("No such food exists, mate.")
            }
            setRecipies(data.hits)
            setAlert("");
            setQuery("");
        }
        else {
            setAlert("Please fill the form, mate.")
        }

    }
    const onSubmit = (e) => {
        e.preventDefault();
        getRecipies();
    }
    const onChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div>
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                    <div className="col-12 col-sm-10">
                        <h3>Recipe Man</h3>
                        <img src="https://firebasestorage.googleapis.com/v0/b/confusionserver-3dbbc.appspot.com/o/images%2Fchef.jpg?alt=media&token=bb78a123-3e0b-4dea-9277-3f24f0fa2e7c"
                            className="rounded" alt="Responsive Chef image"></img>
                        <hr />
                    </div>
                    <div className="col-12 col-sm-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/confusionserver-3dbbc.appspot.com/o/images%2Fhero.jpg?alt=media&token=a9fe0f31-f7e6-4fe2-bbc3-611527ac057d"
                            className="rounded hero-image" alt="Responsive Chef image"></img>
                        <hr />
                    </div>
                </div>

                <Jumbotron fluid>
                    <Container>
                        <div className="container">
                            <h1 className="display-4" onClick={getRecipies}>RECIPE MAN welcomes you!</h1>
                            <div className="row row-header">
                                <div className="col-12 col-sm-6 recipecomponent-text">
                                    <p className="mr-auto">Find Immunity Friendly recepies only at RecipeMan.</p>
                                    <p class="lead">Recipe Man is a Hero! He will remove your boredom by suggesting you
                                    lip-smacking recipies!</p>
                                    <p>We know you are tired of Dalgona Coffee, Momos, Noodles and what not!</p>
                                    <p>Why not try our new <strong>free of cost</strong> "recipe finder" and get authentic recepies at home!</p>
                                    <p>And yes, we provide you with the general Health-Labels and Cautions corrsponding to each recipe</p>
                                    <hr class="my-4" />
                                    <p>Type any food item on which you want the recipies.</p>
                                    {alert !== "" && <Alert alert={alert} />}
                                    <form className="search-form" onSubmit={onSubmit}>
                                        <input type="text" placeholder="Search Food...say Pizza"
                                            autocomplete="off"
                                            onChange={onChange}
                                            className="form-control"
                                            aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                            value={query} />
                                        <input type="submit" value="search" className="btn btn-lg btn-danger schbut">
                                        </input>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/confusionserver-3dbbc.appspot.com/o/images%2Fchef.jpg?alt=media&token=bb78a123-3e0b-4dea-9277-3f24f0fa2e7c"
                                            className="rounded chef-image" alt="Responsive Chef image"></img>
                                    </form>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="img-fluid" alt="Responsive Recipe Man image"></img>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>

                <div className="row">
                    {recipies !== [] && recipies.map(rec => <RenderRecipie key={uuidv4()} eachrecipie={rec.recipe}>
                    </RenderRecipie>)}
                </div>
                <hr class="my-4" />
            </div>
        </div>
    )
}

export default Recipie;
