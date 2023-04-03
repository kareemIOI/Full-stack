import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";


function RatingStars() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
    return (
        <ReactStars
            count={5}
            value={4}
            edit={false}
            onChange={null}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="orange"
        />
    )
    // document.getElementById("where-to-render")
}
export default RatingStars