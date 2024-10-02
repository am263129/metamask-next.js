import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetamaskProvider } from "../hooks/useMetamask";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MetamaskProvider>
      <Component {...pageProps} />
    </MetamaskProvider>
  );
}

export default MyApp;