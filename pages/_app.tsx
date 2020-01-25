import "../css/tailwind.css"

import useDarkMode from "../hooks/useDarkMode"

type Props = {
  Component: Function,
  pageProps: object,
}

export default function App({ Component, pageProps }: Props): JSX.Element {
  const [darkMode] = useDarkMode()

  return <Component darkMode={darkMode} {...pageProps} />
}
