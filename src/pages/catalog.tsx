import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import React from "react";
import CatalogGrid from "../components/CatalogGrid";


const CatalogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Catalog Page</h1>
      <p>Welcome to the catalog page!</p>
      <CatalogGrid />
    </Layout>
  );
}
export default CatalogPage;
export const Head: HeadFC = () => <title>Catalog Page</title>