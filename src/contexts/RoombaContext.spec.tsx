import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import RoombaContextProvider, { RoombaContext } from "./RoombaContext";

type CustomRenderProps = {
  size: number;
};

const TestContext = () => {
  const {
    position: { row, column, size, direction },
    getEmoji,
    moveForward,
    rotateRight,
  } = useContext(RoombaContext);

  return (
    <>
      {`Row: '${row}' | Column: '${column}' | Size: '${size}' | Direction: '${direction}' | Emoji: '${getEmoji()}'`}
      <button data-testid={"move-forward-button"} onClick={moveForward} />
      <button data-testid={"rotate-right-button"} onClick={rotateRight} />
    </>
  );
};

describe("<RoombaContextProvier />", () => {
  const customRender = ({ size }: CustomRenderProps) => {
    return render(
      <RoombaContextProvider size={size}>
        <TestContext />
      </RoombaContextProvider>
    );
  };
  it("SHOULD render WHEN inicial context", () => {
    const { container } = customRender({ size: 3 });

    expect(container).toMatchSnapshot();
  });

  it("moveForward()", () => {
    const { container } = customRender({ size: 2 });
    const element = screen.getByTestId("move-forward-button");

    Array.from({ length: 8 }).forEach(() => {
      fireEvent.click(element);
      expect(container).toMatchSnapshot();
    });
  });

  it("rotateRight()", () => {
    const { container } = customRender({ size: 3 });
    const element = screen.getByTestId("rotate-right-button");

    Array.from({ length: 4 }).forEach(() => {
      fireEvent.click(element);
      expect(container).toMatchSnapshot();
    });
  });
});
