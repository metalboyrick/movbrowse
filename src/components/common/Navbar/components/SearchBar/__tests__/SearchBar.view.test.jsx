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
        Title: "testrec1",
        imdbID: "imdbtestrec1",
      },
      {
        Title: "testrec2",
        imdbID: "imdbtestrec2",
      },
      {
        Title: "testrec3",
        imdbID: "imdbtestrec3",
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
      <button onClick={onClick}>searchbutton</button>
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

    expect(screen.getByPlaceholderText(/search for movies/i)).toBeVisible();
    expect(screen.getByText(/searchbutton/i)).toBeVisible();
    expect(screen.queryByText(/testrec1/i)).not.toBeInTheDocument();
  });

  it("should render dropdown correctly - base case", () => {
    const tempControllerReturnValue = { ...mockControllerReturnValue };
    tempControllerReturnValue.searchValue = "batman";
    tempControllerReturnValue.handleSearch = jest.fn((args) => args);

    useControllerMock.mockReturnValue(tempControllerReturnValue);

    render(<SearchBarView />);

    const input = screen.getByPlaceholderText(/search for movies/i);
    fireEvent.change(input, { target: { value: "batman" } });

    expect(tempControllerReturnValue.handleSearch).toHaveBeenCalled();
    expect(input.value).toBe("batman");
    expect(screen.getByText(/testrec1/i)).toBeInTheDocument();
  });

  it("should handle clicking the search button correctly", () => {
    const tempControllerReturnValue = { ...mockControllerReturnValue };
    tempControllerReturnValue.searchValue = "batman";

    useControllerMock.mockReturnValue(tempControllerReturnValue);

    render(<SearchBarView />);

    const searchBtn = screen.getByText(/searchbutton/i);
    fireEvent.click(searchBtn);

    expect(tempControllerReturnValue.handleSubmit).toBeCalled();
  });
});
