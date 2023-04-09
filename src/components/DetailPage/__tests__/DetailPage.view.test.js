import { render, screen } from "@testing-library/react";

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

    expect(screen.getByText(/batman/i)).toBeVisible();
    expect(screen.getByText(/2016/i)).toBeVisible();
    expect(screen.getByText(mockUseControllerReturnValue.Poster)).toBeVisible();
  });

  it("should correctly render stats", () => {
    render(<DetailPageView imdbID="tt4853102" />);

    expect(screen.getByText(/imdb/i)).toBeVisible();
    expect(screen.getByText(/6.4/i)).toBeVisible();
  });

  it.todo("should correctly go back when back button is clicked");
  it.todo("should pop up the movie image modal if clicked");
  it.todo("should render error correctly");
});
