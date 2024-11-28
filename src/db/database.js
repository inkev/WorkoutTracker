const { Sequelize} = require('sequelize');
const { DataTypes, Op } = Sequelize

const sequelize = new Sequelize('exercises', 'user', 'pass', {
    dialect: 'sqlite',
    host: './WorkoutTracker.sqlite'
})

module.exports = sequelize;