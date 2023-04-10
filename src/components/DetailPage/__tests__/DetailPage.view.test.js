import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import useController from "../DetailPage.controller";
import DetailPageView from "../DetailPage.view";

const mockUseControllerReturnValue = {
  data: {
    Title: "Batman: The Killing Joke",
    Year: "2016",
    Rated: "R",
    Released: "25 Jul 2016",
    Runtime: "76 min",
    Genre: "Animation, Action, Crime",
    Director: "Sam Liu",
    Actors: "Kevin Conroy, Mark Hamill, Tara Strong",
    Plot: "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
    Language: "English",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: 6.4,
      },
      {
        Source: "Rotten Tomatoes",
        Value: 3.6,
      },
    ],
  },
  loading: false,
  error: null,
};

jest.mock("../DetailPage.controller");
jest.mock("../../common/PosterDisplayModal", () =>
  jest.fn(() => <>poster modal</>)
);
jest.mock("next/image", () => jest.fn(({ src }) => <>{src}</>));

const useControllerMock = useController;

describe("DetailPage.view", () => {
  beforeEach(() => {
    useControllerMock.mockReturnValue(mockUseControllerReturnValue);
  });

  afterEach(() => {
    useControllerMock.mockClear();
  });

  it("should correctly render complete data", () => {
    render(<DetailPageView imdbID="tt4853102" />);

    expect(
      screen.getByText(mockUseControllerReturnValue.data.Title)
    ).toBeVisible();
    expect(
      screen.getByText(mockUseControllerReturnValue.data.Actors)
    ).toBeVisible();
    expect(
      screen.getByText(mockUseControllerReturnValue.data.Plot)
    ).toBeVisible();
    expect(
      screen.getByText(mockUseControllerReturnValue.data.Poster)
    ).toBeVisible();
  });

  it("should correctly render stats", () => {
    render(<DetailPageView imdbID="tt4853102" />);

    expect(screen.getByText(/imdb/i)).toBeVisible();
    expect(screen.getByText(/6.4/i)).toBeVisible();
  });

  it("should correctly go back when back button is clicked", () => {
    render(<DetailPageView imdbID="tt4853102" />);

    const backButton = screen.getByText("Back to Home");

    expect(backButton).toBeVisible();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });

  it("should pop up the movie image modal if clicked", () => {
    render(<DetailPageView imdbID="tt4853102" />);

    fireEvent.click(screen.getByTestId("movie-poster"));

    expect(screen.getByText(/poster modal/i)).toBeVisible();
  });

  it("should correctly show loading state", () => {
    const tempMockUseControllerReturnValue = {
      ...mockUseControllerReturnValue,
    };
    tempMockUseControllerReturnValue.loading = true;
    useControllerMock.mockReturnValue(tempMockUseControllerReturnValue);

    render(<DetailPageView imdbID="tt4853102" />);

    expect(screen.getByText(/please wait/i)).toBeVisible();
  });
});
