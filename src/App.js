import React, { useState, useRef } from 'react';
import Bingo from './Bingo/Bingo';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true); // Show loading message
  const [letsPlay, setLetsPlay] = useState(false); // show lets play message

  const bingoRef = useRef(null); // reference for Bingo class

  const resetBingoGame = () => { // resetting Bingo game
    bingoRef.current.resetBingo();
  }

  const loadNewGame = (loadingFlag) => { // Reset btn game
    setLoading(loadingFlag);
    if(!loadingFlag) {
      setLetsPlay(true);
      setTimeout(setLetsPlay, 2000);
    }
  }
  return (
    <>
      { isLoading && <div className="loading">Loading...  Please wait...</div>}
      { letsPlay && <div className="lets-play">Game is Loaded. Let's Play</div>}
      <div className="app">
        <header className="app-header">
            Mind Game - Football Bingo
        </header>
        <span className="btn" onClick={resetBingoGame}>Reset Game</span>
        <Bingo setLoading={loadNewGame} ref={bingoRef}/>
      </div>
    </>
  );
}

export default App;
