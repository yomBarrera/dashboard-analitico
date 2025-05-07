
import type { AppProps } from "next/app";
import "@/ui/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Component {...pageProps} />
    </>

  ) 

}
