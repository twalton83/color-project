import React, { Component } from 'react'
import Colorbox from './Colorbox'
import Navbar from './Navbar'
import "./Palette.css"

export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500, format:"hex",open: true}
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
     
    }

    changeLevel(level){


        this.setState({level})
        
    }

    changeFormat(val){
        this.setState({format: val})
    }

   
    render() {
        const {colors, paletteName, emoji} = this.props.palette;
        const {level, format} = this.state;
        return (
            <div className="Palette">
               <Navbar
               level = {level}
               changeLevel = {this.changeLevel}
               handleChange = {this.changeFormat}
               />
                {/* header */}
                <div className="Palette-colors">
                {colors[level].map(color=> (
                        <Colorbox background = {color[format]} name = {color.name}
                        key={color.id}
                        ></Colorbox>
                    ))}
                </div>
              <footer className="Palette-footer">
                    {paletteName}
                    <span className="emoji">
                        {emoji}
                    </span>
              </footer>
               
            </div>
        )
    }
}
