import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
