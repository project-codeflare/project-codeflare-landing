import styles from "./Hero.module.scss";
import Image from "next/future/image";
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
        <div className={styles.title}>CodeFlare</div>
        <div className={styles.cta}>
          <p className={styles.pitch}>
            Seamlessly set up, run, and scale your AI
            <br />
            and ML from your laptop to the cloud.
          </p>
          <div className={styles.actions}>
            <button
              onClick={() => setLightboxOpen(true)}
              className={styles.action}
            >
              <span className={styles.heading}>Watch demo</span>
              <span className={styles.label}>Learn more</span>
              <Video width="24" height="24" className={styles.arrow} />
            </button>
            <a className={cx(styles.action, styles.primary)}>
              <span className={styles.heading}>Try Codeflare</span>
              <span className={styles.label}>Sign of for the beta</span>
              <ArrowRight width="24" height="24" className={styles.arrow} />
            </a>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default Hero;
