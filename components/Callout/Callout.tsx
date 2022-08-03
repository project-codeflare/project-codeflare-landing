import { Grid, Column } from "components/Grid";
import { ReactNode } from "react";
import styles from "./Callout.module.scss";

type Props = {
  leftText: string;
  children: ReactNode;
  style?: any;
};

const Callout = ({ leftText, children, ...rest }: Props) => {
  return (
    <div className={styles.wrapper} {...rest}>
      <Grid>
        <div className={styles.left}>
          <span className={styles.heading}>{leftText}</span>
        </div>
        <div className={styles.right}>{children}</div>
      </Grid>
    </div>
  );
};

export const CalloutHeading = ({ children }: { children: ReactNode }) => {
  return <span className={styles.heading}>{children}</span>;
};

export const CalloutBody = ({ children }: { children: ReactNode }) => {
  return <p className={styles.body}>{children}</p>;
};

export default Callout;
