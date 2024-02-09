import React, { useState } from 'react'
import { Container } from '@mui/material';
import MealForm from '../components/MealForm';


const Form = () => {
const [meal, setMeal] = useState([]);

  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
        <MealForm  meal={meal} setMeal={setMeal}/>
    </Container>
  )
}

export default Form;