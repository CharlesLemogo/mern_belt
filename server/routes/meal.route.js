const MealController = require('../controllers/meal.controller');

module.exports = (app) => {
    app.get('/api/meal', MealController.getAllMeal);
    app.get('/api/meal/:id', MealController.findOneSingleMeal);
    app.post('/api/meal', MealController.CreateMeal);
    app.patch('/api/meal/edit/:id', MealController.updateExistingMeal);
    app.delete('/api/meal/:id', MealController.deleteAnExistingMeal);
}