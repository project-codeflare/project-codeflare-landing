import type { NextPage } from "next";
import { useState } from "react";
import { Innovate, Spaceship, Streamline } from "@carbon/pictograms-react";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";

import Hero from "components/Hero";
import Head from "components/Head";
import Callout, { CalloutBody, CalloutHeading } from "components/Callout";
import Lightbox from "components/Lightbox";
import { TwoColumn, TwoColumnFeature } from "components/TwoColumn";
import LearnMore, { LearnMoreCard } from "components/LearnMore";

import heroImage from "media/hero.jpg";
import videoSrc from "media/codeflare.mp4";

import screenshots from "media/screenshots.webp";

const Home: NextPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <Head />
      <Hero setLightboxOpen={setLightboxOpen} src={heroImage} />
      <Lightbox open={lightboxOpen} setOpen={setLightboxOpen}>
        <video
          onEnded={() => setLightboxOpen(false)}
          onPlay={() => {
            if ((window as any).plausible) {
              (window as any).plausible("Video played");
            }
          }}
          preload="auto"
          autoPlay
          playsInline
          controls
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Lightbox>
      <TwoColumn
        imageSrc={screenshots}
        imageAlt="CodeFlare dashboard screenshot"
        heading="Let your AI/ML teams focus on innovation. CodeFlare handles the infrastructure."
      >
        <TwoColumnFeature icon={Streamline}>
          CodeFlare is an open-source, cloud-native platform for next generation
          AI and ML development
        </TwoColumnFeature>
        <TwoColumnFeature icon={Innovate}>
          Minimize the effort and skills needed to scale your AI and ML
        </TwoColumnFeature>
        <TwoColumnFeature icon={Spaceship}>
          CodeFlare is built on OpenShift: deploy anywhere, from on-prem to
          cloud, and integrate easily with other cloud-native ecosystems.
        </TwoColumnFeature>
      </TwoColumn>
      <Callout leftText="Use case">
        <CalloutHeading>
          Highlight: Foundation models with CodeFlare
        </CalloutHeading>
        <CalloutBody>
          <p>
            CodeFlare accelerates the automation of transfer learning tasks for
            foundation models. Today, businesses can use it to fully automate
            their foundation model pipelines. And with the benefits of hybrid
            cloud, your data never has to leave a secure environment.
          </p>
          <a href="https://www.ibm.com/it-infrastructure/us-en/resources/campaignmail/mail/us-en/CodeFlare/">
            Learn more →
          </a>
        </CalloutBody>
      </Callout>
      <LearnMore>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-ml-experiments">
          An Introduction to CodeFlare
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/codeflare-for-foundation-models">
          Update: CodeFlare is now refined for foundation models
        </LearnMoreCard>
        <LearnMoreCard href="https://research.ibm.com/blog/what-are-foundation-models">
          What are foundation models?
        </LearnMoreCard>
        <LearnMoreCard href="https://medium.com/codeflare/aix360-meets-codeflare-how-to-scale-explainability-using-codeflare-pipelines-c6bd8a7b0090">
          CodeFlare Example: Scaling Explainable AI
        </LearnMoreCard>
        <LearnMoreCard href="https://medium.com/codeflare/tuning-hyper-parameters-with-codeflare-pipelines-13b884c8336f">
          CodeFlare Example: Tuning hyper-parameters
        </LearnMoreCard>
        <LearnMoreCard href="https://medium.com/codeflare/fit-and-score-multiple-classifiers-with-codeflare-pipeline-6e58fa5b2c52">
          CodeFlare Example: Fitting and scoring multiple classifiers
        </LearnMoreCard>
        <LearnMoreCard href="https://www.youtube.com/watch?v=L7ZmnFV8fzc&feature=emb_title">
          From Ray Summit &apos;21: Scaling and Unifying SciKit Learn and Spark
          Pipelines with Ray
        </LearnMoreCard>
        <LearnMoreCard href="https://www.youtube.com/watch?v=nox9R0dK0E8&feature=emb_title">
          From Ray Summit &apos;21: Anomaly Detection on Remote Sensing with Ray
          + Horovod
        </LearnMoreCard>
        <LearnMoreCard href="https://www.youtube.com/watch?v=0SRk5lfaYYE">
          From Ray Summit &apos;21: Powering Open Data Hub with Ray
        </LearnMoreCard>
      </LearnMore>
      <Callout background="#393939" leftText="Try CodeFlare">
        <CalloutHeading>
          Curious? Request a demo, or sign up to be considered for our beta
          trial
        </CalloutHeading>
        <CalloutBody>
          <p>If selected, you’ll get access to:</p>
          <ul>
            <li>CodeFlare, with free GPU time</li>
            <li>the research team that worked on CodeFlare</li>
            <li>coding examples to help you get started</li>
          </ul>
          <a href="https://www.ibm.com/it-infrastructure/us-en/resources/campaignmail/mail/us-en/CodeFlare/">
            Apply →
          </a>
        </CalloutBody>
      </Callout>
    </>
  );
};

export default Home;
