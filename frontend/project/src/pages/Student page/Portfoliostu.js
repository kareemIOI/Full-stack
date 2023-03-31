import AnimatepagesDashboards from '../../AnimatepagesDashboards'
import profileimg from '../../imgs/profilestu.jpg'

function Porfilestu() {
    return (
        <AnimatepagesDashboards>
            <section className="Porfoliostu">
                <div className="potfolio-form d-flex flex-column  gap-4 p-3">
                    <h2>About Me</h2>

                    <div className="protfolio-img d-flex border border-0 border-rounded mb-3">
                        <img src={profileimg} width="110" alt="profile img" />
                        <div>
                            <h5 className='m-0'>Yamen Nasri</h5>
                            <p>lorem lorem lorem</p>
                        </div>
                    </div>

                    <div className='row profile-deatails d-flex align-items-center  d-flex   flex-wrap mb-2 fs-5'>

                        <div className='col-sm-10 '>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Name:</label>
                                <p className='profile-data'>Yamen</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Last Name:</label>
                                <p className='profile-data'>Nasri</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Gender:</label>
                                <p className='profile-data' >Male</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Father Name:</label>
                                <p className='profile-data'>Mohammad</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Mother Name:</label>
                                <p className='profile-data'>Maha</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Date Of Birth:</label>
                                <p className='profile-data'>13.12.2001</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Email:</label>
                                <p className='profile-data'>yamen@...</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Adress:</label>
                                <p className='profile-data'>Syria,Damascus</p>
                            </div>
                            <div className="info d-flex justify-content-between mb-3">
                                <label className='text-black-50'>Phone:</label>
                                <p className='profile-data'>+963 88899999999</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </AnimatepagesDashboards>
    )
}
export default Porfilestu