const { Model, DataTypes } = require('sequelize');

const sequelize = require('./database')

class Exercises extends Model { }

Exercises.init({
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
    modelName: 'exercises',
    timestamps: false
})

module.exports = Exercises;