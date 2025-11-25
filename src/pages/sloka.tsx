import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import React from "react";
import CatalogGrid from "../components/CatalogGrid";
import { Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import SlokamText from "../components/SlokamText";
import { useAppConfig } from "../hooks/useAppConfig";

const SlokaPage: React.FC<PageProps> = () => {
  const { sanskrit_slokam } = useAppConfig();
  return (
    <Layout>
      <PageTitle title="Slokam" />
      <SlokamText text={sanskrit_slokam} />
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Explore our diverse catalog of offerings, thoughtfully curated to
          enrich your journey.
        </Typography>
      </Box>
      <CatalogGrid />
    </Layout>
  );
};
export default SlokaPage;
export const Head: HeadFC = () => <title>Sloka Page</title>;
