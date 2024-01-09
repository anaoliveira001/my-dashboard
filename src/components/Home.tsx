// Home.tsx
import React, { FC } from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import Chart from "../components/Chart";
import Table from "../components/Table";

const Home: FC = () => {
  return (
    <div>
      <Header title="My Dashboard" />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={6}>
            <Table />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
