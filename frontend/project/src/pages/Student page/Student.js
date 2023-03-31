import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { ThemeContext } from "../../ThemeContext"
// pages
import Acadmic from "./Acadmic"
import News from "./New"
import Porfilestu from "./Portfoliostu"
import Chatstu from "./chatstu"
import SettingsStu from "./settingsstu"
import Cources from "./Cources"
import Library from "./Library"
// Componets
import Header from "../../Compoents/Header/Header"
import MiniSideBar from "../../Compoents/SideBar/MiniSideBar"
import NavBar from "../../Compoents/Navs/DashboardNav"
import SlideBar from "../../Compoents/SideBar/SideBar"
import './student.css'
import { AnimatePresence } from "framer-motion"


function Studentpage() {
    const Theme = useContext(ThemeContext)
    let navigate = useNavigate()
    window.onload = function () {
        navigate('/stu')
    }
    // get the Theme from the localStorge
    useEffect(() => {
        if (localStorage.getItem("theme-color")) {
            Theme.toggleTheme(JSON.parse(localStorage.getItem("theme-color")))
        }
    }, [])
    const location = useLocation()
    return (
        <>
            <NavBar />
            <SlideBar />
            <MiniSideBar />
            <div className="landing">
                <div className="col pb-3 px-4">
                    <section>
                        <Header />
                    </section>
                    <AnimatePresence mode="wait">
                        <Routes key={location.pathname} location={location}>
                            <Route path="/" element={<Acadmic />}> </Route>
                            <Route path="/cources/*" element={<Cources />}> </Route>
                            <Route path="/news" element={<News />}> </Route>
                            <Route path="/news" element={<Library />}> </Route>
                            <Route path="/chat" element={<Chatstu />} />
                            <Route path="/profile" element={<Porfilestu />} />
                            <Route path="/settings" element={<SettingsStu />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </>
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




