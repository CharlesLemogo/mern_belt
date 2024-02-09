import { Container, Paper } from '@mui/material';
import React, { useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const styles = {
    paper: {
        width: "40rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem", width: "100%"
    },
    button: {
        width: "30%", marginRight: "0.5rem"
    }
   
}

const MealDisplay = (props) => {
    const {meal, setMeal} = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/meal')
        .then((res) => {
            setMeal(res.data.allmeals)
        })
        .catch((err) => console.log(err));        
    }, [])

  return (
    <Container >
        <Paper elevation={3} style={styles.paper}>
        <h1>Speedy Meals</h1>
        <Link to="/meals/new">Add a Meal</Link>
        <p style={{color: "rgb(77, 75, 72)"}}>Find inspiration with these delicious meals!</p>
        <table style={{width: "550px", height: "30px"}}>
                <thead>
                <tr>
                    <th>Meal</th>
                    <th>Prep Time</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {
                        meal.map((meal, index) => {
                            return(
                                <tr key={index}>
                                    <td>{meal.name}</td>
                                    <td>{meal.minutes}</td>
                                    <td>
                                    <Link to={'/meals/' + meal._id + "/details"}>details</Link> | <Link to={'/meals/edit/' + meal._id}>Edit</Link>
                                    </td>
                                </tr> 
                            )
                        })
                    }
                </tbody>
                </table>
        </Paper>
    </Container>
  )
}

export default MealDisplay;