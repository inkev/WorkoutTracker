import cx from 'clsx';
import { rem, Text, ScrollArea, Box } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './DndListHandle.module.css';

const data = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    destClone.splice(droppableDestination.index, 0, removed)
}

function CreatePage() {
    const [state, handlers] = useListState(data);

    const items = state.map((item, index) => (
        <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div {...provided.dragHandleProps} className={classes.dragHandle}>
                        <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </div>
                    <Text className={classes.symbol}>{item.symbol}</Text>
                    <div>
                        <Text>{item.name}</Text>
                        <Text c="dimmed" size="sm">
                            Position: {item.position} • Mass: {item.mass}
                        </Text>
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
            <ScrollArea w={500} h={500} scrollbars="y">
                <Box h={1000}>
                    <Droppable droppableId="dnd-list" direction="vertical">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {items}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </Box>
            </ScrollArea>
            <ScrollArea w={500} h={500} scrollbars="y">
                <Box h={1000}>
                    <Droppable droppableId="dnd-list" direction="vertical">
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

export default CreatePage