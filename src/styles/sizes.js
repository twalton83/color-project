
export default {
    up(){
        const sizes = {
            xs: "576px",
            sm: "768px",
            md: "992px",
            lg: "1200px"

        }
    },
    down(size){
        const sizes = {
            xs: "576px",
            sm: "768px",
            md: "992px",
            lg: "1600px"

        }
        return  `@media (max-width: ${sizes[size]})`
    }
}