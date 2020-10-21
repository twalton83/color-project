import React from 'react'
import {withStyles} from '@material-ui/styles'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {SortableElement} from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
    const {classes, handleClick, color, name} = props;
    return (
        <div className = {props.classes.root} 
        style = {{
            backgroundColor : color
        }}>
            <div className={classes.boxContent}>
                <span> {name}</span>
                <DeleteOutlineIcon onClick= {handleClick} className = {classes.deleteIcon}/>
           
            </div>
          
        </div>
    )
})


export default withStyles(styles)(DraggableColorBox)