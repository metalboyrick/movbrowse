import Head from "next/head";
import { Inter } from "next/font/google";
import MovieCard from "@/components/MovieCard/MovieCard.view";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MovBrowse</title>
        <meta name="description" content="A web app to browse movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MovieCard
        title={"Catch Me If You Can"}
        year={"1995"}
        rating={9}
        starring={"Tom Hanks, Leonardo DiCaprio"}
        imdbID={"someImdbID"}
      />
    </>
  );
}
