import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import 'react-calendar/dist/Calendar.css';
import cx from 'clsx';
import { Table, ScrollArea } from '@mantine/core';
import classes from './TableScrollArea.module.css';

const data = [{
    name: 'Athena Weissnat',
    company: 'Little - Rippin',
    email: 'Elouise.Prohaska@yahoo.com',
  },
  {
    name: 'Deangelo Runolfsson',
    company: 'Greenfelder - Krajcik',
    email: 'Kadin_Trantow87@yahoo.com',
  }]

const HomePage = () => {
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState<Value>(new Date());

    const [scrolled, setScrolled] = useState(false)

    const rows = data.map((row) => (
        <Table.Tr key={row.name}>
          <Table.Td>{row.name}</Table.Td>
          <Table.Td>{row.email}</Table.Td>
          <Table.Td>{row.company}</Table.Td>
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
               <Table.Th>Name</Table.Th>
               <Table.Th>Email</Table.Th>
               <Table.Th>Company</Table.Th>
             </Table.Tr>
           </Table.Thead>
           <Table.Tbody>{rows}</Table.Tbody>
         </Table>
       </ScrollArea>
        </div>


      );
}

export default HomePage