import CellProps from "./props";

const Cell = ({ className, positionX, positionY, ref, ...rest }: CellProps) => {
  return <div className={className} ref={ref} {...rest}></div>;
};

export default Cell;
