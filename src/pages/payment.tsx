import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Payment from "../components/Payment"
import HeadTitle from "../components/HeadTitle"



const PaymentPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <Payment/>
    </Layout>
  )
}

export default PaymentPage

export const Head: HeadFC = () => <HeadTitle text="Payment" />
