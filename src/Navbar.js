import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select'
import { MenuItem } from '@material-ui/core';
import { IconButton } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar' 
import CloseIcon from '@material-ui/icons/Close'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {format : "hex"}
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnack = this.closeSnack.bind(this)
    }

    closeSnack(){
        this.setState({
            open: false
        })
    }
    handleFormatChange(e){
        this.setState({
            format: e.target.value,
            open: true
        })
        this.props.handleChange(e.target.value)
    }
   
    render() {
        const {level, changeLevel, handleChange, classes} = this.props
        const {format} = this.state
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to ="/">reactcolorpicker</Link>
                </div>
                {this.props.showingAllColors && (<div> 
                    <span>Level: {level}</span>
                <div className={classes.slider}>


                <Slider  defaultValue = {level} min = {100} max = {900} onAfterChange={changeLevel}
                step={100}
                />
                  </div>
                </div>
                )

            }
               <div className={classes.selectContainer}>

                   <Select
                      value = {format}
                      onChange = {this.handleFormatChange}>
                       <MenuItem value="hex"> 
                       HEX- #FFFFFF
                       </MenuItem>
                       <MenuItem value="rgb"> 
                       rgb(255,255,255)
                       </MenuItem>
                       <MenuItem value="rgba"> 
                       rgba(255,255,255, 0.1)
                       </MenuItem>
                   </Select>
               </div>

               <Snackbar anchorOrigin ={{vertical:"bottom", horizontal:"left" }} open={this.state.open}
                autoHideDuration={3000}
                message={<span id = "message-id">Format Changed To {format.toUpperCase()}</span>}
                onClose={this.closeSnack}
                ContentProps ={{
                    "aria-describedby": "message-id"
                }}
                action ={[
                    <IconButton onClick = {this.closeSnack}
                    color="inherit"
                    key="close"
                    aria-label="close">
                        <CloseIcon />
                    </IconButton>
                ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)