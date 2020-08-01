import React from 'react';
import seedColors from './seedColors'
import './App.css';
import Palette from './Palette'

function App() {
  return (
    <div className="App">
      <Palette palette = {{...seedColors[4]}}></Palette>
    </div>
  );
}

export default App;
