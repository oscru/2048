import TileProps from "./props";
import styles from "./styles.module.scss";

const Tile = ({
  value,
  position,
  index,
  color,
  gridSizes,
  ...rest
}: TileProps) => {
  // console.log(position);
  return (
    <div
      className={styles.container}
      style={{
        top: `calc(${position[1]} * (13.5vmin + 2vmin) + 2vmin)`,
        left: `calc(${position[0]} * (13.5vmin + 2vmin) + 2vmin)`,
      }}
      {...rest}
    >
      <span>{value}</span>
    </div>
  );
};

export default Tile;
