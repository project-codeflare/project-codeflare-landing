import { ReactNode, ElementType, Children } from "react";

import styles from "./TwoColumn.module.scss";
import { Grid } from "components/Grid";
import Image, { StaticImageData } from "next/future/image";
import screen from "media/screen.png";

export const TwoColumnFeature = ({
  children,
  icon: Icon,
}: {
  icon: ElementType;
  children: ReactNode;
}) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.iconWrapper}>
        {<Icon className={styles.icon} />}
      </div>
      <p>{children}</p>
    </li>
  );
};

type twoColumnProps = {
  heading: ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  children: ReactNode;
};

export const TwoColumn = ({
  heading,
  imageSrc,
  imageAlt,
  children,
}: twoColumnProps) => {
  return (
    <Grid className={styles.wrapper}>
      <div className={styles.left}>
        <p className={styles.heading}>{heading}</p>
        <ul className={styles.list}>{children}</ul>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.image}
          src={imageSrc}
          placeholder="blur"
          alt={imageAlt}
        />
      </div>
    </Grid>
  );
};

export default TwoColumn;
