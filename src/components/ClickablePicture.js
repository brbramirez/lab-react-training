import React from 'react'
import { useState } from "react";

const ClickablePicture = ( {img, imgClicked} ) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  return (
    <div>
        <img
        src={isClicked ? imgClicked : img}
        alt="Clickable Person pic"
        onClick={handleClick}
        /> 
    </div>
  )
}

export default ClickablePicture