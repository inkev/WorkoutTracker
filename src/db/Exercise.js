const { Model, DataTypes } = require('sequelize');

const sequelize = require('./database')

class Exercise extends Model { }

Exercise.init({
    name: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    sets: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    reps: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    rpe: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'exercise',
    timestamps: false
})

module.exports = Exercise;