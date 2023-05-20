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
import SideBarAdmin from '../../Compoents/SideBar/SideBarAdmin'


export default function Admain() {
    let navigate = useNavigate()
    window.onload = function () {
        navigate('/manager')
    }


    // overflow hidden ruin the postion sticky
    return (
        <div className='d-flex' style={{overflow:""}}>
            <SideBarAdmin />
            <MiniSideBar />
            <div className="landing" style={{overflow:"hidden"}}>
                <NavBar />
                <div className="col py-3 px-4">
                    <Header />
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
        </div>
    )
}
