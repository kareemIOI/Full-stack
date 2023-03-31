import React from 'react'
import Select from '../../Compoents/forms/select'
import StudentTable from '../../Compoents/Tables/StudentTable'
import StuMarks from '../../Compoents/Tables/StuMarks'

export default function AllUsers() {
    return (
        <div className='all-users bg-white'>
            <section className='students-table-section'>
                <h3 className='mb-3'>Students</h3>
                <div className='d-flex gap-2'>
                    <div>
                        <Select title="Levels" options={["Level 1", "Level 2 ", "Level 3", "Level 4 ", "Level 5"]} />
                    </div>
                    <div>
                        <Select title="Classes" options={["Class 1", "Class 2 ", "Class 3"]} />
                    </div>

                </div>
                <StudentTable />
                {/* <StuMarks />  */}
            </section>
            

            {/* <section className='students-table-section'>
                <h5>Students</h5>
            <select>
                <option>Students</option>
                <option>Teacher</option>
                <option>Admain</option>
            </select>
            <StudentTable /> 
            <StuMarks /> 
            </section> */}

            {/* <section className='students-table-section'>
                <h5>Students</h5>
            <select>
                <option>Students</option>
                <option>Teacher</option>
                <option>Admain</option>
            </select>
            <StudentTable /> 
            <StuMarks /> 
            </section> */}
        </div>
    )
}
