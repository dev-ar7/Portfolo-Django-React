import React from 'react';
import Home from './Components/Home';
import SideBar from './Components/SideBar';
import "react-pro-sidebar/dist/css/styles.css";
import './App.css';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
