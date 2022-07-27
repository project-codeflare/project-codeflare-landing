import { Grid, Column } from "@carbon/react";
import { ReactNode } from "react";
import styles from "./Callout.module.scss";

type Props = {
  heading: string;
  children: ReactNode;
};

const Callout = ({ heading, children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Grid className={styles.grid}>
        <Column sm={0} lg={1}></Column>
        <Column className={styles.column} sm={4} md={2} lg={5}>
          <span className={styles.left}>{heading}</span>
        </Column>
        <Column className={styles.column} sm={4} md={6} lg={9}>
          <p className={styles.right}>{children}</p>
        </Column>
        <Column sm={0} lg={1}></Column>
      </Grid>
    </div>
  );
};

export default Callout;
