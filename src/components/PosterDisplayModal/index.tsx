import dynamic from "next/dynamic";

const PosterDisplayModal = dynamic(() => import("./PosterDisplayModal.view"), {
  loading: () => <></>,
  ssr: false,
});

export default PosterDisplayModal;
