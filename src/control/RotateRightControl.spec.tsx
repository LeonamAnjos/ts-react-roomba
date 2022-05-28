import { render, screen, fireEvent } from "@testing-library/react";
import { ReactNode, useContext } from "react";
import RoombaContextProvider, {
  RoombaContext,
} from "../contexts/RoombaContext";
import RotateRightControl from "./RotateRightControl";

type TestRotateRightControlProps = {
  spyRotateRight: () => void;
};

const TestRotateRightControl = ({
  spyRotateRight,
}: TestRotateRightControlProps) => {
  const state = useContext(RoombaContext);
  state.rotateRight = spyRotateRight;

  return <RotateRightControl />;
};

describe("<RotateRightControl />", () => {
  const customRender = (children: ReactNode) => {
    return render(
      <RoombaContextProvider size={3}>{children}</RoombaContextProvider>
    );
  };
  it("SHOULD render", () => {
    const { container } = customRender(<RotateRightControl />);

    expect(container).toMatchSnapshot();
  });

  it("SHOULD call moveForward WHEN button is clicked", () => {
    const spy = jest.fn();
    customRender(<TestRotateRightControl spyRotateRight={spy} />);

    const element = screen.getByTestId("rotate-right-button");

    fireEvent.click(element);
    expect(spy).toHaveBeenCalledTimes(1);

    fireEvent.click(element);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
