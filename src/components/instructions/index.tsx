import classNames from "classnames";
import styles from "./styles.module.scss";
import InstructionsProps from "./props";

const Instructions = ({ show = false, setShow }: InstructionsProps) => {
  return (
    <div className={classNames(styles.container, show && styles.show)} onClick={() => setShow()}>
      <div className={styles.rules}>
        <p>
          <b>HOW TO PLAY:</b> Use your <b>arrow keys</b> to move the tiles.
          Tiles with the same number <b>merge into one</b> when they touch. Add
          them up to reach <b>2048!</b>
        </p>
        Start Playing. →
      </div>
    </div>
  );
};

export default Instructions;
