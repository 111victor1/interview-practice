import Star from "./Star";
import "./Star.css"
import { useState } from "react";

export default function StarRating() {
    const [hover, setHover] = useState(null);
    const [rating, setRating] = useState(null);

    return (
        <>
            {/* <div>Rating is: {rating}</div>
            <div className="star-rating">
                {[...Array(5)].map((key, index) => {
                    const value = index + 1;
                    return (
                        <Star
                            key={index}
                            value={value}
                            rating={rating}
                            hover={hover}
                            setHover={setHover}
                            setRating={setRating}
                        />
                    )
                })}
            </div> */}
            <div>
                {[...Array(5)].map((item, index) => {
                    const value = index + 1;
                    return (<Star 
                        key={index}
                        value={value} 
                        rating={rating}
                        setRating={setRating}
                        hover={hover}
                        setHover={setHover}
                    />)
                })}
            </div>
        </>

    )
}