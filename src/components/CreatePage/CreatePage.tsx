import { useContext } from 'react';
import { WorkoutContext } from '../exerciseContext'
import DraggableComponent from './DraggableComponent'
import TableComponent from './TableComponent'
import classes from './DndListHandle.module.css'
import WorkoutProvider from '../exerciseContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function CreatePage() {
    const ContExercise = useContext(WorkoutContext);
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <WorkoutProvider>
                <div className={classes.rowC}>
                    <TableComponent />
                    <DraggableComponent />
                </div>
            </WorkoutProvider>
        </QueryClientProvider>
    );
}

export default CreatePage