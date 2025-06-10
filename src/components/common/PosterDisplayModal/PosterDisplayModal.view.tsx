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
        <ModalHeader>Oh boy! Poster</ModalHeader>
        <ModalCloseButton data-testid="close-btn">See ya real soon!</ModalCloseButton>
        <ModalBody>
          <Image src={img} alt="Popup" width={400} height={600} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PosterDisplayModal;