import Head from "next/head";

import DetailPage from "@/components/DetailPage/DetailPage.view";
import { GetServerSidePropsContext } from "next";

export default function Detail(props: { imdbID: string }) {
  return (
    <>
      <Head>
        <title>MovBrowse</title>
        <meta name="description" content="A web app to browse movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DetailPage imdbID={props.imdbID} />
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const imdbID = context.params?.imdbID || "";

  return {
    props: {
      imdbID,
    },
  };
}
