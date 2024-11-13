import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { MantineProvider } from '@mantine/core';
import HomePage from "../components/HomePage/HomePage";

export function Home() {
  return (
    <>
      <MantineProvider defaultColorScheme = 'dark'>
          <HomePage />
      </MantineProvider>
    </>
  );
}
