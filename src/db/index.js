const express = require("express");
const sequelize = require ('./database');
const Exercise = require('./Exercise');

sequelize.sync().then (() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.post('/exercises', (req, res) => {
    Exercise.create(req.body).then(() => {
        res.send('user is inserted')
    })
})

app.listen(3000, () => {
    console.log("app is running");
})