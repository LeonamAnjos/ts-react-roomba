export enum Direction {
  Right = 1,
  Down,
  Left,
  Up,
}

export type Position = {
  row: number;
  column: number;
  direction: Direction;
  size: number;
};

const forwardDirections = [Direction.Right, Direction.Down];
const horizontalDirections = [Direction.Right, Direction.Left];

const isValid = (position: Position): boolean =>
  position.column >= 0 &&
  position.column < position.size &&
  position.row >= 0 &&
  position.row < position.size;

const move = (position: Position): Position => {
  const step = forwardDirections.includes(position.direction) ? 1 : -1;
  const newPosition = { ...position };

  if (horizontalDirections.includes(position.direction)) {
    newPosition.column += step;
  } else {
    newPosition.row += step;
  }

  if (isValid(newPosition)) {
    return newPosition;
  }

  return { ...position, direction: rotate(position.direction) };
};

const parseDirection = (direction: Direction): string => {
  switch (direction) {
    case Direction.Right:
      return "👉";
    case Direction.Down:
      return "👇";
    case Direction.Left:
      return "👈";
    case Direction.Up:
      return "👆";
    default:
      return "❓";
  }
};

const rotate = (direction: Direction): Direction => {
  const newDirecton = direction + 1;
  return newDirecton <= Direction.Up ? newDirecton : Direction.Right;
};

export { move, parseDirection, rotate };
