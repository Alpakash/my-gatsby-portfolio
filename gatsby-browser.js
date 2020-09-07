import React from "react";
import ThemeProvider from "providers/ThemeProvider";
const isBrowser = typeof window !== `undefined`;

export const onServiceWorkerUpdateReady = () => {
  if (isBrowser) {
    window.location.reload(true);
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
