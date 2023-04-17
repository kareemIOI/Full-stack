import React, { useEffect, useState } from 'react'
import cards from '../../mokingData/coursesCards'



export default function CourcesCards(props) {
    return (
        <>
            {cards && cards.map((course, index) => {
                return index <= props.CardsNumber ?
                (<div key={course.id} className="course-card">
                    <div className="card-img-conrainerHover">
                        <div className={props.Section === "Courses" ? `card-img hoverImg backgroundimg${index + 1}` : `card-img backgroundimg${index + 1} `} ></div>
                    </div>
                    <div className="course-card-text px-3 py-3">
                        <h3 className="course-card-title">{course.courseName}</h3>
                        <p className="my-2"> <span>By: {course.courseProducer}</span> | Duration: {course.courssPerido}</p>
                        <p className=" course-card-text mb-3 ">Contrary to popular belief, Lorem Ipsum isnotimply random text.</p>
                        <button>start now</button>
                    </div>
                </div>) : console.log("no cards")
            })}
        </>
    )
}
