import React, { Component } from 'react'
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import {Link} from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
const drawerWidth = 400;

const styles = theme =>  ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection : "row",
    justifyContent:"space-between",
    height: "64px",
    alignItems: "center"

  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem",
    
    "& a": {
      textDecoration: "none"
    }

  },
  button : {
    margin: "0 0.5rem",
    "& a" :{
      textDecoration: "none"
    }
 
  },
 
})

class PaletteFormNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            formShowing: false,
            newPaletteName: ""
        }
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    showForm(){
      this.setState({
        formShowing : true
      })
    }
    hideForm(){
   
      this.setState({
        formShowing: false
      })
    }
   



    render() {
        const {classes, open, palettes, handleSubmit, hideForm} = this.props;
        return (
          <div style = {classes.root}>
                 <CssBaseline />
                  <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography>
            
             
           
          
          </Toolbar>
          <div className = {classes.navBtns}>
            {/* <ValidatorForm onSubmit={()=>this.props.handleSubmit(newPaletteName)}>
              <TextValidator
                label='Palette Name'
                value={this.state.newPaletteName}
                name='newPaletteName'
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
              </ValidatorForm> */}
             
              <Link className = "link" to="/">
              <Button className= {classes.button}  variant = "contained" color = "secondary">Go Back</Button>
              </Link>
               <Button className= {classes.button} variant="contained" color="primary" onClick={this.showForm}>
                Save
              </Button>
              </div>
        </AppBar>
        {this.state.formShowing && (<PaletteMetaForm palettes= {palettes} hideForm = {this.hideForm} handleSubmit={handleSubmit}/>)}
       
        </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);