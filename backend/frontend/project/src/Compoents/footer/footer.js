import React from 'react'
import footerimg1 from '../../imgs/footer1.jpg'
import footerimg2 from '../../imgs/footer2.jpg'
import footerimg3 from '../../imgs/footer3.jpg'
import './footer.css'
function Footer() {
    return (

        <footer className="px-2">
            <div className='container text-white'>
                <div className='footer-cols'>

                    <div className="footer-col">
                        <h3>About Us</h3>
                        <div className="line"></div>
                        <div className="footer-col-content">
                            <p>Contrary to popular belief, Lorem simply random text. It has roots in a piece of classical Latin literature.</p>
                            <ul className="p-0">
                                <li className="d-flex align-items-center">
                                    <span className="d-flex me-1">
                                        <svg width="16" height="16" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                    <span>Address 20 , New York 10010</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="d-flex me-1">
                                        <svg width="16" height="16" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </span>
                                    <span>Phone 0800-123456</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="d-flex me-1">
                                        <svg width="16" height="16" class="bi bi-envelope-open" viewBox="0 0 16 16">
                                            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                                        </svg>
                                    </span>
                                    <span>Email info@example.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Latest Post</h3>
                        <div className="line"></div>
                        <div className="footer-col-content">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                < img src={footerimg1} width='60' height='60' className="object-fit-cover rounded-circle" alt="img" />
                                <div>
                                    <p className="m-0">Helping You And Your House Become Better.</p>
                                    <div>
                                        <span></span>
                                        <span>01 June 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                < img src={footerimg2} width='60' height='60' className="object-fit-cover rounded-circle" alt="img" />
                                <div>
                                    <p className="m-0">Helping You And Your House Become Better.</p>
                                    <div>
                                        <span></span>
                                        <span>01 June 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                < img src={footerimg3} width='60' height='60' className="object-fit-cover rounded-circle" alt="img" />
                                <div>
                                    <p className="m-0">Helping You And Your House Become Better.</p>
                                    <div>
                                        <span></span>
                                        <span>01 June 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Opening Hours</h3>
                        <div className="line"></div>
                        <div className="footer-col-content">
                            <div className="d-flex justify-content-between">
                                <p className="footer-day">Mon-Tue</p>
                                <p className="footer-time">10:00 - 18:00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="footer-day">Mon-Tue</p>
                                <p className="footer-time">10:00 - 18:00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="footer-day">Mon-Tue</p>
                                <p className="footer-time">10:00 - 18:00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="footer-day">Mon-Tue</p>
                                <p className="footer-time">10:00 - 18:00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="footer-day">Mon-Tue</p>
                                <p className="footer-time">10:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer