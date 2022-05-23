import TileProps from "./props";
import styles from "./styles.module.scss";

const Tile = ({
  value,
  position,
  index,
  color,
  // gridSizes,
  ...rest
}: TileProps) => {
  console.log("x",position[0].dataset.x);
  console.log("y",position[1].dataset.y);
  return (
    <div
      className={styles.container}
      style={{
        top: `calc(${position[0]?.dataset?.x} * (13.5vmin + 2vmin) + 2vmin)`,
        left: `calc(${position[1]?.dataset?.y} * (13.5vmin + 2vmin) + 2vmin)`,
      }}
      {...rest}
    >
      <span>{value}</span>
    </div>
  );
};

export default Tile;
