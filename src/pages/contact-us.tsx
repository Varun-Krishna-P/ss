import * as React from "react"
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import ContactUs from "../components/ContactUs";

const ContactPage: React.FC<PageProps> = () => {
    return(
        <Layout>
            <ContactUs />
        </Layout>
    )
}

export default ContactPage
export const Head: HeadFC = () => <title>Contact Us</title>