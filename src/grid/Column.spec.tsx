import { render } from "@testing-library/react";
import Column from "./Column";

describe("<Column />", () => {
  it("SHOULD render", () => {
    const { container } = render(<Column>{"Content Test"}</Column>);

    expect(container).toMatchSnapshot();
  });
});
