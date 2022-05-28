import { render } from "@testing-library/react";
import RoombaContextProvider from "../contexts/RoombaContext";
import Room, { RoomProps } from "./Room";

describe("<Cell />", () => {
  const customRender = ({ size }: RoomProps) => {
    return render(
      <RoombaContextProvider size={4}>
        <Room size={size} />
      </RoombaContextProvider>
    );
  };
  it("SHOULD render WHEN size 2", () => {
    const { container } = customRender({ size: 2 });

    expect(container).toMatchSnapshot();
  });

  it("SHOULD render WHEN size 3", () => {
    const { container } = customRender({ size: 3 });

    expect(container).toMatchSnapshot();
  });
});
