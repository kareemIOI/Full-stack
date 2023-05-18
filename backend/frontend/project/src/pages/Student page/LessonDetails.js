import React, { useEffect } from 'react'
import MiniSideBar from '../../Compoents/SideBar/MiniSideBarStudents'

function LessonDetails() {
    return (
        <div className='Lessson-details bg-white'>
            <video width="80%" height="400" className='p-3' loop muted controls poster=''>
                <source src='' type='video/mp4' />
            </video>
            <div className='lesson-details-about-course'>
                <div>
                    <h4>About this course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta eos iste maxime sapiente similique totam? Consequatur consequuntur excepturi in, magni necessitatibus nemo quae repellendus</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div >
    )
}

export default LessonDetails