import "../css/tailwind.css"
import Head from "next/head"

type Props = {
  Component: Function,
  pageProps: object,
}

export default function App({ Component, pageProps }: Props): JSX.Element {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
        }
      `}</style>
    </div>
  )
}
