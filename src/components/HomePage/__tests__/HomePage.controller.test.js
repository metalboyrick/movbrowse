import { renderHook, act, fireEvent } from "@testing-library/react-hooks";
import { useMovieSearch } from "@/services/movie/hooks";
import useController from "../HomePage.controller";

const useMovieSearchMockReturnValue = {
  searchWithQuery: jest.fn(),
  fetchNextPage: jest.fn(),
  data: [],
  loading: false,
  error: null,
};

const useMovieSearchMockProps = {
  search: "test",
};

jest.mock("@/services/movie/hooks", () => ({
  useMovieSearch: jest.fn(),
}));

const useMovieSearchMock = useMovieSearch;

describe("HomePage.controller", () => {
  beforeEach(() => {
    useMovieSearchMock.mockReturnValue(useMovieSearchMockReturnValue);
  });

  afterEach(() => {
    useMovieSearchMock.mockClear();
  });

  it("should get movie data with default values", () => {
    renderHook(() => useController({}));

    expect(useMovieSearchMock).toHaveBeenCalledWith();
  });

  it("should get movie data with search value", () => {
    renderHook(() => useController(useMovieSearchMockProps));

    expect(useMovieSearchMock).toHaveBeenCalledWith();
    expect(useMovieSearchMockReturnValue.searchWithQuery).toHaveBeenCalledWith(
      useMovieSearchMockProps.search
    );
  });

  it("should fetch the next page when scrolled to bottom", () => {
    renderHook(() => useController(useMovieSearchMockProps));

    act(() => {
      window.scrollTo(0, document.body.scrollHeight + 1);
      window.dispatchEvent(new Event("scroll"));
    });

    expect(useMovieSearchMockReturnValue.fetchNextPage).toHaveBeenCalled();
  });
});
