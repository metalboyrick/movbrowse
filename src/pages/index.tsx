import Head from "next/head";

import HomePage from "@/components/HomePage/HomePage.view";
import { GetServerSidePropsContext } from "next";

export default function Home(props: { search?: string }) {
  return (
    <>
      <Head>
        <title>MovBrowse</title>
        <meta name="description" content="A web app to browse movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage {...props} />
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  // TODO: handle errors

  const search = context.query?.search || "";

  return {
    props: {
      search,
    },
  };
}
