CREATE TABLE exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    sets TEXT,
    reps TEXT,
    rpe TEXT
)

INSERT INTO exercises (name, sets, reps, rpe)
VALUES ("Squats", "3", "8", "10")

DROP TABLE exercises