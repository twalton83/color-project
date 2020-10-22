
import sizes from './sizes';
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
    },
    [sizes.down('xs')]:{
      marginRight: "0.5rem",
   },

  },
  button : {
    margin: "0 0.5rem",
    "& a" :{
      textDecoration: "none"
    },
    [sizes.down('xs')]:{
      margin: 0,
      padding: 0
   },
 
  },
  hide :{
    display: "none"
  }
 
})

export default styles