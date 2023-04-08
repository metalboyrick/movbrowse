import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import MovieCardView from '../MovieCard.view';

const movieCardProps = {
    title: 'Movie Title',
    year: '2023',
    rating: 7.5,
    starring: 'Leonardo DiCaprio, Tom Hanks',
    img: "someimage.jpg",
    imdbID: "testImdbID"
}

jest.mock("next/image", () => jest.fn(({ src }) => <>{src}</>))
jest.mock("../components/PosterDisplayModal", () => jest.fn(() => <>poster modal</>))

describe("MovieCard.view", () => {
  
  it("should render happy state correctly", () => {
    render(<MovieCardView {...movieCardProps} />);

    expect(screen.getByText(/movie title/i)).toBeVisible();
    expect(screen.getByText(/2023/i)).toBeVisible();
    expect(screen.getByText(/7.5/i)).toBeVisible();
    expect(screen.getByText(/leonardo/i)).toBeVisible();
    expect(screen.getByText(/someimage.jpg/i)).toBeVisible();
    expect(screen.queryByText(/poster modal/i)).not.toBeInTheDocument();
  });


  it("should render no image correctly", () => {
    const tempMovieCardProps = {...movieCardProps};
    tempMovieCardProps.img = undefined;

    render(<MovieCardView {...tempMovieCardProps} />);

    expect(screen.getByText(PLACEHOLDER_POSTER_URL)).toBeVisible();

  });

  it("should correctly redirect to its correct url", () => {
    render(<MovieCardView {...movieCardProps} />);
    const linkElement = screen.getByText(/movie title/i);
    expect(linkElement.href).toContain("testImdbID");
  });

  it("should show window modal when poster is clicked", () => {
    render(<MovieCardView {...movieCardProps} />);
    
    const imgElement = screen.getByText(/someimage.jpg/i);

    fireEvent.click(imgElement);

    expect(screen.getByText(/poster modal/i)).toBeVisible();
  });
});