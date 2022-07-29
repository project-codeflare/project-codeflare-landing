import styles from "./Grid.module.scss";
import cx from "classnames";

export const Grid = (props: any) => {
  const { className, ...otherProps } = props;
  return <div className={cx(styles.grid, className)} {...otherProps} />;
};

export const Column = (props: any) => {
  const { className, ...otherProps } = props;
  return <div className={cx(styles.column, className)} {...otherProps} />;
};

export default Grid;
