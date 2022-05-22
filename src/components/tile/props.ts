export default interface TileProps {
  value: string;
  position: [string, string];
  index?: number;
  color?: string;
  gridSizes: {
    gap: string;
    size: number;
    cell: string;
  };
}
