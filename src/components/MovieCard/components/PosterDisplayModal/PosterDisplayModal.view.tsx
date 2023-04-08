import React from "react";
import { PosterDisplayModalProps } from "./PosterDisplayModal.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";

function PosterDisplayModal({
  img = PLACEHOLDER_POSTER_URL,
}: PosterDisplayModalProps) {
  return <div />;
}

export default PosterDisplayModal;
