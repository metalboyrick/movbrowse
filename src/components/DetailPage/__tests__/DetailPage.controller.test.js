import { renderHook } from "@testing-library/react-hooks";
import { useMovieDetails } from "@/services/movie/hooks";
import useController from "../DetailPage.controller";

const mockUseMovieDetailsProps = {
  imdbID: "12345",
};

const mockUseMovieDetailsReturnValue = {
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

jest.mock("@/services/movie/hooks", () => ({
  useMovieDetails: jest.fn(),
}));

const useMovieDetailsMock = useMovieDetails;

describe("DetailPage.controller", () => {
  beforeEach(() => {
    useMovieDetailsMock.mockReturnValue(mockUseMovieDetailsReturnValue);
  });

  afterEach(() => {
    useMovieDetailsMock.mockClear();
  });

  it("should return the correct data, loading, and error values", () => {
    const { result } = renderHook(() =>
      useController(mockUseMovieDetailsProps)
    );

    expect(result.current.data).toEqual(mockUseMovieDetailsReturnValue.data);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(useMovieDetailsMock).toHaveBeenCalledWith("12345");
  });

  it("should handle loading state", () => {
    mockUseMovieDetailsReturnValue.loading = true;

    useMovieDetailsMock.mockReturnValueOnce(mockUseMovieDetailsReturnValue);

    const { result } = renderHook(() =>
      useController(mockUseMovieDetailsProps)
    );

    expect(result.current.loading).toBe(true);
  });
});
