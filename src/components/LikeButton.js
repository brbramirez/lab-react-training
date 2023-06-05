import React, { useState } from "react";

const LikeButton = () => {
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = useState(0);
  const randomIndex = Math.floor(Math.random() * colorArr.length);
  const backgroundColor = colorArr[randomIndex];

  return (
    <div>
      <button
        style={{ backgroundColor }}
        onClick={() => setCount(count + 1)}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;