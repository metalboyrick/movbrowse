import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

// NOTE: no unit tests on this since it is a Chakra Factory.
const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default ChakraNextImage;
