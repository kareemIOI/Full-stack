import { useEffect, useState } from "react"
import "./home.css"
import CourcesCards from '../../Compoents/Cards/CourcesCards'
import AnimatepagesHome from "../../AnimatepagesHome"
function Courses() {
    return (
        <AnimatepagesHome>
            <div className="Courses">
                <div className="container">
                    <div className="courses-container px-2 px-sm-5 px-lg-0">



                        <CourcesCards CardsNumber="5" Section="Courses" />



                    </div>
                    <div class="btn-toolbar mx-auto w-25 mt-5 " role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn border">1</button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="btn border active">2</button>
                            <button type="button" class="btn border">3</button>
                            <button type="button" class="btn border">4</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn border">5</button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatepagesHome>
    )
}
export default Courses