import styles from "./Hero.module.scss";
import Image from "next/image";
import { ArrowRight, Video } from "@carbon/icons-react";
import { Grid } from "components/Grid";
import { StaticImageData } from "next/image";
import cx from "classnames";

const Hero = ({
  src,
  setLightboxOpen,
}: {
  setLightboxOpen: (open: boolean) => void;
  src: StaticImageData;
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          placeholder="blur"
          priority
          src={src}
          alt="Digital tunnel made of tiny points of light"
        />
      </div>
      <Grid className={styles.grid}>
        <div className={styles.title}>
          Code<span style={{ fontWeight: "bold" }}>Flare</span>
        </div>
        <div className={styles.cta}>
          <p className={styles.pitch}>
            Machine Learning. Distributed and Serverless. Build, scale, and
            unify entire pipelines. Effortlessly.
          </p>
          <div className={styles.actions}>
            <button
              onClick={() => setLightboxOpen(true)}
              className={styles.action}
            >
              <span className={styles.heading}>Watch a demo</span>
              <Video width="24" height="24" className={styles.arrow} />
            </button>
            <a
              href="https://github.com/project-codeflare/codeflare"
              className={cx(styles.action, styles.primary)}
            >
              <span className={styles.heading}>Try CodeFlare</span>

              <ArrowRight width="24" height="24" className={styles.arrow} />
            </a>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default Hero;
