import { useState, useEffect } from "react";

import Instructions from "../../components/instructions";
import GameBoard from "../../components/game-board";
import styles from "./styles.module.scss";

const Home = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [newGame, setNewGame] = useState(true);

  const getFirstGame = () => {
    if (localStorage.getItem("firstGame") === null) {
      localStorage.setItem("firstGame", "false");
      setShowInstructions(true);
    }
  };

  useEffect(() => {
    getFirstGame();
  });

  const gameOver = () => {
    setNewGame(false);
  };

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.mainTitle}>2048</h1>
          <h2>
            Join the tiles, get to <b>2048!</b>
          </h2>
          How to play →
        </div>
        <div>
          <span>Score</span>
          <button className={styles.button}>New game</button>
        </div>
      </header>
      <Instructions
        show={showInstructions}
        setShow={() => setShowInstructions(false)}
      />
      <GameBoard
        newGame={newGame}
        setNewGame={() => setNewGame(true)}
        gameOver={() => gameOver()}
      />
    </div>
  );
};

export default Home;
