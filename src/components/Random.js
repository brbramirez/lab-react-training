function Random({ min, max }) { 
    const randomText = `Random value between ${min} and ${max} =>`;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return (
      <div className="">
        <p>{randomText} {randomNumber}</p>
      </div>
    );
  }
  
  export default Random;