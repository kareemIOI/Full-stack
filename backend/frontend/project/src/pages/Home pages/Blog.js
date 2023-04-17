// import Cards from "./Cards"
import AnimatepagesHome from '../../AnimatepagesHome'
import CourcesCards from '../../Compoents/Cards/CourcesCards'


function Blog() {
    return (
        <AnimatepagesHome>
            <div className="Blog">
                <div className="container">
                    <div className="row gap-4 justify-content-center">
                        <div className="col-12 col-lg-3  p-2">
                            <div className="blog-side-bar-boxes d-flex flex-column gap-5 ">
                                <div className="blog-box">
                                    <h5>Opening Hours</h5>
                                    <div className="line"></div>
                                    <div className="blog-input border border-1 d-flex justify-content-between align-items-center">
                                        <input className=" border-0 outline-0 w-100 h-100 ps-2" placeholder="Enter your keywords.." />
                                        <button className="fw-bold h-100 d-flex align-items-center justify-content-center">
                                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="blog-box">
                                    <h5>Latest Post</h5>
                                    <div className="line"></div>
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <div className="rectentimg rectentimg1"></div>
                                        <div>
                                            <p className="m-0">Helping You And Your House Become Better.</p>
                                            <div>
                                                <span></span>
                                                <span>01 June 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <div className="rectentimg rectentimg1"></div>
                                        <div>
                                            <p className="m-0">Helping You And Your House Become Better.</p>
                                            <div>
                                                <span></span>
                                                <span>01 June 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-box">
                                    <h5>Opening Hours</h5>
                                    <div className="line"></div>
                                    <div className="blog-gallary border border-1 d-flex  gap-1 flex-wrap align-items-center">
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                        <div className="blog-gallary-img rectentimg1"></div>
                                    </div>
                                </div>

                                <div className="blog-box">
                                    <h5>Opening Hours</h5>
                                    <div className="line"></div>
                                    <ul className="">
                                        <li className="border-0 py-2 border-bottom d-flex align-items-center gap-2"><span className="catagory-points d-inline"></span><a href="##" className="text-black-50">creative</a></li>
                                        <li className="border-0 py-2 border-bottom d-flex align-items-center gap-2"><span className="catagory-points d-inline"></span><a href="##" className="text-black-50">Education</a></li>
                                        <li className="border-0 py-2 border-bottom d-flex align-items-center gap-2"><span className="catagory-points d-inline"></span><a href="##" className="text-black-50">Events</a></li>
                                        <li className="border-0 py-2 border-bottom d-flex align-items-center gap-2"><span className="catagory-points d-inline"></span><a href="##" className="text-black-50">Sports</a></li>
                                    </ul>
                                </div>
                                <div className="blog-box">
                                    <h5>Opening Hours</h5>
                                    <div className="line"></div>
                                    <div className="blog-tags d-flex flex-wrap gap-2">
                                        <span className="blog-tag">Design</span>
                                        <span className="blog-tag">User interface</span>
                                        <span className="blog-tag">SEO</span>
                                        <span className="blog-tag">Joomla</span>
                                        <span className="blog-tag">WordPress</span>
                                        <span className="blog-tag">Python</span>
                                        <span className="blog-tag">Mobile application</span>
                                        <span className="blog-tag">UI & UX</span>
                                        <span className="blog-tag">Figma</span>
                                        <span className="blog-tag">Photoshop</span>
                                        <span className="blog-tag">User interface</span>
                                        <span className="blog-tag">SEO</span>
                                        <span className="blog-tag">Joomla</span>
                                        <span className="blog-tag">WordPress</span>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-12 col-lg-8">
                            <div className="Blog-cards-container">
                                <CourcesCards CardsNumber="5" Section="Blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatepagesHome>
    )
}
export default Blog