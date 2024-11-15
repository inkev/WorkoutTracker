import cx from 'clsx';
import { rem, Text, ScrollArea, Box, UnstyledButton, NumberInput, TextInput } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './DndListHandle.module.css'
import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../exerciseContext'
import { readValue } from '@mantine/hooks/lib/use-local-storage/create-storage';
import { number } from 'prop-types';



let data = [
    {
        name: "Incline Dumbell Curls",
        sets: "3",
        reps: "12",
        rpe: "10"
    },

    {
        name: "Squat",
        sets: "3",
        reps: "8",
        rpe: "10"
    }
]

function DraggableComponent() {
    const ContExercise = useContext(WorkoutContext);
    const [state, handlers] = useListState(ContExercise ? ContExercise.allExercises : data);

    const items = state.map((item, index) => (
        <Draggable key={item.name} index={index} draggableId={item.name}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div {...provided.dragHandleProps} className={classes.dragHandle}>
                        <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </div>
                    <div>
                        <Text>{item.name}</Text>
                        <div className={classes.rowC} >
                            <NumberInput id={"sets"} label="Sets: " defaultValue={item.sets} onChange={event => item.sets = event.toString()} />
                            <NumberInput id={"reps"} label="Reps: " defaultValue={item.reps} onChange={event => item.reps = event.toString()} />
                        </div>
                        <Text>{item.sets}</Text>
                    </div>
                </div>
            )}
        </Draggable>
    ));

    return (
        <DragDropContext
            onDragEnd={({ destination, source }) =>
                handlers.reorder({ from: source.index, to: destination?.index || 0 })
            }
        >
            <ScrollArea w={500} h={500} scrollbars="y" className={classes.droppableC}>
                <Box h={data.length * 18}>
                    <Droppable droppableId="exercise-list" direction="vertical">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {items}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Box>
            </ScrollArea>
        </DragDropContext>
    );
}

export default DraggableComponent