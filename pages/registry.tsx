import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"

export default function GiftRegistry() {
  return (
    <div>
      <Head>
        <title>Gift Registry</title>
      </Head>

      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Gift Registry</PageHeaderText>
        </PageHeader>
      </PageWrapper>
    </div>
  )
}
