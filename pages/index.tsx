import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Innovate, Teammates, Path } from "@carbon/pictograms-react";

import Hero from "components/Hero";
import Callout, { CalloutBody, CalloutHeading } from "components/Callout";
import Lightbox from "components/Lightbox";
import { TwoColumn, TwoColumnFeature } from "components/TwoColumn";
import LearnMore, { LearnMoreCard } from "components/LearnMore";

import heroImage from "media/hero.webp";
import videoPoster from "media/poster.jpg";
import videoSrc from "media/codeflare.mp4";

import bundled from "media/bundled.png";

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
        imageSrc={bundled}
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
      <Callout leftText="Use case">
        <CalloutHeading>
          IBM’s CodeFlare significantly cuts the time to automate transfer
          learning tasks for foundation models.
        </CalloutHeading>
        <CalloutBody>
          With just a few lines of code, a data scientist can operationalize
          hundreds of model adaptation pipelines and automate these tasks
          whenever they need to make any changes.
          <br />
          <a href="research.ibm.com">Request a demo →</a>
        </CalloutBody>
      </Callout>
      <LearnMore>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          CodeFlare drastically reduces time to set up, run, and scale
          machine-learning tests
        </LearnMoreCard>
      </LearnMore>
      <Callout background="#393939" leftText="Try CodeFlare">
        <CalloutHeading>
          Sign up to be considered for our beta trial.
        </CalloutHeading>
        <CalloutBody>
          If you are selected, you receive access to our researcher expertise,
          access to hosted CodeFlare with limited free GPU time, and several
          working use cases.
          <br />
          <a href="research.ibm.com">Sign up →</a>
        </CalloutBody>
      </Callout>
    </div>
  );
};

export default Home;
