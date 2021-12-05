import React from 'react';
import Home from './components/Home/Home'
import './App.scss';
import { selectPage } from './actions'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
