import React from 'react';
import seedColors from './seedColors'
import './App.css';
import Palette from './Palette'
import {generatePalette} from "./colorHelpers"
function App() {
  console.log(generatePalette(seedColors[4]))
  return (
   
    <div className="App">
      <Palette palette = {generatePalette(seedColors[4])}></Palette>
    </div>
  );
}

export default App;
