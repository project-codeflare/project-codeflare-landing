import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Innovate, Teammates, Path } from "@carbon/pictograms-react";

import Hero from "components/Hero";
import Callout from "components/Callout";
import Intro from "components/Intro";
import Lightbox from "components/Lightbox";
import {
  TwoColumn,
  TwoColumnFeature,
  TwoColumnPictogram,
} from "components/TwoColumn";

import heroImage from "media/hero.webp";
import videoPoster from "media/poster.jpg";
import videoSrc from "media/codeflare.mp4";

import dashSrc from "media/dashboard.jpg";
import terminalSrc from "media/terminal.jpg";

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
      <TwoColumn
        imageSrc={dashSrc}
        imageAlt="CodeFlare dashboard screenshot"
        heading="Empower your AI and ML teams to innovate where it matters. We‘ll
    handle the rest."
      >
        <TwoColumnFeature icon={Path}>
          Minimize the effort and skills needed to scale your AI and ML
        </TwoColumnFeature>
        <TwoColumnFeature icon={Innovate}>
          Access the latest innovations and experience in running data science
          platforms
        </TwoColumnFeature>
        <TwoColumnFeature icon={Teammates}>
          Run your workloads anywhere.
        </TwoColumnFeature>
      </TwoColumn>
      <TwoColumn
        imageSrc={terminalSrc}
        imageAlt="CodeFlare terminal screenshot"
        heading="Empower your AI and ML teams to innovate where it matters. We‘ll
    handle the rest."
      >
        <TwoColumnFeature icon={Path}>
          Minimize the effort and skills needed to scale your AI and ML
        </TwoColumnFeature>
        <TwoColumnFeature icon={Innovate}>
          Access the latest innovations and experience in running data science
          platforms
        </TwoColumnFeature>
        <TwoColumnFeature icon={Teammates}>
          Run your workloads anywhere.
        </TwoColumnFeature>
      </TwoColumn>
    </div>
  );
};

{
  /* <Callout heading="Case study">
  A major semi-conductor manufacterer applied the framework to analyze and
  optimize approximately <strong>100,000 pipelines</strong> for training
  machine learning models. CodeFlare cut the time it took to execute each
  pipeline from 4 hours to 15 minutes.
  <br />
  <a href="research.ibm.com">Request a demo →</a>
</Callout> */
}
export default Home;
