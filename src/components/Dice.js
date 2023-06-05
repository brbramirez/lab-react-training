//NOT COMPLETED

import { useState } from "react";
import EmptyDice from '../assets/images/dice-empty.png'


const Dice = () => {

    const [diceNumber, setDiceNumber] = useState(EmptyDice);
    const handleClick = () => {
        setDiceNumber('../assets/images/dice-empty.png');
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random()*6+1);
            setDiceNumber(`../assets/images/dice${randomNumber}.png`);
        }, 1000);
      };

      return (
        <div>
          <img
            src={`../assets/images/${diceNumber}`}
            alt="Dice"
            onClick={handleClick}
          />
        </div>
      );
    };

export default Dice