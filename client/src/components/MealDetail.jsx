import { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";
import {
    Button,
} from '@mui/material';
const MealDetail = (props) => {
    const {meal, setMeal, removeFromDom} = props;
    const navigate = useNavigate();
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/meal/" + id)
            .then( res => {
                console.log(res.data);
                setMeal(res.data.meal);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteMeal = (mealId) => {
        axios.delete('http://localhost:8000/api/meal/' + mealId)
        .then((res) => {
            removeFromDom(mealId);
            navigate('/meals'); // Add this line
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h1>Speedy Meals</h1>
            <Link to="/meals">back to home</Link>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <p style={{color: "rgb(77, 75, 72)"}}>{meal.name} recipe</p>
        <Link to="/meals">
            <Button type="submit" variant="contained" color="primary" style={{color: 'white', backgroundColor: 'red'}} onClick={() => deleteMeal(meal._id)}>
            Remove
            </Button>
        </Link>
        </div>
            <p>Cook Time: {meal.minutes} minutes</p>
            <h5>Ingredients: </h5>
            {meal.gredient1}<br/>
            {meal.gredient2}<br/>
            {meal.gredient3}<br/>
            <p>Directions: {meal.direction}</p>
        </div>
    );
}
export default MealDetail;

