import { useContext } from 'react';
import { WorkoutContext } from '../exerciseContext'
import DraggableComponent from './DraggableComponent'
import TableComponent from './TableComponent'
import classes from './DndListHandle.module.css'

function CreatePage() {
    const ContExercise = useContext(WorkoutContext);

    return (
        <div className={classes.rowC}>
            <DraggableComponent />
        </div>
    );
}

export default CreatePage