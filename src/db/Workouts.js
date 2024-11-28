const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('./database')

class Workouts extends Sequelize.Model { }

Workouts.init({
    workoutName: {
        type: DataTypes.STRING,
        allowNULL: false,
        unique: true
    },
}, {
    sequelize,
    modelName: 'workouts',
    timestamps: false,
})

module.exports = Workouts;