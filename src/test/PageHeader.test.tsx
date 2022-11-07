import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the app title", () => {
    expect(screen.getByRole("heading").textContent).toEqual(
      "Poc approving Tool"
    );
  });
});
