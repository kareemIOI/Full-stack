import React from 'react'
import './inputs.css'



function Select({ title, options }) {
    return (
        <>
            <label className='d-block text-black-50 fs-6'>{title}</label>
            <select>
                {options.map((option , index) => (
                    <option key ={index}>{option}</option>
                ))}
            </select>
        </>
    )
}

export default Select