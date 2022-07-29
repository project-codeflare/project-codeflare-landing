import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Hero from "components/Hero";
import Callout from "components/Callout";
import Intro from "components/Intro";
import Lightbox from "components/Lightbox";
import TwoColumn from "components/TwoColumn";

import heroImage from "media/hero.webp";
import videoPoster from "media/poster.jpg";
import videoSrc from "media/logo.mp4";

const Home: NextPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>CodeFlare</title>
        <meta name="description" content="CodeFlare by IBM Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero setLightboxOpen={setLightboxOpen} src={heroImage} />
      <Lightbox open={lightboxOpen} setOpen={setLightboxOpen}>
        <video
          onEnded={() => setLightboxOpen(false)}
          preload="auto"
          playsInline
          poster={videoPoster.src}
          controls
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Lightbox>
      <TwoColumn />
      <Callout heading="Case study">
        A major semi-conductor manufacterer applied the framework to analyze and
        optimize approximately <strong>100,000 pipelines</strong> for training
        machine learning models. CodeFlare cut the time it took to execute each
        pipeline from 4 hours to 15 minutes.
        <br />
        <a href="research.ibm.com">Request a demo →</a>
      </Callout>
    </div>
  );
};

export default Home;
