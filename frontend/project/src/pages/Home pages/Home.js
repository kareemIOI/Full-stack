import { Route, Routes } from "react-router-dom"
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Index from "./Index"
import './home.css'
import Courses from "./Courses"
import HomeNav from "../../Compoents/Navs/HomeNav"
import Footer from "../../Compoents/footer/footer"
import Animatepages from "../../AnimatepagesHome"



function Home() {
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
                </Routes>
            </div>
            <Footer />
        </>

    )
}
export default Home