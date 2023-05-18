import { useContext, useEffect} from "react"
import { ThemeContext } from "../../ThemeContext"
// Componets
import Toolbar from "../../Compoents/Toolbar/Toobar"
import "../../pages/Home pages/home.css"
import AnimatepagesDashboards from "../../AnimatepagesDashboards"
import StudentCoursesCards from "../../Compoents/Cards/StudentCources"


function Courses() {
    let Theme = useContext(ThemeContext).Theme
    useEffect(() => {
        let buttonActive = document.querySelector("button.active")
        buttonActive.style.backgroundColor = Theme.iconBackground
    }, [])
    return (
        <AnimatepagesDashboards>
            <div className="courses-container bg-white d-flex flex-column p-3">
                <StudentCoursesCards />
                <Toolbar />
            </div>
        </AnimatepagesDashboards>
        // <h1>all courses</h1>
    )
}
export default Courses



