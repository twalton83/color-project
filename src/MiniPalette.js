import React, {Component} from 'react'
import { withStyles } from '@material-ui/styles'
import {Link} from 'react-router-dom'
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends Component{
    constructor(props){
        super(props)
        this.deletePalette = this.deletePalette.bind(this)
    }

    deletePalette(e) {
        e.stopPropagation()
        this.props.deletePalette(this.props.id)
    }
    render(){
    const {classes, colors, paletteName, emoji, id} = this.props;
    return (
        <div key = {id} className={classes.root} onClick = {this.props.handleClick}>
            <div className="delete">
                <DeleteIcon className={classes.deleteIcon}
                onClick = {this.deletePalette}
                />
            </div>
            <section className={classes.colors}>
              {colors.map(color=>(
                  <div key = {color.name} className = {classes.miniColor} style={{
                      backgroundColor : `${color.color}`
                  }}>
                      
                  </div>
              ))}
            </section>
            <span>
                <h5 className = {classes.title}>
                    {paletteName}
                   
                </h5>
           <span className = {classes.emoji}>
                  <Link to={`/palette/${id}`}>{emoji}</Link>
           </span>
           
            </span>
            
        
        </div>
    )
}
}

export default withStyles(styles)(MiniPalette)
