import { Grid } from "components/Grid";
import { ReactNode } from "react";
import styles from "./Callout.module.scss";

type Props = {
  leftText: string;
  children: ReactNode;
  background?: string;
};

const Callout = ({
  leftText,
  children,
  background = "#002d9c",
  ...rest
}: Props) => {
  return (
    <div style={{ background }} className={styles.wrapper} {...rest}>
      <Grid style={{ background }}>
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
  return <div className={styles.body}>{children}</div>;
};

export default Callout;
