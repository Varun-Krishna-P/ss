import { Box, Typography } from "@mui/material";
import Layout from "../components/layout";
import React from "react";
import { HeadFC } from "gatsby";
import PageTitle from "../components/PageTitle";
import { useAppConfig } from "../hooks/useAppConfig";
import SlokamText from "../components/SlokamText";
import YogaGrid from "../components/YogaGrid";

const YogaPage = () => {
  const { yoga_slokam} = useAppConfig();
  return (
    <Layout>
        <PageTitle title="Yoga" />
      <SlokamText text={yoga_slokam} />
      <Box>
      <Typography variant="body1">
        Here you can find various resources and information about Yoga.
      </Typography>
      </Box>
      <Box>
        <YogaGrid />
      </Box>
    </Layout>
  );
};
export default YogaPage;
export const Head: HeadFC = () => <title>Yoga Page</title>;