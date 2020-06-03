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

const RenderRecipie = ({ eachrecipie }) => {

    const [show, setShow] = useState(false);

    return (
        <Card>
            <CardImg src={eachrecipie.image} alt={eachrecipie.label} />
            <CardBody>
                <CardTitle>{eachrecipie.label}</CardTitle>
                <CardSubtitle>
                    <a href={eachrecipie.url} target="_blank"
                        rel="noopener noreferrer">
                        URL
            </a></CardSubtitle>
                <CardText>
                    <Button onClick={() => { setShow(!show) }}>
                        Ingredients
                    </Button>
                    {show && <RecipieDetails ingredients={eachrecipie.ingredients}></RecipieDetails>}
                </CardText>
            </CardBody>
        </Card>
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
        <div className="container-fluid">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Recipie Man</h3>
                <hr />
            </div>

            <Jumbotron fluid>
                <Container fluid>
                    <div className="container-fluid">
                        <h1 className="display-4" onClick={getRecipies}>RECIPE MAN welcomes you!</h1>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <p class="lead">Recipie Man is a Hero! He will remove your boredom by suggesting you
                            lip-smacking recipies!</p>
                                <hr class="my-4" />
                                <p>Type any food item on which you want the recipies.</p>
                                {alert !== "" && <Alert alert={alert} />}
                                <form className="search-form" onSubmit={onSubmit}>
                                    <input type="text" placeholder="Search Food..."
                                        autocomplete="off"
                                        onChange={onChange}
                                        className="form-control"
                                        aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                        value={query} />
                                    <input type="submit" value="search" className="btn btn-lg btn-danger schbut">
                                    </input>
                                </form>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="img-fluid" alt="Responsive image"></img>
                            </div>
                        </div>
                    </div>
                </Container>
            </Jumbotron>


            <div className="recepeee">
                {recipies !== [] && recipies.map(rec => <RenderRecipie key={uuidv4()} eachrecipie={rec.recipe}>
                </RenderRecipie>)}
            </div>
            <hr class="my-4" />
        </div>
    )
}

export default Recipie;
