import { useState } from "react"
import './accordin.css'

// const Accordin = () => {
//     const [accordinIndex, setAccordinIndex] = useState(null);
//     const toggle = (i) => {
//         if(i === accordinIndex) return setAccordinIndex(null);
//         else {
//             setAccordinIndex(i);
//         }
//     }
//     return (
//         <div className="wrapper">
//             <div className="accordin">
//                 {data.map((item, index) => 
//                     <div className="container">
//                         <div className="title" onClick={() => toggle(index)}>
//                             <h2>{item.title}</h2>
//                             {accordinIndex === index ? '+' : '-'}
//                         </div>
//                         <div className={accordinIndex === index ? 'item show' : 'item'}> {item.answer}</div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

const Accordin = () => {
    const [accordinIndex, setAccordinIndex] = useState(null);
    const toggle = (index) => {
        if(index === accordinIndex) {
            setAccordinIndex(null);
        } else {
            setAccordinIndex(index);
        }
        
    }
    return (
        <div>
            <div className="wrapper">
                {data.map((item, index)=> 
                    <div className="accordin_container" onClick={() => toggle(index)}>
                        <div className="title">
                            <h2>{item.title}</h2>
                        </div>
                        <div className={accordinIndex === index ? 'item show': 'item'}>{item.answer}</div>
                    </div>
                )}
            </div>
        </div>
    )
}


const data = [
    {
        title: 1,
        answer: 123
    },
    {
        title: 2,
        answer: 123
    },
    {
        title: 3,
        answer: 123
    },
    {
        title: 4,
        answer: 123
    },
    {
        title: 5,
        answer: 123
    },
]

export default Accordin
