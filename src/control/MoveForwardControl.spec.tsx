import { render, screen, fireEvent } from "@testing-library/react";
import { ReactNode, useContext } from "react";
import RoombaContextProvider, {
  RoombaContext,
} from "../contexts/RoombaContext";
import MoveForwardControl from "./MoveForwardControl";

type TestMoveForwardControlProps = {
  spyMoveForward: () => void;
};

const TestMoveForwardControl = ({
  spyMoveForward,
}: TestMoveForwardControlProps) => {
  const state = useContext(RoombaContext);
  state.moveForward = spyMoveForward;

  return <MoveForwardControl />;
};

describe("<MoveForwardControl />", () => {
  const customRender = (children: ReactNode) => {
    return render(
      <RoombaContextProvider size={3}>{children}</RoombaContextProvider>
    );
  };
  it("SHOULD render", () => {
    const { container } = customRender(<MoveForwardControl />);

    expect(container).toMatchSnapshot();
  });

  it("SHOULD call moveForward WHEN button is clicked", () => {
    const spy = jest.fn();
    customRender(<TestMoveForwardControl spyMoveForward={spy} />);

    const element = screen.getByTestId("move-forward-button");

    fireEvent.click(element);
    expect(spy).toHaveBeenCalledTimes(1);

    fireEvent.click(element);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
