import { Grid, Column } from "components/Grid";
import { ReactNode } from "react";
import styles from "./Callout.module.scss";

type Props = {
  heading: string;
  children: ReactNode;
  style?: any;
};

const Callout = ({ heading, children, ...rest }: Props) => {
  return (
    <div {...rest}>
      <Grid className={styles.wrapper}>
        <Column sm={0} lg={1}></Column>
        <Column sm={4} md={2} lg={5}>
          <span className={styles.left}>{heading}</span>
        </Column>
        <Column sm={4} md={6} lg={9}>
          <p className={styles.right}>{children}</p>
        </Column>
        <Column sm={0} lg={1}></Column>
      </Grid>
    </div>
  );
};

export default Callout;
