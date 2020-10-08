import React, { Component } from "react";
import seedColors from './seedColors'
import './App.css';
import Palette from './Palette'
import PaletteList from './PaletteList'
import {generatePalette} from "./colorHelpers"
import SingleColorPalette from './SingleColorPalette';
import {Route, Switch, Router} from 'react-router-dom'
import NewPaletteForm from './NewPaletteForm'


class App extends Component {
 constructor(props){
   super(props)
   this.state = {palettes : seedColors}
   this.savePalette = this.savePalette.bind(this)
   this.findPalette = this.findPalette.bind(this)
 }
 findPalette(id){
  return this.state.palettes.find((palette)=>{
    return palette.id === id
  })
}

savePalette(newPalette){
  console.log(newPalette)
  this.setState({
    palettes : [...this.state.palettes, newPalette]
  })
}
 render(){

  return (
    <Switch className = "App">
      <Route exact path = "/palette/new" render= {(routeProps)=>
      
        <NewPaletteForm savePalette= {this.savePalette} {...routeProps} palettes = {this.state.palettes}/>
      }>
      
      </Route>
      <Route exact path ="/" render={(routeProps)=> <PaletteList palettes = {this.state.palettes} {...routeProps}/>} />
      <Route exact 
      path = "/palette/:id"
      render = {routeProps =>  (
      <Palette palette = {generatePalette(this.findPalette(routeProps.match.params.id))}/>
      )}
      />
      <Route path = "/palette/:paletteId/:colorId" 
      render={routeProps=> (<SingleColorPalette 
        colorId = {routeProps.match.params.colorId}
        palette= {generatePalette(this.findPalette(routeProps.match.params.paletteId)
          )}
        />
      )}
      />

    </Switch>

   
  );
}
}



export default App;
