import React from "react";
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

import './App.css';
import Numbers from './components/Numbers';

function App() {
  const [nums, setNum] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);

  React.useEffect(() => {
    const allHeld = nums.every(num => num.isHeld);
    const value = nums[0].value;
    const allValues = nums.every(num => value === num.value);
    if (allHeld && allValues) {
      setTenzies(true)
    }
  }, [nums])

  function genereteNewDice() {
    return {
      value: Math.floor((Math.random() * 6) + 1),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    let arrayNum = []
    for (let i = 0; i < 10; i++) {
      arrayNum.push(genereteNewDice())
    }
    return arrayNum;
  }

  function rollDice() {
    if (!tenzies) {
      setNum(prevNum =>
        prevNum.map(num => {
          return num.isHeld ?
            num : genereteNewDice()
        })
      )
      setRolls(prevRoll => prevRoll + 1)
    } else {
      setTenzies(false)
      setNum(allNewDice())
    }
  }

  function holdDice(id) {
    setNum(prevNum =>
      prevNum.map(num => {
        return num.id === id ?
          { ...num, isHeld: !num.isHeld } : num
      })
    )
  }

  const numbersToShow = nums.map(num =>
    <Numbers
      value={num.value}
      isHeld={num.isHeld}
      holdDice={(e) => holdDice(num.id)} />
  )

  return (
    <main>
      <div className="tenziesContainer">
        {tenzies && <Confetti />}
        <h1 className="titre">Tenzies</h1>
        <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        {tenzies && <div className="rollsCounter">
          <button className="dice"> Total of rolls done = {rolls} </button>
        </div>}
        <div className="numbersContainer">
          {numbersToShow}
        </div>
        <div className="diceContainer">
          <button className="dice" onClick={rollDice} >{tenzies ? "New Game" : "Roll"}</button>
        </div>
      </div>
    </main>
  );
}

export default App;
