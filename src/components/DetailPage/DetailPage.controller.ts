import { DetailPageProps, UseControllerReturnValue } from "./DetailPage.types";

function useController(props: DetailPageProps): UseControllerReturnValue {
  return {
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
}

export default useController;
