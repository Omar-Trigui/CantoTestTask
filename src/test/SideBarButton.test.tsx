import { render, screen } from "@testing-library/react";
import App from "../App";

describe("SideBar", () => {
  it("Should render the approve and reject", () => {
    render(<App />);
    expect(screen.getByText(/Approve/i).closest("button")).toBeTruthy();
    expect(screen.getByText(/Reject/i).closest("button")).toBeTruthy();
  });
});
