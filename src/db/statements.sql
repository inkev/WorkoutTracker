CREATE TABLE exercises (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    sets TEXT,
    reps TEXT,
    rpe TEXT
)

INSERT INTO exercises (name, sets, reps, rpe)
VALUES ("Preacher Curls", "3", "12", "10")

DELETE FROM exercises WHERE id = 2

DROP TABLE exercises

SELECT * FROM exercises