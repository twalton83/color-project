import React, { Component } from 'react'
import Colorbox from './Colorbox'
import "./Palette.css"
export default class Palette extends Component {
    render() {
        return (
            <div className="Palette">
                {/* header */}
                <div className="Palette-colors">
                {this.props.palette.colors.map(color=> (
                        <Colorbox background = {color.color} name = {color.name}></Colorbox>
                    ))}
                </div>
                {/* footer */}
            </div>
        )
    }
}
