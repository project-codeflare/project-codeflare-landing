import "styles/carbon.scss";
import "styles/globals.css";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import type { AppProps } from "next/app";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
