import dice1 from '../assets/dice1.png';
import dice2 from '../assets/dice2.png';
import dice3 from '../assets/dice3.png';
import dice4 from '../assets/dice4.png';
import dice5 from '../assets/dice5.png';
import dice6 from '../assets/dice6.png';

import player2Dice1 from '../assets/Player2dice1.png';
import player2Dice2 from '../assets/Player2dice2.png';
import player2Dice3 from '../assets/Player2dice3.png';
import player2Dice4 from '../assets/Player2dice4.png';
import player2Dice5 from '../assets/Player2dice5.png';
import player2Dice6 from '../assets/Player2dice6.png';
import { useState } from 'react'



function DiceRoll(){
const player1 = [dice1, dice2, dice3, dice4, dice5, dice6]
const player2 = [player2Dice1, player2Dice2, player2Dice3, player2Dice4, player2Dice5, player2Dice6]

const [roll, setRoll] = useState([dice6, player2Dice6]);

const handleRoll = () => {
  const randomIndex1 = Math.floor(Math.random() * 6) + 1;
  const randomIndex2 = Math.floor(Math.random() * 6) + 1;

  setRoll([player1[randomIndex1]], [player2[randomIndex2]]);

}






  return (
  <>
    <div className="main"></div>
    <div className="container">
      <h1 className=" d-flex justify-content-center">Roll Me!!</h1>
      <div>
        <div className="dice" id="dice1">
          <p>Player 1</p>
          <img className="img1" src={roll[0]} alt='' />
        </div>
        <div className="dice" id="dice2">
          <p>Player 2</p>
          <img className="img2" src={roll[1]} alt='' />
        </div>
        <div>
          <button type="button" id="dice-button" className="btn" onClick={handleRoll}>
            Roll Dice
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default DiceRoll 