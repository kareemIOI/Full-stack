import { useContext, useEffect} from "react"
import { ThemeContext } from "../../ThemeContext"
// Componets
import StudentCources from "../../Compoents/Cards/StudentCources"
import Toolbar from "../../Compoents/Toolbar/Toobar"
import "../../pages/Home pages/home.css"
import AnimatepagesDashboards from "../../AnimatepagesDashboards"


function Courses() {
    let Theme = useContext(ThemeContext).Theme
    useEffect(() => {
        let buttonActive = document.querySelector("button.active")
        buttonActive.style.backgroundColor = Theme.iconBackground
    }, [])
    return (
        <AnimatepagesDashboards>
            <div className="courses-container bg-white d-flex flex-column p-3">
                <StudentCources />
                <Toolbar />
            </div>
        </AnimatepagesDashboards>
    )
}
export default Courses



