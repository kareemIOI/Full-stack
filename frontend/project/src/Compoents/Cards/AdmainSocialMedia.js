import React from 'react'
import './cards.css'


let socials = [
    {
        icon:"hello",
        sentence:"Like us on facebook",
        number:"36,000",
        background:"blue"

    },
    {
        icon:"hello",
        sentence:"Follow us on twitter",
        number:"10,000",
        background:"lightBlue"
    },
    {
        icon:"hello",
        sentence:"Follow us on googleplus",
        number:"14,000",
        background:"orangered"

    },
    {
        icon:"hello",
        sentence:"Follow us on linked",
        number:"3,000",
        background:"blue"
    }

]
function AdmainSocialMedia() {
    return (
        <div className='Admain-social-media-cards flex-wrap d-flex justify-content-around mt-5'>
            {socials.map((ele)=>(
            <div className='social-media-card text-white rounded' style={{backgroundColor:ele.background}}>
                <span>{ele.icon} </span>
                <span>{ele.sentence}</span>
                <h5>{ele.number}</h5>
            </div>
            ))}
        </div>
    )
}

export default AdmainSocialMedia