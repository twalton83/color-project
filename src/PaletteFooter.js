import React from 'react'
import styles from './styles/PaletteStyles'
import classes from './styles/PaletteStyles'
import { withStyles } from '@material-ui/styles'

function PaletteFooter(props) {
    const {paletteName, emoji} = props
    return (
       
        <footer className={classes.PaletteFooter}>
            {paletteName}
            <span className = {classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter)
