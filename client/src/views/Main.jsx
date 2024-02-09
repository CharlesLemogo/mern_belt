import { Container } from '@mui/material';
import React from 'react'
import MealDisplay from '../components/MealDisplay';
import { useState } from 'react';

const Main = () => {
  const [meal, setMeal] = useState([]);

  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
        <MealDisplay meal={meal} setMeal={setMeal}/>
    </Container>
  )
}

export default Main;