import dynamic from "next/dynamic";
import React from "react";

const PosterDisplayModal = dynamic(() => import("./PosterDisplayModal.view"), {
  loading: () => <></>,
  ssr: false,
});

const SmurfDisplayModal = () => {
  return <PosterDisplayModal />;
};

export default SmurfDisplayModal;