import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import 'react-calendar/dist/Calendar.css';
import cx from 'clsx';
import { Table, ScrollArea } from '@mantine/core';
import classes from './TableScrollArea.module.css';

const data = [{
  workout: 'Bicep Curls',
  set: '3 / 12',
  weight: '50lbs',
  rpe: "9"
},
{
  workout: 'Squats',
  set: '5 / 5',
  weight: '315lbs',
  rpe: "9"
},]

const HomePage = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row) => (
    <Table.Tr key={row.workout}>
      <Table.Td>{row.workout}</Table.Td>
      <Table.Td>{row.set}</Table.Td>
      <Table.Td>{row.weight}</Table.Td>
      <Table.Td>{row.rpe}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <div className="Sample">
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={onChange} value={value} />
          </main>
        </div>
      </div>
      <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700}>
          <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <Table.Tr>
              <Table.Th>Workout</Table.Th>
              <Table.Th>Sets / Reps</Table.Th>
              <Table.Th>Max Weight</Table.Th>
              <Table.Th>RPE</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>


  );
}

export default HomePage