import { render, screen } from "@testing-library/react";
import App from "../App";

describe("PageHeader", () => {


  it("renders the app title", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toEqual(
      "Poc approving Tool"
    );
  });
});
