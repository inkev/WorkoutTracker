const db = require('better-sqlite3')('exercises.db')
import { useContext } from 'react'

const createTable = () => {
    const sql = `
        CREATE TABLE exercises (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            sets TEXT,
            reps TEXT,
            rpe TEXT
        )
    `
    db.prepare(sql).run()
}

createTable()

export const insertTable = (name, sets, reps,rpe) => {
    const sql = `
        INSERT INTO exercises (name, sets, reps, rpe)
        VALUES (?, ?, ?, ?)
    `
    db.prepare(sql).run(name, sets, reps,rpe)
}

export const getExercises = () => {
    const sql = `
        SELECT * FROM exercises
    `
    return db.prepare(sql).all()
}

export const deleteExercise = (id) => {

}