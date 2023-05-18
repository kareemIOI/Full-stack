import React from 'react'
import Linechart from '../../Compoents/charts/lineChart'
import '../../pages/Admain pages/admain.css'
import '../../Compoents/charts/CircleProgress.css'
import CircleProgress from '../../Compoents/charts/CircleProgress'
import AdmainBarChart from '../../Compoents/charts/AdmainBarChart'
import WebTrafficChart from '../../Compoents/charts/WebTraffic'
import AdmainSocialMedia from '../../Compoents/Cards/AdmainSocialMedia'
import Piechart from '../../Compoents/charts/PIeChart'
import AdmainIntroCards from '../../Compoents/Cards/AdmainIntroCards'

export default function Activites() {
    return (
        <div className='Activites'>
            <section className='admain-activites-basic-informations my-3'>
                <AdmainIntroCards />
            </section>

            <section>
                <div className='rows d-flex flex-wrap flex-md-nowrap justify-content-md-between justify-content-md-center  gap-3'>
                    <AdmainBarChart />
                    <CircleProgress />
                </div>
            </section>
            <section>
                <Linechart />
            </section>
            {/* <section>
                <WebTrafficChart />
            </section> */}
            {/* <section>
                <Piechart />
            </section> */}
            <div className='admain-socialmedia'>
                <AdmainSocialMedia />
            </div>
        </div>
    )
}
