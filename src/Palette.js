import React, { Component } from 'react'
import Colorbox from './Colorbox'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Palette.css"
export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500}
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level){


        this.setState({level})
        
    }
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        return (
            <div className="Palette">
                <div className="slider">
                <Slider  defaultValue = {this.state.level} min = {100} max = {900} onAfterChange={this.changeLevel}
                step={100}
                />
                  </div>
                {/* header */}
                <div className="Palette-colors">
                {colors[level].map(color=> (
                        <Colorbox background = {color.hex} name = {color.name}></Colorbox>
                    ))}
                </div>
                {/* footer */}
            </div>
        )
    }
}
