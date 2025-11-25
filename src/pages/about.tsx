import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import About from "../components/About";
import HeadTitle from "../components/HeadTitle";


const AboutPage: React.FC<PageProps> = () => {

    return(
        <Layout>
            <About />
        </Layout>
    )
}

export default AboutPage;
export const Head: HeadFC = () => <HeadTitle text="About Us" />