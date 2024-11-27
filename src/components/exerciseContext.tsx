import { object } from 'prop-types';
import React, {createContext, SetStateAction, useState} from 'react';

type FetchPreviousWorkoutByDate = (date:string) => object;
type FetchWorkoutByName = (name:string) => object;
type SetExerciseSetsAndReps = (name:string, sets:string, reps:string, rpe:string) => void;

type exercise = {
    id: number
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
    allExerciseList: exercise[];
    currentWorkoutList: workout;
};
const allWorkouts: workout = {
    name: "yes",
    exercises: [{
        id: 1,
        name: "1",
        sets: "2",
        reps: "2",
        rpe: "2"

    }]
};

const exerciseList: exercise[] = [{
    id: 1,
    name: "1",
    sets: "2",
    reps: "2",
    rpe: "2"

}]


export const WorkoutContext = createContext<WorkoutDetails | undefined>(undefined)
type ExerciseProviderProp = {children:React.ReactNode}

const WorkoutProvider: React.FC<ExerciseProviderProp> = ({children}): React.ReactElement => {
    const [currentWorkoutList, setCurrentWorkoutList] = useState<workout>(allWorkouts);
    const [allExerciseList, setAllExerciseList] = useState<exercise[]> (exerciseList)

    function setCurrentWorkout (workout) {
        setCurrentWorkoutList(workout)
    }

    function addExerciseList() {
        
    }

    return(
        <WorkoutContext.Provider value ={{allExerciseList, currentWorkoutList}}>{children}</WorkoutContext.Provider>
    );
}

export default WorkoutProvider