import type { NextPage } from "next";
import Head from "next/head";
import Hero from "components/Hero";
import Callout from "components/Callout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CodeFlare</title>
        <meta name="description" content="CodeFlare by IBM Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero action="Request a demo" heading="Try CodeFlare" />
      <Callout heading="CodeFlare">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        sapiente maiores ullam, <strong>enim minus dolorum</strong>. Beatae
        sequi, distinctio ducimus sed excepturi cupiditate alias aliquid maxime
        sapiente sunt officia dolores debitis.
      </Callout>
    </div>
  );
};

export default Home;
