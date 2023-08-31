import { memo } from "react";

// function Star({value, rating, setRating, hover, setHover}) {
//     return(
//         <label>
//             <input 
//                 type="radio"
//                 name="rating"
//                 value={value}
//                 onClick={() => setRating(value)}
//             />
//             <div 
//                 className="star"
//                 onMouseEnter={() => setHover(value)}
//                 onMouseLeave={() => setHover(null)}
//             >
//                 <svg
//                     height="55px"
//                     width="53px"
//                     viewBox="0 0 25 25"
//                     fill={value <= (hover || rating) ? "#edaa10" : "grey"}
//                 >
//                     <polygon
//                         strokeWidth="0"
//                         points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
//                     />
//                 </svg>
//             </div>
//         </label>
//     );
// }

const Star = ({value, rating, setRating, hover, setHover}) => 
   
       ( <label>
            <input type="radio" value={value} onClick={() => setRating(value)}></input>
            <div 
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(null)}
            >
                <svg
                    height="55px"
                    width="53px"
                    viewBox="0 0 25 25"
                    fill={value <= (hover || rating) ? "#edaa10" : "grey"}
                    >
                    <polygon
                        strokeWidth="0"
                        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                    />
                </svg>
            </div>
        </label>)
    


export default memo(Star);