import React from "react";
import "../styles/Grid.css";
import Column from "./Column";
import Cell from "./Cell";

export type RoomProps = {
  size: number;
};

const Room = ({ size }: RoomProps) => {
  const columns = Array.from({ length: size }, (_, i: number) => (
    <Column key={i}>
      {Array.from({ length: size }, (_, j: number) => (
        <Cell key={j} column={i} row={j}></Cell>
      ))}
    </Column>
  ));

  return <div className="Grid">{columns}</div>;
};

export default Room;
