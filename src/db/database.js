const { Sequelize} = require('sequelize');


const sequelize = new Sequelize('exercises', 'user', 'pass', {
    dialect: 'sqlite',
    host: './exercises.sqlite'
})

module.exports = sequelize;