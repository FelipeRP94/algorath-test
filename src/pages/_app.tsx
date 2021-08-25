import "../styles/globals.css";
import { Provider } from "react-redux";
import React from "react";
import store from "../store";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
