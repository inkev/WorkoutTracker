const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('./database')

class CalendarData extends Sequelize.Model {}

CalendarData.init({
    dateID: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'calendarData',
    timestamps: false
})

module.exports = CalendarData;