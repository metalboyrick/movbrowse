import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { PLACEHOLDER_POSTER_URL } from "@/common/constants";

import MovieCardView from "../MovieCard.view";

const movieCardProps = {
  title: "Movie Title",
  year: "2023",
  rating: 7.5,
  starring: "Leonardo DiCaprio, Tom Hanks",
  img: "someimage.jpg",
  imdbID: "testImdbID",
};

jest.mock("@chakra-ui/next-js", () => {
  const components = jest.requireActual("@chakra-ui/next-js");
  return {
    ...components,
    Image: jest.fn(({ src, onClick }) => <div onClick={onClick}>{src}</div>),
  };
});
jest.mock("next/link", () =>
  jest.fn(({ href, children }) => (
    <>
      {href}
      {children}
    </>
  ))
);

describe("MovieCard.view", () => {
  it("should render happy state correctly", () => {
    render(<MovieCardView {...movieCardProps} />);

    expect(screen.getByText(/movie title/i)).toBeVisible();
    expect(screen.getByText(/2023/i)).toBeVisible();
    expect(screen.getByText(/someimage.jpg/i)).toBeVisible();
    expect(screen.queryByText(/poster modal/i)).not.toBeInTheDocument();
  });

  it("should render no image correctly", () => {
    const tempMovieCardProps = { ...movieCardProps };
    tempMovieCardProps.img = undefined;

    render(<MovieCardView {...tempMovieCardProps} />);

    expect(screen.getByText(PLACEHOLDER_POSTER_URL)).toBeVisible();
  });

  it("should correctly redirect to its correct url", () => {
    render(<MovieCardView {...movieCardProps} />);
    const linkElement = screen.getByText(/testImdbID/i);
  });
});
