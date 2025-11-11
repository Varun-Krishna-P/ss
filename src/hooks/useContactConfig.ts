import { graphql, useStaticQuery } from "gatsby";

export const useContactConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      allContactYaml {
          nodes {        
            email,
            address
        }
      }
    }
  `);
  
  return data.allContactYaml.nodes[0];
};