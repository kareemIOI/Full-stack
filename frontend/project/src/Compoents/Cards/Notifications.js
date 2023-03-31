import React from 'react'
import './cards.css'
import { ThemeContext } from '../../ThemeContext'
import { useContext } from 'react'


export default function Notifications() {
    const Theme = useContext(ThemeContext).Theme
    return (
        <div className='notification bg-white px-3 py-3'>
            <h5>Notifications</h5>
            <div className='notification-container mt-3'>
                {[1,2,3,4,5].map((index)=> (
                <div key={index} className="box border-1 border-bottom    p-3  d-flex align-items-center gap-3 text-dark rounded">
                    <div className="box-img border  p-3  rounded-circle" style={{backgroundColor:Theme.iconBackground}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                        {/* <img src={courseimg} alt="course img" className="algin-self-center" width={60} /> */}
                    </div>
                    <div className="box-details flex-1">
                        <h6 className="mb-0" style={{color:Theme.text}}>You changed password</h6>
                        <span className="text-black-50">1 hour ago</span>
                    </div>
                </div>
                ))}
                
                
            </div>
        </div>
    )
}
