import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import React from "react";
import CatalogGrid from "../components/CatalogGrid";
import { Box, Typography } from "@mui/material";


const CatalogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Box>
        <Typography variant="h3" component="h1" sx={{fontWeight: 'bold', mb: 4, color:"primary.main"}} >
          Catalog
        </Typography>
      </Box>
      <Box sx={{mb: 4}}>
        <Typography variant="body1" sx={{color: 'text.secondary'}}>
          Explore our diverse catalog of offerings, thoughtfully curated to enrich your journey.  This is just a sample catalot. Whatever you name it we have it.
        </Typography>
      </Box>
      <Box sx={{mt: 4}}>
        <Typography variant="h6" component="h6" sx={{fontWeight: 'bold', mb: 2, color:"primary.main"}} >
          More coming soon...
        </Typography>
      </Box>
      <CatalogGrid />
    </Layout>
  );
}
export default CatalogPage;
export const Head: HeadFC = () => <title>Catalog Page</title>