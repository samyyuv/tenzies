import './App.css';
import Numbers from './components/Numbers';

function App() {
  function allNewDice() {
    let arrayNum = []
    for (let i = 0; i < 10; i++) {
      arrayNum.push(Math.floor((Math.random() * 6) + 1))
    }
    return arrayNum;
  }

  return (
    <main>
      <div className="tenziesContainer">
        <h1 className="titre">Tenzies</h1>
        <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="numbersContainer">
          <Numbers
            value="1" />
          <Numbers
            value="2" />
          <Numbers
            value="3" />
          <Numbers
            value="4" />
          <Numbers
            value="5" />
          <Numbers
            value="6" />
          <Numbers
            value="7" />
          <Numbers
            value="8" />
          <Numbers
            value="9" />
          <Numbers
            value="10" />

        </div>
        <div className="diceContainer">
          <button className="dice">Roll</button>
        </div>
      </div>
    </main>
  );
}

export default App;
