import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"

export default function WeddingParty() {
  return (
    <div>
      <Head>
        <title>Wedding Party - Jeff &amp; Nicole</title>
      </Head>

      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Wedding Party</PageHeaderText>
          <PageHeaderSeparator />
          <p>Who are the cool kids?</p>
        </PageHeader>
      </PageWrapper>

      <style jsx>{`
        .hero {
          margin: 0 auto;
          max-width: 800px;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding: 80px 0 25px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  )
}
