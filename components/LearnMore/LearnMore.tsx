import styles from "./LearnMore.module.scss";
import { Grid } from "components/Grid";
import { ReactNode } from "react";
import { ArrowRight } from "@carbon/icons-react";

const LearnMore = ({ children }: { children: ReactNode }) => {
  return (
    <Grid className={styles.wrapper}>
      <p className={styles.heading}>Learn more</p>
      <div className={styles.grid}>{children}</div>
    </Grid>
  );
};

export const LearnMoreCard = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <a href={href || "research.ibm.com"} className={styles.card}>
      {children}
      <ArrowRight height="20" width="20" className={styles.icon} />
    </a>
  );
};
export default LearnMore;
