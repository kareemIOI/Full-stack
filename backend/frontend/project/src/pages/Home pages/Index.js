import mainimg from '../../imgs/main.jpg'
import logo1 from '../../imgs/courcesicon1.jpg'
import logo2 from '../../imgs/courcesicon2.jpg'
import logo3 from '../../imgs/courcesicon3.jpg'
import logo4 from '../../imgs/courcesicon4.jpg'
import logo5 from '../../imgs/courcesicon5.jpg'
import logo6 from '../../imgs/courcesicon6.jpg'
import whyuslogo1 from "../../imgs/whyuslogo1.jpg";
import whyuslogo2 from "../../imgs/whyuslogo2.jpg";
import whyuslogo3 from "../../imgs/whyuslogo3.jpg";
import popularcource1 from '../../imgs/popularcource1.jpg'
import popularcource2 from '../../imgs/popularcource2.jpg'
import popularcource3 from '../../imgs/popularcource3.jpg'
import popularcource4 from '../../imgs/popularcource4.jpg'
import SwiperTeacher from './SwiperTeacher'
import SwiperComments from './SwiperComments'

import { useEffect } from 'react'
import AnimatepagesHome from '../../AnimatepagesHome'
import Button2 from '../../Compoents/buttons/button2'
import Button1 from '../../Compoents/buttons/button1'
function Index() {
    let started = false
    useEffect(() => {

        // counter 
        let countsdata = document.querySelectorAll(".about-count-box h1")
        console.log(countsdata)
        function countON() {
            if (!started) {
                countsdata.forEach(element => {
                    startCount(element)
                });
            }
            started = true
        }
        function startCount(ele) {
            let goal = ele.dataset.count;
            console.log(goal)
            let count = setInterval(function () {
                ele.textContent++
                if (ele.textContent === goal) {
                    clearInterval(count)
                }
            }, (1000 / goal))
        }
        // countON()


        let coutSection = document.querySelector(".about-count ")
        window.onscroll = function () {
            if (window.pageYOffset > coutSection.getBoundingClientRect().top) {
                countON()
            }
            else {
                // console.log("no")
            }
        }
    }, [started])









    return (
        <AnimatepagesHome>
            <div className='index'>
                <main >
                    <div className="container  align-items-end">
                        <div className="row justify-content-center gap-md-0 gap-2 ">
                            <div className="col-md-6  d-flex flex-column text-white  justify-content-center">
                                <h1 className='display-3 fw-bold'>Best Education for Sawa School</h1>
                                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                <div>
                                    <Button2 text="Read More" />
                                    <Button2 text="About Us" />
                                </div>
                            </div>
                            <div className="col-md-6 col-10 text-center">
                                <img className='w-100' src={mainimg} alt='main image' />
                            </div>
                        </div>
                    </div>
                </main>




                <section className='cources'>
                    <div className='container'>
                        <div className='intro-text-section text-center mb-4'>
                            <h1>OUR COURSE CATEGORIES</h1>
                            <p className='w-75 mx-auto mb-4 mt-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a pi classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
                        </div>
                        <div className='cources-cards d-flex flex-wrap justify-content-center gap-3'>
                            <div className='cource-card border border-1 px-3 py-4  text-center'style={{backgroundColor:"red"}} >

                                <img src={logo1} className="" alt='icon' />
                                <h3 className='fs-5 fw-normal text-white mt-2 text-capitalize '>html & css</h3>
                            </div>

                            <div className='cource-card border border-1 px-3 py-4  text-center' style={{backgroundColor:"green"}}>
                                <img src={logo2} alt='icon' />
                                <h3 className='fs-5 fw-normal text-white mt-2 text-capitalize '>html & css</h3>
                            </div>
                            <div className='cource-card border border-1 px-3 py-4  text-center' style={{backgroundColor:"yellow"}}>
                                <img src={logo3} alt='icon' />
                                <h3 className='fs-5 fw-normal text-white mt-2 text-capitalize '>html & css</h3>
                            </div>
                            <div className='cource-card border border-1 px-3 py-4  text-center'style={{backgroundColor:"orange"}}>
                                <img src={logo4} alt='icon' />
                                <h3 className='fs-5 fw-normal text-white mt-2 text-capitalize '>html & css</h3>
                            </div>
                            <div className='cource-card border border-1 px-3 py-4  text-center'style={{backgroundColor:"blue"}}>
                                <img src={logo5} alt='icon' />
                                <h3 className='fs-5 fw-normal text-white mt-2 text-capitalize '>html & css</h3>
                            </div>
                            <div className='cource-card border border-1 px-3 py-4  text-center'style={{backgroundColor:"purple"}}>
                                <img src={logo6} alt='icon' />
                                <h3 className='fs-5 fw-normal text-white mt-2 text-capitalize '>html & css</h3>
                            </div>
                        </div>
                        <Button1 text="All Courses" />
                    </div>
                </section>




                <section className='whyus'>
                    <div className='container'>
                        <h3 className='text-white text-center'>WHY CHOOSE US</h3>
                        <h1 className='text-white text-center mb-5'>WHY SHOULD EDUCATION</h1>
                        {/* <img src='' alt='logo'/> */}
                        <div className='whyus-cards d-flex pt-5 justify-content-center gap-5 gap-md-0'>
                            <div class="card border-0  text-center bg-transparent">
                                <img src={whyuslogo1} className="card-img-top mx-auto mb-3" alt="logo" />
                                <div class="card-body">
                                    <h5 class="card-title text-white mb-2">Apply Online</h5>
                                    <p class="card-text text-white">Contrary to popular belief, Lorem Ipsum isnotimply random text. It has roots in a pi classiLatin litture from 45 BC,</p>
                                </div>
                            </div>
                            <div class="card border-0 text-center bg-transparent">
                                <img src={whyuslogo2} className="card-img-top mx-auto mb-3" alt="logo" />
                                <div class="card-body">
                                    <h5 class="card-title text-white mb-2">Superfast Support</h5>
                                    <p class="card-text text-white">Contrary to popular belief, Lorem Ipsum isnotimply random text. It has roots in a pi classiLatin litture from 45 BC,</p>
                                </div>
                            </div>
                            <div class="card border-0 text-center bg-transparent">
                                <img src={whyuslogo3} className="card-img-top mx-auto mb-3" alt="logo" />
                                <div class="card-body">
                                    <h5 class="card-title text-white mb-2">Certification</h5>
                                    <p class="card-text text-white">Contrary to popular belief, Lorem Ipsum isnotimply random text. It has roots in a pi classiLatin litture from 45 BC,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="about-count">
                    <div className='container'>
                        <div className='about-count-boxs d-flex flex-wrap justify-content-center gap-4'>
                            <div className='about-count-box'>
                                <h1 data-count="1200">0</h1>
                                <p>Happy students</p>
                            </div>
                            <div className='about-count-box'>
                                <h1 data-count="400">0</h1>
                                <p>Certified Teachers</p>
                            </div>
                            <div className='about-count-box'>
                                <h1 data-count="250">0</h1>
                                <p>Cources</p>
                            </div>
                            <div className='about-count-box'>
                                <h1 data-count="900">0</h1>
                                <p>Graduate Students</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='Teacheres'>
                    <div className='container text-center'>
                        <h1>Meet The Teacher</h1>
                        <p className="w-75 mx-auto mb-4 mt-3">There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                        <div className='teacher-cards-container justify-content-center'>
                            <SwiperTeacher />
                        </div>
                    </div>
                </section>


                <section className='Comments'>
                    <div className='container text-center'>
                        <h1 className="text-white">What People Are Saying</h1>
                        <p className="text-white w-75 mx-auto mb-4 mt-3">There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                        <div className='comments-cards-container justify-content-center'>
                            <SwiperComments />
                        </div>
                    </div>
                </section>

                <section className='popular-cources'>
                    <div className='container'>
                        <div className='intro-text-section mb-4'>
                            <h1 className='text-center'>POPULAR COURSES</h1>
                            <p className='w-75 mx-auto text-center mb-4 mt-3'>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            <div className='popular-cards '>
                                <div class="card  text-dark bg-transparent">
                                    <img src={popularcource1} className="card-img-top mx-auto" alt="logo" />
                                    <div class="card-body bg-white">
                                        <h5 class="card-title">Python AI</h5>
                                        <p class="card-text">Contrary to popular belief, Lorem Ipsum isnotimply random text.</p>
                                        <div className='popular-deatails d-flex justify-content-between align-items-center'>
                                            <span>
                                                <svg width="16" height="16" fill="blue" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                </svg>
                                                3040 stu</span>
                                            <span className='price fw-bold p-1'>$80.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card  bg-transparent">
                                    <img src={popularcource2} className="card-img-top mx-auto" alt="logo" />
                                    <div class="card-body bg-white text-dark">
                                        <h5 class="card-title">Javascript for fun</h5>
                                        <p class="card-text">Contrary to popular belief, Lorem Ipsum isnotimply random text.</p>
                                        <div className='popular-deatails d-flex justify-content-between align-items-center'>
                                            <span>
                                                <svg width="16" height="16" fill="blue" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                </svg>
                                                3040 stu</span>
                                            <span className='price fw-bold p-1'>$80.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card bg-transparent">
                                    <img src={popularcource3} className="card-img-top mx-auto" alt="logo" />
                                    <div class="card-body bg-white text-dark">
                                        <h5 class="card-title">Php for beggineres</h5>
                                        <p class="card-text">Contrary to popular belief, Lorem Ipsum isnotimply random text.</p>
                                        <div className='popular-deatails d-flex justify-content-between align-items-center'>
                                            <span>
                                                <svg width="16" height="16" fill="blue" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                </svg>
                                                3040 stu</span>
                                            <span className='price fw-bold p-1'>$80.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card bg-transparent">
                                    <img src={popularcource4} className="card-img-top mx-auto" alt="logo" />
                                    <div class="card-body bg-white text-dark">
                                        <h5 class="card-title">UI & UX for beggineres</h5>
                                        <p class="card-text">Contrary to popular belief, Lorem Ipsum isnotimply random text.</p>
                                        <div className='popular-deatails d-flex justify-content-between align-items-center'>
                                            <span>
                                                <svg width="16" height="16" fill="blue" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                </svg>
                                                3040 stu</span>
                                            <span className='price fw-bold p-1'>$80.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>














            </div>
        </AnimatepagesHome>
    )
}
export default Index