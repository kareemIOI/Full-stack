import React from 'react'
import Userimg from '../../imgs/profilestu.jpg'

export default function Header() {
    return (
        <div className='Header'>
            <div className=' d-flex p-2  bg-white  gap-3'>
            <div className='user-img '>
                <img className='rounded-circle' src={Userimg} alt="user img" width={70}  />
                
            </div>
            <div className='user-name'>
                <h5>Yamen</h5>
                <p>Student in Sawa School</p>
            </div>
            </div>
        </div>
    )
}
