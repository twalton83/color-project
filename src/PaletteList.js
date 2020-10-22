import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'; 
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import Dialog from "@material-ui/core/Dialog";
import List from '@material-ui/core/List';
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check"
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from "@material-ui/icons/Close"
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            openDeleteDialog: false
        }
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.goToPalette = this.goToPalette.bind(this)
    }
    openDialog(id){
        this.setState({openDeleteDialog: true, deletingId : id})
    }
    closeDialog(id){
        this.setState({openDeleteDialog: false, deletingId : id})
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    handleDelete(e) {
        this.props.deletePalette(this.state.deletingId)
        this.closeDialog()
    }
    render() {
        const {palettes, classes}  = this.props
        return (
            <div className = {classes.root}>
                <div className= {classes.container}>

              
                <nav className = {classes.nav}>
              
                <h1 className={classes.heading}>React Colors</h1>
                <Link to ='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup  className={classes.palettes}>
                {palettes.map(palette=>(
                    <CSSTransition key={palette.id} classNames="fade" timeout={500}>

                  
                        <MiniPalette id = {palette.id} key = {palette.id} 
                        // deletePalette = {this.props.deletePalette} 
                        openDialog={this.openDialog}
                        {...palette} goToPalette={()=> this.goToPalette(palette.id)}/>
                        </CSSTransition>
                ))}
                 </TransitionGroup>
            
                </div>
                <Dialog aria-labelledby="delete-dialog-title" open={this.state.openDeleteDialog}
                onClose={this.closeDialog}
                >
                    <DialogTitle id="delete-dialog-title">
                        Delete This Palette?
                    </DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[500]}}>
                                    <CheckIcon></CheckIcon>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete"></ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[500]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel"></ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);