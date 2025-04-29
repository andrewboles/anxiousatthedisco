import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anxious! At The Disco</title>
        <link rel="shortcut icon" href="/LogoClearBG.png" />
      </Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
