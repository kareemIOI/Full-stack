import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import './sidebar.css'
import { useContext } from "react"
import { ThemeContext } from "../../ThemeContext"
import logo from '../../imgs/logo.png'
import userlogo from '../../imgs/profilestu.jpg'



function SideBarAdmin() {


    const Theme = useContext(ThemeContext).Theme
    const [sidebarstate, settogglesidebar] = useState(true)
    const sidebar = useRef('')

    function togglesidebar() {

        settogglesidebar(prevvalue => !prevvalue)
        let sidebaritemtext = document.querySelectorAll(".SideBar .sidebar-itme-text")
        let arrow = document.querySelector(".SideBar .sidebar-arrow")
        let sidebarLogoutSectionImg = document.querySelector(".sidebar-logout-section div")

        if (sidebarstate) {
            sidebar.current.style.width = "60px"
            sidebaritemtext.forEach(text => {
                text.style.display = "none"

            })
            arrow.classList.add("active")
            sidebarLogoutSectionImg.style.display = "none"


        }
        else {
            sidebar.current.style.width = "240px"
            sidebaritemtext.forEach(text => {
                text.style.display = "inline"
            })
            arrow.classList.remove("active")
            sidebarLogoutSectionImg.style.display = "flex"
        }
    }

    function sideBarliToggle(e) {
        let links = document.querySelectorAll(".SideBar ul li")
        if (e.target.tagName === "A") {
            links.forEach(link => {
                link.classList.remove("active")
                let linkChilds = [...link.firstElementChild.children]
                linkChilds[1].style.color = "white"
                linkChilds[0].style.fill = "white"
            })
            e.target.parentElement.classList.add("active")
            let children = [...e.target.children]
            children[1].style.color = Theme.sideBar
            children[0].style.fill = Theme.sideBar
        }
    }
    return (
        <div className="SideBar flex-column justify-content-between" ref={sidebar} style={{ backgroundColor: Theme.sideBar }}>
            <ul className="Links px-2 list-unstyled position-sticky">
                <div className="sidebar-logo text-center pt-2">
                    <img src={logo} alt="logoimg" width={43} />
                </div>
                <div className=" d-flex justify-content-end mt-2">
                    <button onClick={togglesidebar} className="sidebar-arrow px-2 position-sticky border-0  bg-transparent text-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  className="bi bi-arrow-left fw-bold" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                </div>


                <li className="active">
                    <Link onClick={sideBarliToggle} className="link d-flex" to={'/admin/'}>
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={Theme.sideBar} className="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg>
                        </span>
                        <span className="sidebar-itme-text ms-2" style={{ color: Theme.sideBar }}>Acadmic</span>
                    </Link>
                </li>


                <li><Link onClick={sideBarliToggle} className="link  d-flex" to={'/admin/add'}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-infinity" viewBox="0 0 16 16">
                            <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
                        </svg>
                    </span><span className="sidebar-itme-text ms-2">Add User</span></Link></li>


                <li><Link onClick={sideBarliToggle} className="link d-flex" to={'/admin/allusers'}>
                    <span >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                        </svg>
                    </span><span className="sidebar-itme-text ms-2">All Users</span></Link></li>


                <li><Link onClick={sideBarliToggle} className="link d-flex" to={'/admin/library'}>
                    <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                    </svg></span><span className="sidebar-itme-text ms-2">Library</span></Link></li>


                <li><Link onClick={sideBarliToggle} className="link d-flex" to={'/admin/classes'}>
                    <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg></span><span className="sidebar-itme-text ms-2">Classes</span></Link></li>


                <li><Link onClick={sideBarliToggle} className="link d-flex" to={'/admin/news'}>
                    <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg></span><span className="sidebar-itme-text ms-2">News</span></Link></li>

                <li><Link onClick={sideBarliToggle} className="link d-flex" to={'/admin/transports'}>
                    <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                        <path filerule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                        <path filerule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg></span><span className="sidebar-itme-text ms-2">Transports</span></Link></li>
            </ul>



            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.500)" }} className="sidebar-logout-section gap- d-flex align-content-center justify-content-between  position-sticky bottom-0 py-4 px-2">
                <div className=" flex-nowrap gap-2 align-items-center">
                    <img src={userlogo} alt="logo" width={30} height={30} />
                    <p style={{ fontSize: "15px" }} className=" text-white">Yamen Nasri <br /> Student</p>
                </div>
                <Link onClick={sideBarliToggle} className="link d-flex align-items-center flex-wrap" to={'/'}>
                    <span className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                        <path d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                        <path d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg></span></Link>
            </div>
        </div>
    )
}
export default SideBarAdmin