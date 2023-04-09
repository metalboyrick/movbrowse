import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function useController(props: HomePageProps): UseControllerReturnValue {
  return {
    data: [
      {
        imdbID: "tt0120737",
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Poster: "https://example.com/poster1.jpg",
        Year: "2001",
      },
      {
        imdbID: "tt0167260",
        Title: "The Lord of the Rings: The Two Towers",
        Poster: "https://example.com/poster2.jpg",
        Year: "2002",
      },
      {
        imdbID: "tt0167261",
        Title: "The Lord of the Rings: The Return of the King",
        Poster: "https://example.com/poster3.jpg",
        Year: "2003",
      },
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
      {
        imdbID: "tt0120737",
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Poster: "https://example.com/poster1.jpg",
        Year: "2001",
      },
      {
        imdbID: "tt0167260",
        Title: "The Lord of the Rings: The Two Towers",
        Poster: "https://example.com/poster2.jpg",
        Year: "2002",
      },
      {
        imdbID: "tt0167261",
        Title: "The Lord of the Rings: The Return of the King",
        Poster: "https://example.com/poster3.jpg",
        Year: "2003",
      },
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
      {
        imdbID: "tt0120737",
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Poster: "https://example.com/poster1.jpg",
        Year: "2001",
      },
      {
        imdbID: "tt0167260",
        Title: "The Lord of the Rings: The Two Towers",
        Poster: "https://example.com/poster2.jpg",
        Year: "2002",
      },
      {
        imdbID: "tt0167261",
        Title: "The Lord of the Rings: The Return of the King",
        Poster: "https://example.com/poster3.jpg",
        Year: "2003",
      },
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
    ],
    loading: false,
    error: null,
  };
}

export default useController;
