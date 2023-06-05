import React from 'react'

export const Rating = ({children}) => {
    let showStar;
    let rating = Math.round(children);

    switch (rating) {
        case 0:
            showStar = '☆☆☆☆☆';
          break;
        case 1:
          showStar = '★☆☆☆☆';
          break;
        case 2:
          showStar = '★★☆☆☆';
          break;
        case 3:
          showStar = '★★★☆☆';
          break;
        case 4:
          showStar = '★★★★☆';
          break;
        case 5:
          showStar = '★★★★★';
          break;
        default:
          showStar = 'Enter a valid number';
          break;
      }

  return (
    <div>{showStar}</div>
  )
}

export default Rating