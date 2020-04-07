import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"

export default function RSVP() {
  return (
    <div>
      <Head>
        <title>RSVP - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>
      
      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>RSVP</PageHeaderText>
          <PageHeaderSeparator />
          <p>Let us know you&apos;re coming.</p>
        </PageHeader>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSczb8Bz0NAQGvNWjzdewFbkfl7H6JTg0cakaWY7jn1Gfw9oVQ/viewform?embedded=true"
          width="640"
          height="1280"
          frameBorder="0"
          style={{
            border: 0,
            display: "block",
            margin: "0 auto",
          }}
        >
          Loading...
        </iframe>
      </PageWrapper>
    </div>
  )
}
