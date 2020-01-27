import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"

export default function GiftRegistry() {
  return (
    <div>
      <Head>
        <title>Gift Registry - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Gift Registry</PageHeaderText>
          <PageHeaderSeparator />
          <p>Gifts are hard. Wondering what to get us?</p>
        </PageHeader>

        <SectionHeader className="text-center">🚧 Coming soon. 🚧</SectionHeader>
      </PageWrapper>
    </div>
  )
}
