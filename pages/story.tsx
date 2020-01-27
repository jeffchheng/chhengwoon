import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"

export default function OurStory() {
  return (
    <div>
      <Head>
        <title>Our Story - Jeff &amp; Nicole</title>
      </Head>

      <Nav />

      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Our Story</PageHeaderText>
          <PageHeaderSeparator />
          <p>Learn more about us.</p>
        </PageHeader>
      </PageWrapper>
    </div>
  )
}
