import Head from "next/head";

import HomePage from "@/components/HomePage/HomePage.view";

export default function Home() {
  return (
    <>
      <Head>
        <title>MovBrowse</title>
        <meta name="description" content="A web app to browse movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  );
}
