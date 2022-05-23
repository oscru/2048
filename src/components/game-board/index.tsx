import { useEffect, useRef, useState } from "react";

import Tile from "../tile";
import styles from "./styles.module.scss";
import colors from "../../config/colors";
import classNames from "classnames";
import { posix } from "path";
import { randomInt } from "crypto";
import gameBoardProps from "./props";

const gameGrid = new Array(16).fill("");

/* const gameMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]; */

const gridSizes = {
  gap: "2vmin",
  size: 4,
  cell: "13.5vmin",
};

const getrandomNumber = () => {
  let randomIndex = Math.floor(Math.random() * gameGrid.length);

  return randomIndex;
};

const setInitial = () => {
  const randomIndex = getrandomNumber();
  const randomGridItem =
    document.getElementsByClassName("cellItem")[randomIndex];

  
  let x = randomGridItem?.getAttribute("data-x");
  let y = randomGridItem?.getAttribute("data-y");

  return <Tile position={[x, y]} value={"2"} />;

};

/* const setNewTie = () => {
  const randomIndex = getrandomNumber();
  if (gameGrid[randomIndex] === "") {
    return <Tile value={"2"} color={"#fff"} gridSizes={gridSizes} />;
  } else {
    setNewTie();
  }
}; */

const arrows = {
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
};

let elem = document.querySelector("root-1");
if (elem) {
  let rect: any = elem.getBoundingClientRect();
  for (var key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      document.body.appendChild(para);
    }
  }
}

const GameBoard = ({ newGame, setNewGame, gameOver }: gameBoardProps) => {
  const [firstTilePosition, setFirstTilePosition] = useState(0);
  const [secondTilePosition, setSecondTilePosition] = useState(0);

  const setFirstTiles = () => {
    setFirstTilePosition(Math.floor(Math.random() * gameGrid.length));
    setSecondTilePosition(Math.floor(Math.random() * gameGrid.length));
  };

  const cellFirstRef = useRef(null);
  const cellSecondRef = useRef(null);

  useEffect(() => {
    const listener = (event: any) => {
      switch (event.keyCode) {
        case arrows.ArrowUp:
          const elem: any = document.getElementById("item");
          let rect: any = elem.getBoundingClientRect();
          if (elem) {
            for (var key in rect) {
              if (typeof rect[key] !== "function") {
                let para = document.createElement("p");
                para.textContent = `${key} : ${rect[key]}`;
                document.body.appendChild(para);
              }
            }
          }
          break;
        case arrows.ArrowDown:
          console.log("down");
          break;
        case arrows.ArrowLeft:
          console.log("left");
          break;
        case arrows.ArrowRight:
          console.log("right");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  useEffect(() => setFirstTiles(),[]);
  return (
    <div
      className={classNames(styles.gameBoard)}
      style={{
        gridTemplateColumns: `repeat(${gridSizes.size},${gridSizes.cell})`,
        gridTemplateRows: `repeat(${gridSizes.size},${gridSizes.cell})`,
        gridGap: `${gridSizes.gap}`,
      }}
      id={"gridContainer"}
    >
      {gameGrid.map((cell, index) => {
        // let color = colors.find((color) => color.value === cell);
        console.log(index);
        return (
          <div
            className="cellItem"
            key={index}
            data-x={index % gridSizes.size}
            data-y={Math.floor(index / gridSizes.size)}
            ref={
              index === firstTilePosition
                ? cellFirstRef
                : null || index === secondTilePosition
                ? cellSecondRef
                : null
            }
          ></div>
        );
      })}

      {firstTilePosition && cellFirstRef && cellFirstRef.current ? (
        <Tile
          value={"2"}
          color={"#fff"}
          // gridSizes={gridSizes}
          position={[cellFirstRef?.current, cellFirstRef?.current]}
        />
      ) : null}
      {secondTilePosition && cellSecondRef && cellSecondRef.current ? (
        <Tile
          value={"2"}
          color={"#fff"}
          // gridSizes={gridSizes}
          position={[cellSecondRef?.current, cellSecondRef?.current]}
        />
      ) : null}
    </div>
  );
};

export default GameBoard;
