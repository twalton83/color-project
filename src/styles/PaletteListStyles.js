import sizes from './sizes';
export default {
    root: {
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent : "center",
        backgroundColor: "#ffffff",
           /* background by SVGBackgrounds.com */
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        overflow: "scroll"
        },
    container : {
        width: "50%",
        display : "flex",
        alignItems : "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down('xl')]:{
            width: "80%",
         },
    },
    nav : {
        display: "flex",
        width: "100%",
        justifyContent : "space-between",
        alignItems : 'center',
        color: "white",
        "& a" : {
            color : 'white'
        }
    },
    palettes : {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",
        [sizes.down('xs')]:{
            gridTemplateColumns: "repeat(1,100%)"
        },
        [sizes.down('md')]:{
            gridTemplateColumns: "repeat(2,50%)"
        }
    },
    heading : {
        fontSize: "2rem"

    },
    "@global" : {
        ".fade-exit" : {
            opacity: 1
        },
        ".fade-exit-active" : {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    }
}