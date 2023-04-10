import "@/styles/globals.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { AppProps } from "next/app";

import Navbar from "@/components/common/Navbar";
import { Provider } from "react-redux";
import store from "@/common/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <VStack width="100vw" minHeight="100vh" bgColor="gray.100">
            <Navbar />
            <Component {...pageProps} />
          </VStack>
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;
