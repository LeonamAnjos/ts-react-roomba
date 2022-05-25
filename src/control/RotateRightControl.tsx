import React, { useContext } from "react";
import { RoombaContext } from "../contexts/RoombaContext";

const RotateRightControl = () => {
  const { rotateRight } = useContext(RoombaContext);

  return <button onClick={rotateRight}>Rotate to the right</button>;
};

export default RotateRightControl;
