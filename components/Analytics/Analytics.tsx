import Script from "next/script";

const Analytics = () => {
  return (
    <Script
      strategy="afterInteractive"
      id="plausible"
      data-domain="codeflare.dev"
      src="https://plausible.io/js/script.outbound-links.js"
    />
  );
};

export default Analytics;
