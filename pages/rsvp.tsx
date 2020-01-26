import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"

export default function RSVP() {
  return (
    <div>
      <Head>
        <title>RSVP - Jeff &amp; Nicole</title>
      </Head>
      
      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>RSVP</PageHeaderText>
          <p>Let us know you&apos;re coming.</p>
        </PageHeader>

        <SectionHeader className="text-center">🚧 Coming soon. 🚧</SectionHeader>
      </PageWrapper>
    </div>
  )
}
