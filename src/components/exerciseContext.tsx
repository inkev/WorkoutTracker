import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

const API_BASE_URL = 'http://localhost:3000'

type FetchAllExercises = () => Promise<exercise[]>;
type InsertToAllExercise = (exercise: exercise) => object;

type workoutExercise = {
    exerciseID: string,
    exerciseName: string,
    sets: string,
    reps: string,
    workoutId: number
}

type exercise = {
    exerciseID: string,
    exerciseName: string,
    sets: string,
    reps: string
}

type workout = {
    name: string,
    exercises: workoutExercise[]
}

type WorkoutDetails = {
    allExerciseList: exercise[];
    fetchAllExercises: FetchAllExercises;
    insertToAllExercise: InsertToAllExercise;
    currentWorkoutList: workout;
};
const allWorkouts: workout = {
    name: "yes",
    exercises: [{
        exerciseID: "1",
        exerciseName: "1",
        sets: "2",
        reps: "2",
        workoutId: 2
    }]
};

const exerciseList: exercise[] = [{
    exerciseID: "1",
    exerciseName: "1",
    sets: "2",
    reps: "2",
}]


export const WorkoutContext = createContext<WorkoutDetails>(undefined!)
type ExerciseProviderProp = {children:React.ReactNode}

const WorkoutProvider: React.FC<ExerciseProviderProp> = ({children}): React.ReactElement => {
    const [currentWorkoutList, setCurrentWorkoutList] = useState<workout>(allWorkouts);
    const [allExerciseList, setAllExerciseList] = useState<exercise[]> ([]);

    async function fetchAllExercises(): Promise<exercise[]> {
        try {
            console.log("Making API call...")
            const response = await axios.get('http://localhost:3000/exercises', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setAllExerciseList(response.data);
            console.log("API response: ", response.data)
            return allExerciseList;

        } catch(error) {
            console.error('Error grabbing exercise list', error)
            throw error
        }
    }

    useEffect(() => {
        console.log("Fetching Exercises... ");
        fetchAllExercises();
    }, []);

    async function insertToAllExercise(exercise: exercise) {
        try {
            axios.post(`http://localhost:3000/exercises`, {
                exercise
            });
        } catch(error) {
            console.error('Error inserting to list', error)
            throw error
        }
    }

    return(
        <WorkoutContext.Provider value ={{fetchAllExercises, insertToAllExercise, allExerciseList, currentWorkoutList}}>{children}</WorkoutContext.Provider>
    );
}

export default WorkoutProvider