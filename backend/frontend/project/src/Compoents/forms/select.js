import React from 'react'
import './inputs.css'



function Select({ title, options , FormData }) {
    return (
        <>
            <label className='d-block fs-6'>{title}</label>
            <select onChange={e =>{ if(FormData) FormData[title] = e.target.value}}>
                {options.map((option , index) => (
                    <option key ={index}>{option}</option>
                ))}
            </select>
        </>
    )
}

export default Select