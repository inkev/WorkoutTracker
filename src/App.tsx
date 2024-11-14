import '@mantine/core/styles.css';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { theme } from './theme';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './pages/root.jsx';
import HomePage from './components/HomePage/HomePage';
import CreatePage from './components/CreatePage/CreatePage'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path=""
        element={<HomePage />}
      />
      <Route
        path="create-workout"
        element={<CreatePage />}
      />
      <Route
        path="current-workout"
        element={<HomePage />}
      />
    </Route>

  ))
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App
