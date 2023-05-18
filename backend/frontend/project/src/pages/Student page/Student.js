import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useContext } from "react"
import { ThemeContext } from "../../ThemeContext"
// pages
import Acadmic from "./Acadmic"
import News from "./New"
import Porfilestu from "./Portfoliostu"
import Chatstu from "./chatstu"
import SettingsStu from "./settingsstu"
import Library from "./Library"
// Componets
import Header from "../../Compoents/Header/Header"
import MiniSideBar from "../../Compoents/SideBar/MiniSideBarStudents"
import NavBar from "../../Compoents/Navs/DashboardNav"
import SlideBar from "../../Compoents/SideBar/SideBarStudent"
import './student.css'
import { AnimatePresence } from "framer-motion"
import AllCourses from "./AllCourses"


function Studentpage() {


    const Theme = useContext(ThemeContext)
    let navigate = useNavigate()
    window.onload = function () {
        navigate('/stu')
    }
    const location = useLocation()

    useEffect(() => {
        //~ get the Theme from the localStorge
        if (localStorage.getItem("theme-color")) {
            Theme.toggleTheme(JSON.parse(localStorage.getItem("theme-color")))
        }
    }, [])
    return (
        <div className="d-flex">
            {/* <Loadingscreen /> */}
            <SlideBar />
            <MiniSideBar />


            <div className="landing">
                <NavBar />
                <div className="col py-3 px-4">
                    <Header />
                    <AnimatePresence mode="wait">
                        <Routes key={location.pathname} location={location}>
                            <Route path="/" element={<Acadmic />}> </Route>
                            <Route path="/allcourses/*" element={<AllCourses />}> </Route>
                            <Route path="/news" element={<News />}> </Route>
                            <Route path="/news" element={<Library />}> </Route>
                            <Route path="/chat" element={<Chatstu />} />
                            <Route path="/profile" element={<Porfilestu />} />
                            <Route path="/settings" element={<SettingsStu />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default Studentpage

// fix table width
// fix resposive 
//fix circle width on responsive
// border raduis of cards section
// give the col padding and remove all the componetes padding ... just add some margin between all sections
// cources componet make it more globale by taking more props
// make notification and all responsive 




