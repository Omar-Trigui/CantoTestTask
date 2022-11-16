import { render, screen } from "@testing-library/react";
import { PageHeader } from "../Components/PageHeader";

describe("PageHeader", () => {

  it("Should render the app title", () => {
    render(<PageHeader />);
    expect(screen.getByRole("heading").textContent).toEqual(
      "PoC Approving Tool"
    );
  });
});
