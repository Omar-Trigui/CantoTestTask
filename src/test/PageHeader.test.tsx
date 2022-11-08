import { render, screen } from "@testing-library/react";
import App from "../App";

describe("PageHeader", () => {

  it("Should render the app title", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toEqual(
      "Poc approving Tool"
    );
  });
});
