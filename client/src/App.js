import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'
import { Container } from '@mui/material';
import Main from './views/Main';
import Form from './views/Form'
import MealEdit from './components/MealEdit';
import MealDetail from './components/MealDetail';
import Start from './views/Start';

function App() {
  const [meal, setMeal] = useState([]);
  const removeFromDom = (mealId) => {
      setMeal(meal.filter((p) => p._id !== mealId))
  }
  return (
    <Container>
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="/meals" default /> 
        <Route element={<Form />} path="/meals/new" />
        <Route element={<MealEdit />} path="/meals/edit/:id" />
        <Route element={<MealDetail meal={meal} setMeal={setMeal} removeFromDom={removeFromDom}/>} path="/meals/:id/details" />
        <Route element={<Start />} path="/" />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
