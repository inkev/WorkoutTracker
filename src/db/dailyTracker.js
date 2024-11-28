const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('./database')

class DailyTracker extends Sequelize.Model {}

DailyTracker.init({
    exerciseID: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        unique: true
    },
    currentWeight: {
        type: DataTypes.INTEGER,
    },
    rpe: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'dailyTracker',
    timestamps: false
})

module.exports = DailyTracker;