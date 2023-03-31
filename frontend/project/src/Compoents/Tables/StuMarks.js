import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import './stuMarks.css'


export default function StuMarks() {
    let Theme = useContext(ThemeContext).Theme
    return (
        <div className='bg-white py-3 '>
            <h5 className="intro-section mb-3">Exam Results</h5>
            <div className="Marks-table border border-1">
                <table class="table mb-0 table-striped">
                    <thead>
                        <tr style={{color:Theme.text}}>
                            <th scope="col">Exam Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Precent</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
