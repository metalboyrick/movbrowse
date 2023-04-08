import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../Navbar.view";

jest.mock("../components/SearchBar", () => jest.fn(() => <>searchbar</>));

describe("Navbar.view", () => {
  it("should render correctly", () => {
    render(<Navbar />);

    expect(screen.getByText(/movbrowse/i)).toBeVisible();
    expect(screen.getByText(/searchbar/i)).toBeVisible();
  });
});
