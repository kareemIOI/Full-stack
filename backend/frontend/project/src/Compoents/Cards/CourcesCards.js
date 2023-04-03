import React, { useEffect, useState } from 'react'


export default function CourcesCards(props) {
    const [Cards, setcatds] = useState()
    useEffect(() => {
        fetch("../../data.json",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    throw new Error('not working')
                }
                return res.json()
            }
            )
            .then((result) => setcatds(result))
            .catch(err => console.log("this is an error", err))
    }, [])
    return (
        <>
            {Cards && Cards.CourseBlogCardsData.map((course, index) => {
                return index <= props.CardsNumber ? (<div key={course.id} className="course-card">
                    <div className="card-img-conrainerHover">
                        <div className={props.Section === "Courses" ? `card-img hoverImg backgroundimg${index + 1}` : `card-img backgroundimg${index + 1} `} ></div>
                    </div>
                    <div className="course-card-text px-3 py-3">
                        <h3 className="course-card-title">{course.courseName}</h3>
                        <p className="my-3"> <span>By: {course.courseProducer}</span> | Duration: {course.courssPerido}</p>
                        <p className=" course-card-text mb-3 ">Contrary to popular belief, Lorem Ipsum isnotimply random text.</p>
                        <button>start now</button>
                    </div>
                </div>) : console.log("no cards")
            })}
        </>
    )
}
