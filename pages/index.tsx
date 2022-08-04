import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Innovate, Spaceship, Streamline } from "@carbon/pictograms-react";

import Hero from "components/Hero";
import Callout, { CalloutBody, CalloutHeading } from "components/Callout";
import Lightbox from "components/Lightbox";
import { TwoColumn, TwoColumnFeature } from "components/TwoColumn";
import LearnMore, { LearnMoreCard } from "components/LearnMore";

import heroImage from "media/hero.png";
import videoPoster from "media/poster.jpg";
import videoSrc from "media/codeflare.mp4";

import screenshots from "media/screenshots.png";

const Home: NextPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
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
        imageSrc={screenshots}
        imageAlt="CodeFlare dashboard screenshot"
        heading="Empower your AI and ML teams to innovate where it matters. We‘ll
    handle the rest."
      >
        <TwoColumnFeature icon={Streamline}>
          Minimize the effort and skills needed to scale your AI and ML
        </TwoColumnFeature>
        <TwoColumnFeature icon={Innovate}>
          Access the latest innovations and experience in running data science
          platforms
        </TwoColumnFeature>
        <TwoColumnFeature icon={Spaceship}>
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
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-for-foundation-models">
          IBM’s CodeFlare significantly cuts the time to automate transfer
          learning tasks for foundation models
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/what-are-foundation-models">
          What are foundation models?
        </LearnMoreCard>
        <LearnMoreCard href="https://medium.com/codeflare/aix360-meets-codeflare-how-to-scale-explainability-using-codeflare-pipelines-c6bd8a7b0090">
          AIX360 meets CodeFlare: How to scale explainability using CodeFlare
          pipelines
        </LearnMoreCard>
        <LearnMoreCard href="https://medium.com/codeflare/tuning-hyper-parameters-with-codeflare-pipelines-13b884c8336f">
          Tuning hyper-parameters with CodeFlare Pipelines
        </LearnMoreCard>
        <LearnMoreCard href="https://medium.com/codeflare/fit-and-score-multiple-classifiers-with-codeflare-pipeline-6e58fa5b2c52">
          Fit and score multiple classifiers with CodeFlare Pipeline
        </LearnMoreCard>
        <LearnMoreCard href="https://www.youtube.com/watch?v=L7ZmnFV8fzc&feature=emb_title">
          Ray Summit 2021 — Scaling and Unifying SciKit Learn and Spark
          Pipelines using Ray
        </LearnMoreCard>
        <LearnMoreCard href="https://www.youtube.com/watch?v=nox9R0dK0E8&feature=emb_title">
          Ray Summit 2021 — Anomaly Detection on Remote Sensing with Ray +
          Horovod
        </LearnMoreCard>
        <LearnMoreCard href="https://www.youtube.com/watch?v=0SRk5lfaYYE">
          Ray Summit 2021 — Powering open data hub with Ray
        </LearnMoreCard>
      </LearnMore>
      <Callout background="#393939" leftText="Try CodeFlare">
        <CalloutHeading>
          Sign up to be considered for our beta trial.
        </CalloutHeading>
        <CalloutBody>
          If you are selected, you receive access to our researcher expertise,
          access to hosted CodeFlare with free GPU time, and several examples to
          get you started.
          <br />
          <a href="research.ibm.com">Sign up →</a>
        </CalloutBody>
      </Callout>
    </>
  );
};

export default Home;
