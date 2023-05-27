import visa from "../assets/images/visa.png";
import master from "../assets/images/master-card.png";

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  }) => {
    const cardType = type === 'Visa' ? visa : master;
  
    const lastFourDigits = number.slice(-4);
    const cardNumberDisplay = `**** **** **** ${lastFourDigits}`;
  
    const formattedExpirationMonth = ('0' + expirationMonth).slice(-2);
    const formattedExpirationYear = expirationYear.toString().slice(-2);
  
    return (
      <div
        style={{
          backgroundColor: bgColor,
          color: color,
          padding: '20px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '200px',
          width: '350px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <img
            src={cardType}
            alt={type}
            style={{ width: '50px', height: 'auto' }}
          />
        </div>
        <div
          style={{
            fontSize: '24px',
            marginBottom: '20px'
          }}
        >
          {cardNumberDisplay}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <p>
              Expires: {formattedExpirationMonth}/{formattedExpirationYear}
            </p>
            <p>{bank}</p>
          </div>
          <p>{owner}</p>
        </div>
      </div>
    );
  };
  
  export default CreditCard;