import { graphql, useStaticQuery } from "gatsby";

export const useCatalogConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      allCatalogYaml {
        nodes {
            name,
            short_name,
            image_path,
            description,
            price
        }            
      }
    }
  `);

  
  return data.allCatalogYaml.nodes;
};