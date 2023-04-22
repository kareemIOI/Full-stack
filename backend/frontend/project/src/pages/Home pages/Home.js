import { Route, Routes } from "react-router-dom"
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Index from "./Index"
import './home.css'
import Courses from "./Courses"
import HomeNav from "../../Compoents/Navs/HomeNav"
import Footer from "../../Compoents/footer/footer"
import Page404 from "../Notfound page/Page404"
import { useState } from "react"



function Home() {

    // used to hide the Footer when you go to 404Page
    const [NavFooter , setNavsFooter] = useState(true)
    function ToggleFooter(value){
        setNavsFooter(value)
    }

    return (
        <>
            <HomeNav />
            <div>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    {/* <Route path='/*' element={<Page404 ToggleFooter={ToggleFooter} />} />  */}
                </Routes>
            </div>
            {NavFooter &&<Footer /> }
        </>

    )
}
export default Home