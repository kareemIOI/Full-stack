import { useEffect } from 'react'
import AnimatepagesHome from '../../AnimatepagesHome'
import footerimg1 from '../../imgs/footer1.jpg'
import footerimg2 from '../../imgs/footer1.jpg'
import footerimg3 from '../../imgs/footer1.jpg'
function About() {
    return (
        <AnimatepagesHome>
            <div className="About">
                <section className="About-intro-section mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 border-1 boreder-dark">
                                <div className="About-intro-box1 d-flex gap-2">
                                    <img src={footerimg1} className=" big object-fit-cover w-100" />
                                    <div className='d-flex gap-2 w-100 flex-wrap flex-sm-nowrap' >
                                        <img src={footerimg2} className="small object-fit-cover" />
                                        <div className='about-intro-box1-text p-4 bg-info'>
                                            <h1 className='display-1  fw-normal'>15 +</h1>
                                            <div className='line'></div>
                                            <p>Years Experience Working</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 border-1 boreder-dark py-5">
                                <div className="About-intro-box2 d-flex flex-column px-3 gap-4">
                                    <div className='about-intro-box2-one'>
                                        <h1>Learn New Skills</h1>
                                        <h3>Igniting the spark of genius in every child.</h3>
                                        <div className='line mb-0'></div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className='about-intro-box2-one'>
                                        <ul>
                                            <li className='d-flex align-items-center gap-4 mb-3'>
                                                <p className='about-intro-box2-hovertext order-1'>You Will Never Thought That Knowing Education</p>
                                                <span className='about-intro-box2-signhover order-0 rounded-circle bg-dark p-1 bg-white'>
                                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                    </svg>
                                                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-star-fill star rounded-circle" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center gap-4 mb-3'>
                                                <p className='about-intro-box2-hovertext order-1'>You Will Never Thought That Knowing Education</p>
                                                <span className='about-intro-box2-signhover order-0 rounded-circle bg-dark p-1 bg-white'>
                                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                    </svg>
                                                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-star-fill star rounded-circle" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center gap-4 mb-3'>
                                                <p className='about-intro-box2-hovertext order-1'>You Will Never Thought That Knowing Education</p>
                                                <span className='about-intro-box2-signhover order-0 rounded-circle bg-dark p-1 bg-white'>
                                                    <svg className='tick' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-check tick rounded-circle " viewBox="0 0 16 16">
                                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                    </svg>
                                                    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="" class="bi bi-star-fill star rounded-circle" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </span>
                                            </li>
                                        </ul>
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='services'>
                    <div className='container'>
                        <div className='services-cards-contaienr d-flex flex-wrap justify-content-center gap-4'>
                            {[footerimg1, footerimg2, footerimg3, footerimg1].map((e) => {
                                return (
                                    <div class="about-services-card" >
                                        <img src={e} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title mt-3">Card title</h5>
                                            <p class="card-text text-black-50 my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <a href="f#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            </div>
        </AnimatepagesHome>
    )
}
export default About