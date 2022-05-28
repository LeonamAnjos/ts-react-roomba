import { render, screen, fireEvent } from "@testing-library/react";
import { ReactNode, useContext } from "react";
import RoombaContextProvider, {
  RoombaContext,
} from "../contexts/RoombaContext";
import Cell from "./Cell";

type TestCellProps = { column: number; row: number };

const TestCell = ({ column, row }: TestCellProps) => {
  const { rotateRight } = useContext(RoombaContext);

  const handleRotateClick = () => rotateRight();

  return (
    <>
      <button data-testid={"direction-button"} onClick={handleRotateClick}>
        Rotate
      </button>
      <Cell column={column} row={row} />
    </>
  );
};

describe("<Cell />", () => {
  const customRender = (children: ReactNode) => {
    return render(
      <RoombaContextProvider size={4}>{children}</RoombaContextProvider>
    );
  };
  it("SHOULD render WHEN cell is populated", () => {
    const { container } = customRender(<TestCell column={0} row={0} />);

    const element = screen.getByTestId("direction-button");

    expect(container).toMatchSnapshot();

    fireEvent.click(element);
    expect(container).toMatchSnapshot();

    fireEvent.click(element);
    expect(container).toMatchSnapshot();

    fireEvent.click(element);
    expect(container).toMatchSnapshot();
  });

  it("SHOULD render WHEN initial state AND cell is empty", () => {
    const { container } = customRender(<TestCell column={1} row={1} />);

    expect(container).toMatchSnapshot();
  });
});
