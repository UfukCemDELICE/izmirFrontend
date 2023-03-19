import React from 'react';
import { Navbar } from './layout/Navbar'
import { Sidebar } from './layout/Sidebar'
import { Dashboard } from './layout/Dashboard';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Sidebar/>
      <Dashboard/>  
    </div>
  );
};

export default App;