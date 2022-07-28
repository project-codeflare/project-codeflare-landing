import styles from "./TwoColumn.module.scss";
import { Grid, Column } from "components/Grid";

const TwoColumn = () => {
  return (
    <Grid>
      <Column sm={4} lg={8}>
        <ul>
          <li>
            Let us run Ray for you, hosted on cloud infrastructure fully managed
            by us, so that you can focus on what you do best — ship great
            products.
          </li>
          <li>
            Anyscale automatically scales your infrastructure and clusters up or
            down to meet the dynamic demands of your workloads.
          </li>
          <li>
            Keep tabs on the costs tied to jobs, clusters, and users in a single
            intuitive UI.
          </li>
        </ul>
      </Column>
      <Column sm={4} lg={8}></Column>
    </Grid>
  );
};

export default TwoColumn;
