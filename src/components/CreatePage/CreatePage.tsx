import { useContext } from 'react';
import { WorkoutContext } from '../exerciseContext'
import DraggableComponent from './DraggableComponent'
import TableComponent from './TableComponent'
import classes from './DndListHandle.module.css'
import WorkoutProvider from '../exerciseContext'

function CreatePage() {
    const ContExercise = useContext(WorkoutContext);

    return (
        <WorkoutProvider>
            <div className={classes.rowC}>
                <TableComponent />
                <DraggableComponent />
            </div>
        </WorkoutProvider>
    );
}

export default CreatePage