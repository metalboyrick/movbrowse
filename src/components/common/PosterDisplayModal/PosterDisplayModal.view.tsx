import React from "react";
import { PosterDisplayModalProps } from "./PosterDisplayModal.types";
import { PLACEHOLDER_POSTER_URL } from "@/common/constants";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

function PosterDisplayModal({
  img = PLACEHOLDER_POSTER_URL,
  onClose,
}: PosterDisplayModalProps) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Poster</ModalHeader>
        <ModalCloseButton data-testid="close-btn" />
        <ModalBody>
          <Image src={img} alt="Popup" width={400} height={600} />
          <p style={{ color: "pink", fontFamily: "cursive", fontSize: "1.2rem" }}>
            This poster is so girly and fabulous!
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PosterDisplayModal;