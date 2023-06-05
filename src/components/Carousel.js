import { useState } from "react"

const Carousel = ( {images} ) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length -1 : prevIndex -1
        );
    }

    const handleNextClick = () => {
        setImageIndex((nextIndex) => 
        nextIndex === images.length -1 ? 0 : nextIndex + 1
        );
    }

  return (
    <div>
        <button onClick={handlePreviousClick}>Left</button>
        <img src={images[imageIndex]} alt="Carousel pics with random people" />
        <button onClick={handleNextClick}>Right</button>

    </div>
  )
}

export default Carousel