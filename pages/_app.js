import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import MohamedEhab from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Linktree MEDO</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MohamedEhab />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
