import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import About from "../components/About"
import HeadTitle from "../components/HeadTitle"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <About/>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <HeadTitle text="Home" />
