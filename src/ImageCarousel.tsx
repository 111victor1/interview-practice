import {useState} from 'react'

// export default function ImageCarousel() {
//     const urls = [1, 2, 3];
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const renderNextImage = () => {
//         setCurrentSlide ((index) => (index + 1) % urls.length)
//     }
    
//     const renderPreviousImage = () => {
//         setCurrentSlide ((index) => (index - 1 + urls.length) % urls.length)
//     }

//     const ImageSlide = ({imageUrl}) => {
//         return (
//             <div>
//                 {imageUrl === currentSlide + 1 ? imageUrl : null}
//             </div>
//         );
//     }
    
//     return (
//         <div>
//             <div>
//                 {
//                     urls.map((url, index) => {
//                         return (
//                             <ImageSlide key={index} imageUrl={url}/>
//                         )
//                     })
//                 }
//             </div>
//            <button onClick={() => renderPreviousImage()}>
//                 previous image
//            </button>
//            <button onClick={() => renderNextImage()}>
//                 next image
//            </button>
//         </div>
//     )
// }

const ImageSlide = ({imageIndex}) => {
    return (
        <>
            <img src={images[imageIndex]}></img>
        </>
    )
}

const ImageCarousel = ()=> {
    const [imageIndex, setImageIndex] = useState(0);
    const length = images.length;
    const nextImage = () => { 
        setImageIndex(index => (index + 1) % length);
    }
    const previouseImage = () => { 
        setImageIndex(index => (index - 1 + length) % length);
    }
    return (
        <>
            <div className='wrapper'>
                <div>{imageIndex}</div>
                <div className='container'>
                    <ImageSlide imageIndex={imageIndex}/>
                </div>
                <div>
                    <button onClick={() => previouseImage()}>
                        Previous image
                    </button>
                    <button onClick={() => nextImage()}>
                        Next image
                    </button>
                </div>
            </div>
        </>
    )
}

const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200"
  ];


const fetchData = (...arg) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Hello, Promise!" };
        if (data) {
          resolve(data); // 成功完成
        } else {
          reject(new Error("Data not available")); // 失败
        }
      }, 2000);
    });
  };

  export default ImageCarousel;