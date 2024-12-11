import { useState, useContext } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './TableComponent.module.css';
import { WorkoutContext } from '../exerciseContext';
import { useQuery } from "@tanstack/react-query";

interface RowData {
  exerciseID: string;
  exerciseName: string;
  reps: string;
  sets: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      const valueA = a[sortBy]?.toString() ?? "";
      const valueB = b[sortBy]?.toString() ?? "";
      if (payload.reversed) {
        return valueB.localeCompare(valueA);
      }

      return valueA.localeCompare(valueA);
    }),
    payload.search
  );
}

function TableComponent() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const ContExercise = useContext(WorkoutContext);
  const data = ContExercise?.allExerciseList ?? [];
  const [sortedData, setSortedData] = useState(data);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData?.map((row) => (
    <Table.Tr key={row.exerciseName}>
      <Table.Td>{row.exerciseName}</Table.Td>
      <Table.Td>{row.sets} {row.reps}</Table.Td>
      <Table.Td>Add Exercise</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea className={classes.bg}>
      <TextInput
        placeholder="Search By Exercise Name"
        mb="md"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={200} layout="auto">
        <Table.Tbody>
          <Table.Tr className={classes.item}>
            <Th
              sorted={sortBy === 'exerciseName'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('exerciseName')}
            >
              Exercise Name
            </Th>
            <Text>
              Sets and Reps
            </Text>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr className={classes.item}>
              <Table.Td colSpan={data?.[0] ? Object.keys(data[0]).length : 1}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableComponent;

