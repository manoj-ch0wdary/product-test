import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Screen/>  
    </div>
  );
}

export default App;
