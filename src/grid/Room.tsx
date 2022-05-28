import React from "react";
import "../styles/Grid.css";
import Column from "./Column";
import Cell from "./Cell";

export type RoomProps = {
  size: number;
};

const Room = ({ size }: RoomProps) => {
  const columns = [];
  for (let i = 0; i < size; i++) {
    const cells = [];
    for (let j = 0; j < size; j++) {
      cells.push(<Cell key={j} column={i} row={j}></Cell>);
    }

    columns.push(<Column key={i}>{cells}</Column>);
  }

  return <div className="Grid">{columns}</div>;
};

export default Room;
