import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>IBM Research | CodeFlare</title>
      <meta name="description" content="CodeFlare by IBM Research" />
      <meta
        name="description"
        content="Let your AI and ML teams innovate where it matters. We‘ll handle the rest."
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://codeflare.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="IBM Research | CodeFlare" />
      <meta
        property="og:description"
        content="Let your AI and ML teams innovate where it matters. We‘ll handle the rest."
      />
      <meta property="og:image" content="https://i.imgur.com/keyAdnw.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="codeflare.dev" />
      <meta property="twitter:url" content="https://codeflare.dev" />
      <meta name="twitter:title" content="IBM Research | CodeFlare" />
      <meta
        name="twitter:description"
        content="Let your AI and ML teams innovate where it matters. We‘ll handle the rest."
      />
      <meta
        name="twitter:image"
        content="https://i.imgur.com/keyAdnw.png"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
