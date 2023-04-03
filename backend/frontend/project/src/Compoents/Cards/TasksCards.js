import React from 'react'
import { ThemeContext } from '../../ThemeContext'
import { useContext } from 'react'



export default function TasksCards(props) {
    const Theme = useContext(ThemeContext).Theme
    return (
        <div className="Tasks-boxes bg-white  p-3  border border-1 d-flex gap-3 flex-wrap justify-content">
            <h5>Tasks</h5>
            {[1,2,3].map((index)=>(
            <div key={index} className="box  p-3  d-flex align-items-center gap-4 text-dark rounded">
                <div className="box-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill={Theme.iconColor} class="bi bi-camera" viewBox="0 0 16 16">
                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                </div>
                <div className="box-details flex-1">
                    <h5 className="mb-0" style={{color:Theme.text}}>Photoshop</h5>
                    <span className="text-black-50">Deadline : 20 / 4 </span>
                    <div className="line-progress mt-2"><div className="inner-line" style={{backgroundColor:Theme.chartsColor}} data-level={props.data_level}></div></div>
                </div>
            </div>
            ))}
        </div>
    )
}
