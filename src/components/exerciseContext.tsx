import { object } from 'prop-types';
import React, {createContext, SetStateAction} from 'react';

type FetchPreviousWorkoutByDate = (date:string) => object;
type FetchWorkoutByName = (name:string) => object;
type SetExerciseSetsAndReps = (name:string, sets:string, reps:string) => void;

type exercise = {
    name: string,
    sets: string,
    reps: string,
    rpe: string
}

type WorkoutDetails = {
    fetchPreviousWorkoutByDate: FetchPreviousWorkoutByDate;
    fetchWorkoutByName: FetchWorkoutByName;
    allExercises: exercise[];
    setExerciseSetsAndReps: SetExerciseSetsAndReps;
}

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
]

export const WorkoutContext = createContext<WorkoutDetails | undefined>(undefined)
type ExerciseProviderProp = {children:React.ReactNode}

const WorkoutProvider: React.FC<ExerciseProviderProp> = ({children}): React.ReactElement => {
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



    return(
        <WorkoutContext.Provider value ={{fetchPreviousWorkoutByDate, fetchWorkoutByName, allExercises, setExerciseSetsAndReps}}>{children}</WorkoutContext.Provider>
    );
}



export default WorkoutProvider