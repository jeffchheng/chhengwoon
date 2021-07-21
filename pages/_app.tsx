import "../css/globals.css";
import Head from "next/head";

type Props = {
  Component: Function;
  pageProps: object;
};

export default function App({ Component, pageProps }: Props): JSX.Element {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Roboto Slab", Georgia, serif;
        }
      `}</style>
    </div>
  );
}
