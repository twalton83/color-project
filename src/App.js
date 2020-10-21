import React, { Component } from "react";
import seedColors from './seedColors'
import './App.css';
import Palette from './Palette'
import PaletteList from './PaletteList'
import {generatePalette} from "./colorHelpers"
import SingleColorPalette from './SingleColorPalette';
import {Route, Switch} from 'react-router-dom'
import NewPaletteForm from './NewPaletteForm'


class App extends Component {
 constructor(props){
   super(props)
   const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
   console.log(savedPalettes)
   this.state = {
     palettes : savedPalettes || seedColors
   }
   this.savePalette = this.savePalette.bind(this)
   this.findPalette = this.findPalette.bind(this)
   this.syncToLocalStorage = this.syncToLocalStorage.bind(this)
   this.deletePalette = this.deletePalette.bind(this)
   
 }
 findPalette(id){
  return this.state.palettes.find((palette)=>{
    return palette.id === id
  })
}

deletePalette(id){
  this.setState(state=>({
    palettes: state.palettes.filter(palette => palette.id !== id)
  }), this.syncToLocalStorage)

}
savePalette(newPalette){
  console.log(newPalette)
  this.setState({
    palettes : [...this.state.palettes, newPalette]
  }, this.syncToLocalStorage)

  

}

syncToLocalStorage(){
  console.log('testing')
  window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
}
 render(){

  return (
    <Switch className = "App">
      <Route exact path = "/palette/new" render= {(routeProps)=>
      
        <NewPaletteForm savePalette= {this.savePalette} {...routeProps} palettes = {this.state.palettes}/>
      }>
      
      </Route>
      <Route exact path ="/" render={(routeProps)=> <PaletteList palettes = {this.state.palettes} deletePalette = {this.deletePalette} {...routeProps}/>} />
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
