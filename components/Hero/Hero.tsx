import styles from "./Hero.module.scss";
import Image from "next/future/image";
import heroImage from "images/hero.webp";
import { ArrowRight } from "@carbon/icons-react";
import { Grid, Column } from "@carbon/react";

const Hero = ({ heading, action }: { heading: string; action: string }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          placeholder="blur"
          priority
          src={heroImage}
          alt="Digital tunnel made of tiny points of light"
        />
      </div>
      <Grid className={styles.grid} fullWidth condensed>
        <Column sm={2} md={5} lg={12}></Column>
        <Column
          as="a"
          href="google.com"
          sm={2}
          md={3}
          lg={4}
          className={styles.card}
        >
          <span className={styles.label}>{action}</span>
          <span className={styles.heading}>{heading}</span>
          <ArrowRight width="24" height="24" className={styles.arrow} />
        </Column>
      </Grid>
    </section>
  );
};

export default Hero;
