import { render, screen } from "@testing-library/react";
import App from "../App";

describe("SideBar", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Should render the approve button on reder", () => {
    expect(screen.getByText(/Approve/i).closest("button")).toBeTruthy();
  });
  it("Should render the reject button on reder", () => {
    expect(screen.getByText(/Reject/i).closest("button")).toBeTruthy();
  });
});
