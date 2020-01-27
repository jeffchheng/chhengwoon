import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"

export default function WeddingParty() {
  return (
    <div>
      <Head>
        <title>Wedding Party - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Wedding Party</PageHeaderText>
          <PageHeaderSeparator />
          <p>Who are the cool kids?</p>
        </PageHeader>

        <SectionHeader textCenter>🚧 Coming soon. 🚧</SectionHeader>
      </PageWrapper>
    </div>
  )
}
