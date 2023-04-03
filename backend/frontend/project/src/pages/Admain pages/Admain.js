import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Activites from './Activites'
import AllUsers from './AllUsers'
import Adduser from './Adduser'
import News from './News'
import Transport from './Transport'
import Library from './Library'
import Classes from './Classes'
import { useNavigate } from 'react-router-dom'

import Header from '../../Compoents/Header/Header'
import MiniSideBar from '../../Compoents/SideBar/MiniSideBarAdmain'
import NavBar from '../../Compoents/Navs/DashboardNav'
import SlideBar from '../../Compoents/SideBar/SideBarAdmain'


export default function Admain() {
    let navigate = useNavigate()
    window.onload = function () {
        navigate('/admain')
    }

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
                    <Routes>
                        <Route path="/" element={<Activites />}> </Route>
                        <Route path="/allusers" element={<AllUsers />}> </Route>
                        <Route path="/add" element={<Adduser />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/transport" element={<Transport />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/classes" element={<Classes />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
