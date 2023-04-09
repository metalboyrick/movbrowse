import "@/styles/globals.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { AppProps } from "next/app";

import Navbar from "@/components/common/Navbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <VStack width="100vw" minHeight="100vh" bgColor="gray.100">
          <Navbar />
          <Component {...pageProps} />
        </VStack>
      </ChakraProvider>
    </>
  );
}

export default App;
