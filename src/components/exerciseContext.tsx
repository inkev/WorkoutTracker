import { object } from 'prop-types';
import React, {createContext, SetStateAction, useState} from 'react';
import db from '../db/statements.js'

type FetchPreviousWorkoutByDate = (date:string) => object;
type FetchWorkoutByName = (name:string) => object;
type SetExerciseSetsAndReps = (name:string, sets:string, reps:string) => void;

type exercise = {
    name: string,
    sets: string,
    reps: string,
    rpe: string
}

type workout = {
    name: string,
    exercises: exercise[]
}

type WorkoutDetails = {
    fetchPreviousWorkoutByDate: FetchPreviousWorkoutByDate;
    fetchWorkoutByName: FetchWorkoutByName;
    allExercises: exercise[];
    setExerciseSetsAndReps: SetExerciseSetsAndReps;
    currentWorkoutList: workout;
};

const allExercises: exercise[] = [
    {name: "Incline Dumbell Curls",
    sets: "3", 
    reps: "12",
    rpe: "10"},

    {name: "Squat",
    sets: "3",
    reps: "8",
    rpe: "10"
    }
];

const currentWorkout: workout = {
    name: "test",
    exercises: allExercises
}
const allWorkouts: workout[] = [];

export const WorkoutContext = createContext<WorkoutDetails | undefined>(undefined)
type ExerciseProviderProp = {children:React.ReactNode}

const WorkoutProvider: React.FC<ExerciseProviderProp> = ({children}): React.ReactElement => {
    const [currentWorkoutList, setCurrentWorkoutList] = useState<workout>(currentWorkout);
    const [allExerciseList, setAllExerciseList] = useState<workout[] | undefined> (db.getExercises)

    function fetchPreviousWorkoutByDate(date:string) {
        return allExercises;
    }

    function fetchWorkoutByName(name:string) {
        return allExercises;
    }

    function setExerciseSetsAndReps (name:string, sets:string, reps:string) {
        for(let i = 0; i < allExercises.length; i++) {
            if(name == allExercises[i].name) {
                allExercises[i].sets = sets;
                allExercises[i].reps = reps;
            }
        }
    }

    function setCurrentWorkout (workout) {
        setCurrentWorkoutList(workout)
    }

    function addExerciseList() {
        
    }

    return(
        <WorkoutContext.Provider value ={{fetchPreviousWorkoutByDate, fetchWorkoutByName, allExercises, setExerciseSetsAndReps, currentWorkoutList}}>{children}</WorkoutContext.Provider>
    );
}



export default WorkoutProvider