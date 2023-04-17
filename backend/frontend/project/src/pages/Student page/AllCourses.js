import React from 'react'
import { Routes , Route } from 'react-router-dom';
import CoursesDeatails from '../../pages/Student page/CoursesDeatails';
import Courses from './Cources';

// Make the pagenationi


function AllCourses() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Courses />} />
                <Route path=":id" element={<CoursesDeatails />} />
            </Routes>
        </div>
    )
}

export default AllCourses