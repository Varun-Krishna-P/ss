import { graphql, useStaticQuery } from "gatsby"


export const useActiveYogaList = () => {
    const data = useStaticQuery(graphql`
    query {
      allYogaYaml(sort: {display_order: ASC}, filter: {is_archived: {eq: false}}) {
        nodes {          
          title
          short_name
          display_order
          duration
          description
          image_path
          benefits
          video_link
          is_archived
          price
        }
      }
    }
  `);

  return data.allYogaYaml.nodes;
}