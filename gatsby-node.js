// gatsby-node.js
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type YogaYaml implements Node {
        title: String!
        short_name: String
        display_order: Int
        duration: String
        description: String
        image_path: String
        benefits: [String]
        video_link: String
        is_archived: Boolean
        price: String
    }
  `)
}