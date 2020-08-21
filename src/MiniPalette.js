import React from 'react'
import { withStyles } from '@material-ui/styles'
import {Link} from 'react-router-dom'
import styles from './styles/MiniPaletteStyles'

function MiniPalette(props) {
    const {classes, colors, paletteName, emoji, id} = props;
    console.log(emoji)
    return (
        <div className={classes.root} onClick = {props.handleClick}>
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

export default withStyles(styles)(MiniPalette)
