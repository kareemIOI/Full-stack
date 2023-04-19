import React from 'react'
import RatingStars from '../../Compoents/RatingStars/RatingStars'
import imguser from '../../imgs/commentuser.jpg'


function CoursesDeatails() {
    return (
        <div className='CoursesDeatails bg-white p-3 d-flex flex-column gap-5'>

            <div className='course-name'>
                <h2 className='mb-2 w-75'>Java Programming Masterclass for Software Developers</h2>
                <p className='w-75 text-black-50'>Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification</p>
                <RatingStars />
                <span>Created by <span className='bg-danger text-white p-1'>YamenNa</span></span>
                <span className='ms-3'>540,815 students</span>
                <p>English</p>
                <div className='my-1'>
                    <button>share</button>
                    <button>Report issue</button>
                </div>
            </div>

            <div className='what-learn'>
                <h3>What you'll learn?</h3>
                <div className='d-flex flex-wrap mt-4'>
                    <div className='d-flex gap-3 w-50 mb-3'>
                        <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p>Learn the core Java skills needed to apply for Java developer positions in just 14 hours.</p>
                    </div>
                    <div className='d-flex gap-3 w-50 mb-3'>
                        <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p>Learn the core Java skills needed to apply for Java developer positions in just 14 hours.</p>
                    </div>
                    <div className='d-flex gap-3 w-50 mb-3'>
                        <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p>Learn the core Java skills needed to apply for Java developer positions in just 14 hours.</p>
                    </div>
                    <div className='d-flex gap-3 w-50 mb-3'>
                        <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p>Learn the core Java skills needed to apply for Java developer positions in just 14 hours.</p>
                    </div>
                    <div className='d-flex gap-3 w-50 mb-3'>
                        <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p>Learn the core Java skills needed to apply for Java developer positions in just 14 hours.</p>
                    </div>
                </div>
            </div>

            <div className='Requirements'>
                <h4>Requirements</h4>
                <ul style={{ listStyleType: "numbers" }} className='px-3'>
                    <li className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
            </div>

            <div className='Description'>
                <h4>Description</h4>
                <p className='mb-3'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className='mb-3'>t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy</p>
            </div>
            <div className='Comments-course'>
                <div className='comments-course-container w-75 pb-2'>

                    <div className='comment-course border-bottom border-1  d-flex gap-2 pb-3 mb-2'>
                        <img className='comment-course-img rounded-circle my-auto' width="80" height="80" src={imguser} alt="userImg" />
                        <div className='commetn-course-info'>
                            <div className='d-flex algin-items-center justify-content-between pe-5'>
                                <h5 className='comment-username my-auto'>Yamen</h5>
                                <RatingStars />
                            </div>
                            <p className='my-2'>a month ago</p>
                            <p>This is one of the best courses I have taken in Udemy. It is very complete, and it has made continue learning about Java and SQL databases as well.</p>
                        </div>
                    </div>

                    <div className='comment-course border-bottom border-1  d-flex gap-2 pb-3 mb-2'>
                        <img className='comment-course-img rounded-circle my-auto' width="80" height="80" src={imguser} alt="userImg" />
                        <div className='commetn-course-info'>
                            <div className='d-flex algin-items-center justify-content-between pe-5'>
                                <h5 className='comment-username my-auto'>Yamen</h5>
                                <RatingStars />
                            </div>
                            <p className='my-2'>a month ago</p>
                            <p>This is one of the best courses I have taken in Udemy. It is very complete, and it has made continue learning about Java and SQL databases as well.</p>
                        </div>
                    </div>
                    <div className='comment-course border-bottom border-1  d-flex gap-2 pb-3 mb-2'>
                        <img className='comment-course-img rounded-circle my-auto' width="80" height="80" src={imguser} alt="userImg" />
                        <div className='commetn-course-info'>
                            <div className='d-flex algin-items-center justify-content-between pe-5'>
                                <h5 className='comment-username my-auto'>Yamen</h5>
                                <RatingStars />
                            </div>
                            <p className='my-2'>a month ago</p>
                            <p>This is one of the best courses I have taken in Udemy. It is very complete, and it has made continue learning about Java and SQL databases as well.</p>
                        </div>
                    </div>

                </div>
                <button className='ms-auto me-auto'>Load more reviews</button>
                <form className='add-reveiw'>
                    <div>
                        <div>
                            <label>Name</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>Name</label>
                            <input type='text' />
                        </div>
                    </div>
                    <textarea></textarea>
                    <button>Submit Review</button>
                </form>
            </div>
        </div>
    )
}

export default CoursesDeatails