import React from 'react'
import './cards.css'
import { ThemeContext } from '../../ThemeContext'
import { useContext } from 'react'


export default function IntroCards() {
    const Theme = useContext(ThemeContext).Theme
    return (
        <div className='small-intro-cards'>
            <div className='small-intro-cards-container d-flex flex-wrap flex-lg-nowrap justify-content-lg-between justify-content-center  gap-4 align-items-center'>
                <div className='small-intro-card d-flex justify-content-between align-items-center p-3 bg-white rounded' >
                    <div className='small-intro-card-icon  p-3 rounded-circle' style={{backgroundColor:Theme.iconBackground}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-card-list" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                    </div>
                    <div className='small-intro-card-text'>
                        <h6 className='text-black-50 mb-2'>Active Cources</h6>
                        <p className='text-end'>5</p>
                    </div>
                </div>
                <div className='small-intro-card d-flex justify-content-between align-items-center p-3 bg-white rounded' >
                    <div className='small-intro-card-icon p-3 rounded-circle' style={{backgroundColor:Theme.iconBackground}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" className="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div className='small-intro-card-text'>
                        <h6 className='text-black-50 mb-2'>Completed Cources</h6>
                        <p className='text-end'>22</p>
                    </div>
                </div>
                <div className='small-intro-card d-flex justify-content-between align-items-center p-3 bg-white rounded' >
                    <div className='small-intro-card-icon p-3 rounded-circle' style={{backgroundColor:Theme.iconBackground}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white"  className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg>
                    </div>
                    <div className='small-intro-card-text'>
                        <h6 className='text-black-50 mb-2'>Total Cources</h6>
                        <p className='text-end'>72</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
