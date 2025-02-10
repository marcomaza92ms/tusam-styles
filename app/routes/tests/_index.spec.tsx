import { createRoutesStub } from "react-router";
import Index from "~/routes/_index";
import { render } from "@testing-library/react";

const setup = (initialEntries: string) => {
  const App = createRoutesStub([
    {
      path: "*",
      Component: Index,
    },
  ]);

  return render(<App initialEntries={[initialEntries]} />);
};

describe("GIVEN a root example page", () => {
  it("SHOULD display successfully", () => {
    const wrapper = setup("/");

    expect(wrapper.queryByText(/welcome to remix/i)).toBeDefined();

    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
