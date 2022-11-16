import { render, screen } from "@testing-library/react";
import { SideBarButton } from "../Components/SideBarButton";

describe("SideBar", () => {
  beforeEach(() => {
    const mockSetState = jest.fn();
    render(<SideBarButton onStatusChange={mockSetState} />);
  });
  it("Should render the approve button ", () => {
    expect(screen.getByText(/Approve/i).closest("button")).toBeTruthy();
  });
  it("Should render the reject button ", () => {
    expect(screen.getByText(/Reject/i).closest("button")).toBeTruthy();
  });
});
