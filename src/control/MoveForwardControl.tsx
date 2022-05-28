import React, { useContext } from "react";
import { RoombaContext } from "../contexts/RoombaContext";

const MoveForwardControl = () => {
  const { moveForward } = useContext(RoombaContext);

  return (
    <button data-testid={"move-forward-button"} onClick={moveForward}>
      Move Forward
    </button>
  );
};

export default MoveForwardControl;
