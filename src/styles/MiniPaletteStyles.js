export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor:"pointer",
        "&:hover svg":{
            opacity: 1
        },

    },
    colors : {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        overflow: "hidden"
     
    },
    miniColor : {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    title : {
        display: "flex",
        justifyContent: "space-between",
        alignITems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    delete :{

    },
    deleteIcon : {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: 'absolute',
        right: "0px",
        top: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: 0,
        transition: "all .3s ease-in-out !important"
    }
   
}