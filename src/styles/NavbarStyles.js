
export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },
    logo : {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        fontFamily: 'Roboto',
        height: '100%',
        backgroundColor: '#eceff1',
        display: 'flex',
        alignItems: 'center',
        "& a": {
            textDecoration: 'none',
            color: 'black',
        }
    
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track" : {
            backgroundColor: "transparent"
        }, 
        "& .rc-slider-rail" : {
            height: '8px',
        }, 
        "& rc-slider-handle:hover, .rc-slider-handle,  .rc-slider-handle:focus,  .rc-slider-handle:active" : {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px',
        
    }
    
    },
    selectContainer : {
        marginLeft: 'auto !important',
        marginRight : '1rem !important'
    }
}