import { ReactNode } from "react";
import { Innovate, Teammates, Path } from "@carbon/pictograms-react";

import styles from "./TwoColumn.module.scss";
import { Grid } from "components/Grid";
import Image from "next/future/image";
import screen from "media/screen.png";

const ListItem = ({
  children,
  icon,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.iconWrapper}>{icon}</div>
      <p>{children}</p>
    </li>
  );
};

const TwoColumn = () => {
  return (
    <Grid className={styles.wrapper}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Empower your AI and ML teams to innovate where it matters. We‘ll
          handle the rest.
        </p>
        <ul className={styles.list}>
          <ListItem icon={<Path className={styles.icon} />}>
            Minimize the effort and skills needed to scale your AI and ML
          </ListItem>
          <ListItem icon={<Innovate className={styles.icon} />}>
            Access the latest innovations and experience in running data science
            platforms
          </ListItem>
          <ListItem icon={<Teammates className={styles.icon} />}>
            Run your workloads anywhere.
          </ListItem>
        </ul>
      </div>
      <Image
        className={styles.image}
        src={screen}
        placeholder="blur"
        alt="Screen shot of Ray dashboard"
      />
    </Grid>
  );
};

export default TwoColumn;
