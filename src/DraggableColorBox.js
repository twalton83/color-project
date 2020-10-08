import React from 'react'
import {withStyles} from '@material-ui/styles'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {SortableElement} from 'react-sortable-hoc';
const styles = {
    root : {
        width: "20%",
        height:  "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color : 'white',
            transform : 'scale(1.5)'
        }
    },
    boxContent : {
            position: "absolute",
            width: "100%",
            left: "0px",
            bottom: "0px",
            padding:  "10px",
            color: "rgba(0,0,0,0.5)",
            textTransform: "uppercase",
            fontSize: "12px",
            display: 'flex',
            justifyContent: 'space-between'
    },
    deleteIcon : {

        transition: 'all 0.3s ease-in-out'
    
    }
}

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