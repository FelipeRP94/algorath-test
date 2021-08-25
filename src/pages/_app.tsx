import "../styles/globals.css";
import { Provider } from "react-redux";
import React from "react";
import store from "../store/redux";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
