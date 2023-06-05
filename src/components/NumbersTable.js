const NumbersTable = ({ limit }) => {
    const numberArray = [];
    let lastDigit = 0;
  
    while (lastDigit < limit) {
      numberArray.push(lastDigit + 1);
      lastDigit++;
    }
  
    return (
      <div className="d-flex">
        {numberArray.map((num) => {
          if (num % 2 === 0) {
            return (
              <p key={num} className="p-5 text-bg-danger border">
                {num}
              </p>
            );
          } else {
            return (
              <p key={num} className="p-5 text-bg-primary border">
                {num}
              </p>
            );
          }
        })}
      </div>
    );
  };
  
  export default NumbersTable;
  