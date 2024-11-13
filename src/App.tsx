import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from "./pages/root.jsx"
import { Home } from './pages/Home.page';


function App() {
  const router = createBrowserRouter(createRoutesFromElements (
    <Route path ="/" element = {<Root />}>
      <Route
        path = "home"
        element={<Home />}
      />      
      <Route
        path = "create-workout"
        element={<Home />}
      />      
      <Route
        path = "current-workout"
        element={<Home />}
      />
    </Route>
  ))
  return (
      <MantineProvider theme={theme}>
        <RouterProvider router = {router} />
      </MantineProvider>
  );
}

export default App
