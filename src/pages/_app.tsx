import type { AppProps } from "next/app";
import "@/ui/styles/globals.scss";
import { ApplicationProvider } from "../context/application";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <Component {...pageProps} />
    </ApplicationProvider>
  );
}
