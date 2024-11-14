import React from 'react';
import { Outlet } from 'react-router-dom'
import NavbarMinimal from '../components/NavBar/NavbarMinimal';

function Root() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <NavbarMinimal style={{ width: '250px', backgroundColor: '#f0f0f0' }} />

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Renders the child routes here */}
      </div>
    </div>
  );
}

export default Root