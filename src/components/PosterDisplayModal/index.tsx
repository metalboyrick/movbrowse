import dynamic from "next/dynamic";

const PosterDisplayModal = dynamic(() => import("./PosterDisplayModal.view"), {
  loading: () => <div>loading...</div>,
  ssr: false,
});

export default PosterDisplayModal;
