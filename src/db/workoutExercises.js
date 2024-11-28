const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('./database')

class workoutExercises extends Sequelize.Model { }

workoutExercises.init({
    exerciseID: {
        type: DataTypes.STRING,
        allowNULL: false,
        unique: true
    },
    exerciseName: {
        type: DataTypes.STRING,
        allowNULL: false,
        unique: true
    },
    sets: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    reps: {
        type: DataTypes.STRING,
        allowNULL: false
    }
}, {
    sequelize,
    modelName: 'workoutExercises',
    timestamps: false
})

module.exports = workoutExercises;