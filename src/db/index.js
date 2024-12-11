const express = require("express");
const cors = require('cors');
const sequelize = require('./database');
const Exercises = require('./Exercises');
const workoutExercises = require('./workoutExercises');
const Workouts = require('./Workouts');
const CalendarData = require('./calendarData')
const DailyTracker = require('./dailyTracker')

Workouts.hasMany(workoutExercises);
workoutExercises.belongsTo(Workouts);

CalendarData.hasMany(DailyTracker, {
    foreignKey: 'dateID'
})
DailyTracker.belongsTo(CalendarData, {
    foreignKey: {
        name: 'dateID'
    }
})

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(cors());

app.use(express.json());

app.post('/exercises', async (req, res) => {
    try {
        await Exercises.upsert(req.body);
        res.send('Exercise is inserted');
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})

app.get('/exercises', async (req, res) => {
    const exercises = await Exercises.findAll();
    res.send(exercises);
})


app.get('/exercises/:name', async (req, res) => {
    const requestedName = req.params.name;
    const exercise = await Exercises.findAll({ where: { name: requestedName } });
    res.send(exercise);
})

app.post('/workouts', async (req, res) => {
    try {
        await Workouts.create(req.body, {
            include: [workoutExercises]
        });
        res.send('WorkoutCreated')
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
})

app.listen(3000, () => {
    console.log("app is running");
})