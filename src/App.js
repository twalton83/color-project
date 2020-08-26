import React from 'react';
import seedColors from './seedColors'
import './App.css';
import Palette from './Palette'
import PaletteList from './PaletteList'
import {generatePalette} from "./colorHelpers"
import SingleColorPalette from './SingleColorPalette';
import {Route, Switch, Router} from 'react-router-dom'
import NewPaletteForm from './NewPaletteForm'


function App() {
 
  return (
    <Switch className = "App">
      <Route exact path = "/palette/new" render= {()=>
      
        <NewPaletteForm/>
      }>
      
      </Route>
      <Route exact path ="/" render={(routeProps)=> <PaletteList palettes = {seedColors} {...routeProps}/>} />
      <Route exact 
      path = "/palette/:id"
      render = {routeProps =>  (
      <Palette palette = {generatePalette(findPalette(routeProps.match.params.id))}/>
      )}
      />
      <Route path = "/palette/:paletteId/:colorId" 
      render={routeProps=> (<SingleColorPalette 
        colorId = {routeProps.match.params.colorId}
        palette= {generatePalette(findPalette(routeProps.match.params.paletteId)
          )}
        />
      )}
      />

    </Switch>

   
  );
}

function findPalette(id){
  return seedColors.find((palette)=>{
    return palette.id === id
  })
}


export default App;
