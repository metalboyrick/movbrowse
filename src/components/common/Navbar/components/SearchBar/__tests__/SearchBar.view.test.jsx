import { forwardRef } from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import SearchBarView from "../SearchBar.view";
import useController from "../SearchBar.controller";

const mockControllerReturnValue = {
  searchValue: "",
  recommendation: {
    data: [
      {
        Title: "smurfrec1",
        imdbID: "imdbsmurfrec1",
      },
      {
        Title: "smurfrec2",
        imdbID: "imdbsmurfrec2",
      },
      {
        Title: "smurfrec3",
        imdbID: "imdbsmurfrec3",
      },
    ],
    loading: false,
    error: false,
  },
  handleClickRecommendation: jest.fn(),
  handleSearch: jest.fn(),
  handleSubmit: jest.fn(),
};

jest.mock("../SearchBar.controller");
jest.mock("@chakra-ui/react", () => {
  const components = jest.requireActual("@chakra-ui/react");
  return {
    ...components,
    IconButton: jest.fn(({ onClick }) => (
      <button onClick={onClick}>smurfbutton</button>
    )),
    Input: jest.fn(({ onChange, placeholder, ref }) => (
      <input ref={ref} onChange={onChange} placeholder={placeholder} />
    )),
  };
});

const useControllerMock = useController;

describe("Navbar/SearchBar.view", () => {
  beforeEach(() => {
    useControllerMock.mockReturnValue(mockControllerReturnValue);
  });

  afterEach(() => {
    useControllerMock.mockClear();
  });

  it("should initial render correctly", () => {
    render(<SearchBarView />);

    expect(screen.getByPlaceholderText(/smurf for movies/i)).toBeVisible();
    expect(screen.getByText(/smurfbutton/i)).toBeVisible();
    expect(screen.queryByText(/smurfrec1/i)).not.toBeInTheDocument();
  });

  it("should render dropdown correctly - base case", () => {
    const tempControllerReturnValue = { ...mockControllerReturnValue };
    tempControllerReturnValue.searchValue = "smurfman";
    tempControllerReturnValue.handleSearch = jest.fn((args) => args);

    useControllerMock.mockReturnValue(tempControllerReturnValue);

    render(<SearchBarView />);

    const input = screen.getByPlaceholderText(/smurf for movies/i);
    fireEvent.change(input, { target: { value: "smurfman" } });

    expect(tempControllerReturnValue.handleSearch).toHaveBeenCalled();
    expect(input.value).toBe("smurfman");
    expect(screen.getByText(/smurfrec1/i)).toBeInTheDocument();
  });

  it("should handle clicking the smurf button correctly", () => {
    const tempControllerReturnValue = { ...mockControllerReturnValue };
    tempControllerReturnValue.searchValue = "smurfman";

    useControllerMock.mockReturnValue(tempControllerReturnValue);

    render(<SearchBarView />);

    const searchBtn = screen.getByText(/smurfbutton/i);
    fireEvent.click(searchBtn);

    expect(tempControllerReturnValue.handleSubmit).toBeCalled();
  });
});