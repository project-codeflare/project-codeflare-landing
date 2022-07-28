import styles from "./Grid.module.scss";
import { Grid as CarbonGrid, Column as CarbonColumn } from "@carbon/react";
import cx from "classnames";

export const Grid = (props: any) => {
  const { className, ...otherProps } = props;
  return <CarbonGrid className={cx(styles.grid, className)} {...otherProps} />;
};

export const Column = (props: any) => {
  const { className, ...otherProps } = props;
  return (
    <CarbonColumn className={cx(styles.column, className)} {...otherProps} />
  );
};

export default Grid;
