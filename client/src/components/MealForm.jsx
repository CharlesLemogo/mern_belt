import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button, // Add this line
    Container
} from '@mui/material';

const styles = {
    paper: {
        width: "25rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem", width: "100%"
    },
    button: {
        width: "30%", marginRight: "1rem"
    }
}


const MealForm = (props) => {
    const [name, setName] = useState("");
    const [minutes, setMinutes] = useState("");
    const [direction, setDirection] = useState("");
    const [gredient1, setGredient1] = useState("");
    const [gredient2, setGredient2] = useState("");
    const [gredient3, setGredient3] = useState("");
    const [errors, setErrors] = useState([]);
    const [meal, setMeal] = useState([]);
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/meal', {
            name,
            minutes,
            direction,
            gredient1,
            gredient2,
            gredient3
        })
        .then(res => {
            setMeal([...meal, res.data.meal])
            setName("");
            setMinutes("");
            setDirection("");
            setGredient1("");
            setGredient2("");
            setGredient3("");
            navigate('/meals');
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else {
                console.log(err);
            }
        });
    }

  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
    <Paper  elevation={3} style={styles.paper}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1>Speedy Meals</h1>
                <Link to="/meals">back to home</Link>
            </div>
            <p style={{color: "rgb(77, 75, 72)"}}>Add the culinary masterpiece!</p>
            <form onSubmit={onSubmitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Dish Name:</InputLabel>
                    <OutlinedInput type="text" onChange={ (e) => setName(e.target.value) }/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Total Minutes</InputLabel>
                    <OutlinedInput type="number" onChange={ (e) => setMinutes(e.target.value) }/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Directions</InputLabel>
                    <OutlinedInput type="text" onChange={ (e) => setDirection(e.target.value) }/>
                </FormControl>

                <h1>Ingredient(s) - Optional</h1>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Ingredient one</InputLabel>
                    <OutlinedInput type="text" onChange={ (e) => setGredient1(e.target.value) }/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Ingredient two</InputLabel>
                    <OutlinedInput type="text" onChange={ (e) => setGredient2(e.target.value) }/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Ingredient three</InputLabel>
                    <OutlinedInput type="text" onChange={ (e) => setGredient3(e.target.value) }/>
                </FormControl>
                {errors.length > 0 && (
                    <p style={{ color: 'red', listStyle: "none", display: "block" }}>
                        {errors.map((error, index) => (
                            <small style={{ color: 'red', listStyle: "none", display: "block" }} key={index}>{error}</small>
                        ))}
                    </p>
                )}
                <Button type="submit" variant="contained" color="primary" style={styles.button} onClick={() => navigate('../meals')}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" style={styles.button}>
                    Create
                </Button>
            </form>
        </Paper>
    </Container>
  )
}

export default MealForm;