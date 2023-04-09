import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import HomePage from "../HomePage.view";
import useController from "../HomePage.controller";

const useComponentMockReturnValue = {
  data: [],
  loading: false,
  error: null,
};

jest.mock("../components/MovieCard", () =>
  jest.fn((props) => <>{JSON.stringify(props)}</>)
);
jest.mock("../HomePage.controller");
jest.mock("@chakra-ui/react", () => {
  const components = jest.requireActual("@chakra-ui/react");
  return {
    ...components,
    Spinner: () => <>spinner</>,
  };
});
const useControllerMock = useController;

describe("HomePage.view", () => {
  beforeEach(() => {
    useControllerMock.mockReturnValue(useComponentMockReturnValue);
  });

  afterEach(() => {
    useControllerMock.mockClear();
  });

  it("should render without search result", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Search and view your favorite movies here/i)
    ).toBeVisible();
  });

  it("should render with search results", () => {
    const mockData = [
      {
        imdbID: "tt1375666",
        Title: "Inception",
        Poster: null,
        Year: "2010",
      },
      {
        imdbID: "tt0816692",
        Title: "Interstellar",
        Poster: "https://example.com/poster4.jpg",
        Year: "2014",
      },
    ];

    const tempUseControllerMockReturnValue = { ...useComponentMockReturnValue };
    tempUseControllerMockReturnValue.data = mockData;
    useControllerMock.mockReturnValue(tempUseControllerMockReturnValue);

    render(<HomePage search="interstellar search" />);

    expect(screen.getByText(/interstellar search/i)).toBeVisible();
    expect(screen.getByText(/interstellar/i)).toBeVisible();
    expect(screen.getByText(/inception/i)).toBeVisible();
  });

  it("should render loading state correctly based on fetch", () => {
    const tempUseControllerMockReturnValue = {
      ...useComponentMockReturnValue,
    };
    tempUseControllerMockReturnValue.loading = true;
    useControllerMock.mockReturnValue(tempUseControllerMockReturnValue);

    render(<HomePage search="interstellar search" />);

    expect(screen.getByText(/spinner/i)).toBeVisible();
  });

  it.todo("should correctly show infinite scroll behaviour");
});
