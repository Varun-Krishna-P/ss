import { graphql, useStaticQuery } from "gatsby";

export const useContactConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      allContactYaml {
          nodes {        
            email,
            address,
            app_email,
        }
      }
    }
  `);
  
  return data.allContactYaml.nodes[0];
};