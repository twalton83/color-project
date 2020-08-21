import React, { Component } from 'react'
import Colorbox from './Colorbox';
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

 class SingleColorPalette extends Component {

    constructor(props){
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {
            format: "hex"
        }
        this.changeFormat = this.changeFormat.bind(this)
    }
    gatherShades(palette, colorToFilterBy){
        //return all shades of given color 
        let shades = [];
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1)
    }
    changeFormat(val){
        this.setState({format: val})
    }

    render() {
        const {format} = this.state
        const {classes} = this.props
        const {paletteName, emoji, id} = this.props.palette
        const colorBoxes = this._shades.map(color =>(
            <Colorbox  key = {color.name} name = {color.name} background = {color[format]} showingFullPalette = {false}/>
        ))
        console.log(this._shades)
        return (
            <div className={classes.Palette}>
                <Navbar handleChange = {this.changeFormat} showingAllColors = {false}/>
                <div className = {classes.PaletteColors}>
                    {colorBoxes}
                    <div className ={classes.goBack}>
                    <Link to= {`/palette/${id}`}>
                     Go Back   
                    </Link>
                </div>
                </div>
              
                <PaletteFooter className = {classes.PaletteFooter} emoji = {emoji} paletteName = {paletteName}/>
            </div>
          
        )
    }
}

export default withStyles(styles)(SingleColorPalette)