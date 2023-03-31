import { useContext } from "react"
import { ThemeContext } from "../../ThemeContext"

function News(){
    let theme = useContext(ThemeContext)
    // console.log(theme)
    return (
        <h1>News page</h1>
    )
}
export default News