import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import React from "react";
import CatalogGrid from "../components/CatalogGrid";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const CatalogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Box sx={{mb: 4}}>
        <Container>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}
            >
              Slokam
            </Typography>
            <Button variant="outlined" color="primary" href="/" startIcon={<HomeIcon />}>
              Home
            </Button>
          </Stack>
        </Container>
      </Box>
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
export default CatalogPage;
export const Head: HeadFC = () => <title>Catalog Page</title>;
