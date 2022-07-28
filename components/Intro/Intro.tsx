import { Grid, Column } from "components/Grid";
import { ReactNode } from "react";
import styles from "./Intro.module.scss";

type Props = {
  children: ReactNode;
};

const Intro = ({ children }: Props) => {
  return (
    <div className={styles.con}>
      <Grid className={styles.wrapper}>
        <Column sm={0} md={1}></Column>
        <Column sm={4} lg={8}>
          {children}
        </Column>
        <Column sm={0} md={1}></Column>
      </Grid>
    </div>
  );
};

export default Intro;
