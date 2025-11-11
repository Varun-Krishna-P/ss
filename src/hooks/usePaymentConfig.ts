import { graphql, useStaticQuery } from "gatsby";

export const usePaymentConfig = () => {
    const data = useStaticQuery(graphql`
    query {
      allPaymentYaml {
          nodes {        
            perClass,
            tenClass,
            perMonth
        }
      }
    }
  `);                   
    return data.allPaymentYaml.nodes[0];
}