import { graphql, useStaticQuery } from "gatsby";

export const useAppConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      allAppConfigYaml {
        nodes {
          app_config {
            site_name,
            tagline
          }
        }            
      }
    }
  `);

  console.log("hello", data.allAppConfigYaml);
  
  return data.allAppConfigYaml.nodes[0].app_config;
};