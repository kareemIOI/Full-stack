import AnimatepagesHome from "../../AnimatepagesHome"

function Contact() {
    return (
        <AnimatepagesHome>
            <div className="Contact">
                <div className="container">
                    <div className="row gap-4 justify-content-around">
                        <div className="col-md-4 col-lg-4 border broder-1 p-3">
                            <h3 className="fs-4">Contact Us</h3>
                            <div className="line"></div>
                            <h2 className="mb-4">Do You Have Any Question?</h2>
                            <ul className="p-0">
                                <li className="d-flex gap-2">
                                    <span className="contact-icon  mt-1 p-3 rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span>
                                    <div className="text">
                                        <h4>Address</h4>
                                        <p className="text-black-50">123 West Street, Melbourne Victoria</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-2">
                                    <span className="contact-icon mt-1 p-3 rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </span>
                                    <div className="text">
                                        <h4>Email</h4>
                                        <p className="text-black-50">info@example.com</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-2">
                                    <span className="contact-icon mt-1 p-3 rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </span>
                                    <div className="text">
                                        <h4>Phone</h4>
                                        <p className="text-black-50">+61 3 8376 6284 _+23 123 456 7890</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-2">
                                    <span className="contact-icon last mt-1 p-3 rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-voicemail" viewBox="0 0 16 16">
                                            <path d="M7 8.5A3.49 3.49 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5zm-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z" />
                                        </svg>
                                    </span>
                                    <div className="text">
                                        <h4>Fax</h4>
                                        <p className="text-black-50">+000 123 2294 089</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-7 col-lg-7 border broder-1 px-4 py-3">
                            <form>
                                <p className="fs-3 fw-normal text-white px-2 py-3">Write Us a few words about your project and we'll prepare a
                                    proposal for you within 24 hours.
                                </p>
                                <div className="contact-form d-flex flex-wrap justify-content-center gap-2 mb-2">
                                    <input type={"text"} placeholder={"First Name"} />
                                    <input type={"text"} placeholder={"Last Name"} />
                                    <input type={"text"} placeholder={"Phone"} />
                                    <input type={"text"} placeholder={"Subject"} />
                                    <textarea placeholder="Message"></textarea>
                                    <button className="d-block px-4">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatepagesHome>
    )
}
export default Contact