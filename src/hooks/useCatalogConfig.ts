import { graphql, useStaticQuery } from "gatsby";

export const useCatalogConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      allCatalogYaml(sort: {display_order: ASC}, filter: {is_archived: {eq: false}}) {
        nodes {
            name,
            short_name,
            image_path,
            display_order,
            description,
            benefits,
            price,
            is_archived
        }            
      }
    }
  `);

  
  return data.allCatalogYaml.nodes;
};