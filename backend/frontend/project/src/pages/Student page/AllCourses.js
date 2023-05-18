import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Courses from './Cources';
import LessonDetails from './LessonDetails';

// Make the pagenationi


function AllCourses() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Courses />} />
                <Route path="/:id" element={<LessonDetails />} />
            </Routes>
        </div>
    )
}

export default AllCourses