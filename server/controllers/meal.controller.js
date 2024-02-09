const Meal = require('../models/meal.model')

module.exports.getAllMeal = (req, res) => {
    Meal.find({})
    .then(meals => {
        console.log(meals);
        res.json({ allmeals: meals });
    })
    .catch(err => {
        console.log(err);
        res.json({ message: 'Something went wrong', error: err });
    })
}

module.exports.findOneSingleMeal = (req, res) => {
    Meal.findOne({ _id: req.params.id })
    .then(oneSingleMeal => {
        res.json({ meal: oneSingleMeal })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.CreateMeal = (req, res) => {
    Meal.create(req.body)
    .then(newlyCreateMeal => {
        res.status(201).json({ meal: newlyCreateMeal })
    })
    .catch((err) => {
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(error => error.message);
            res.status(400).json({ message: 'Validation error', errors: errors });
        } else {
            res.status(500).json({ message: 'Something went wrong', error: err });
        }
    })
}

module.exports.updateExistingMeal = (req, res) => {
    Meal.findOneAndUpdate(
        { _id: req.params.id }, req.body, { new: true, runValidators: true }
    )
    .then(updatedMeal => {
        res.json({ meal: updatedMeal })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.deleteAnExistingMeal = (req, res) => {
    Meal.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}