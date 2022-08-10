import "styles/carbon.scss";
import "styles/globals.css";
import Analytics from "components/Analytics";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import type { AppProps } from "next/app";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Analytics />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
