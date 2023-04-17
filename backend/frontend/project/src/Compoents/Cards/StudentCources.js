import React, { useContext } from 'react'
import './cards.css'
import courceImg1 from '../../imgs/StudentCourse1.jpg'
import courceImg2 from '../../imgs/StudentCourse2.jpg'
import courceImg3 from '../../imgs/StudentCourse3.jpg'
import { ThemeContext } from '../../ThemeContext';
import { Link} from 'react-router-dom';
import RatingStars from '../RatingStars/RatingStars';

function StudentCoursesCards() {
    let Theme = useContext(ThemeContext).Theme
    let cources = [courceImg1, courceImg2, courceImg3]
    return (<>
        <h4>My Courses</h4>
        <div className='student-coursesCards d-flex flex-column gap-4'>
            {[1, 2, 3].map((index) => (
                <Link to={`${index}`} key={index} className='Student-courseCard d-flex flex-sm-nowrap flex-wrap justify-content-between border'>
                    <div className="Student-courseCard-img">
                        <img src={cources[index - 1]} className="w-100 h-100" alt="course img" />
                    </div>
                    <div className='Student-courseCard-details p-4'>
                        <span className='course-level p-1 text-white  w-fit' style={{ backgroundColor: Theme.iconColor }}>All Levels</span>
                        <h4 className='course-title mt-2 mb-0' style={{ color: Theme.text }}>The Business Intelligence Analyst Course 2021</h4>
                        <p className='course-teacher my-1 text-black-50'>Yamen Nasri</p>
                        <div className='course-rating'>
                            <RatingStars />
                        </div>
                        <p className='course- py-2' >Duraion : 12 Hours</p>
                        <p className='course-price'>20 $</p>
                    </div>
                </Link>
            ))}
        </div>
    </>
    )
}

export default StudentCoursesCards

