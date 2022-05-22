import { useEffect } from "react";

import Tile from "../tile";
import styles from "./styles.module.scss";
import colors from "../../config/colors";
import classNames from "classnames";
import { posix } from "path";

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

const setInitialTies = () => {
  // const gridContainer = document.getElementById("gridContainer");
  const randomIndex = getrandomNumber();
  const randomGridItem =
    document.getElementsByClassName("cellItem")[randomIndex];
  // console.log(gridContainer?.getAttribute("data-x"))

  // const setRandomInitialTies = randomGridItem?.children[randomIndex];
  let x = randomGridItem?.getAttribute("data-x");
  let y = randomGridItem?.getAttribute("data-y");

  /*  console.log(x, y)
  } */
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

const GameBoard = () => {
  useEffect(() => {
    setInitialTies();
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
        return (
          <div
            className="cellItem"
            key={index}
            data-x={index % gridSizes.size}
            data-y={Math.floor(index / gridSizes.size)}
          ></div>
        );
      })}

      <Tile
        value={"2"}
        color={"#fff"}
        gridSizes={gridSizes}
        position={["9", "4"]}
      />
    </div>
  );
};

export default GameBoard;
