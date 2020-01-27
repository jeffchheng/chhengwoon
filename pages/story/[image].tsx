import Head from "next/head"

import Nav from "../../components/Nav"
import PageHeader from "../../components/PageHeader"
import PageHeaderSeparator from "../../components/PageHeaderSeparator"
import PageHeaderText from "../../components/PageHeaderText"
import PageWrapper from "../../components/PageWrapper"

import { useRouter } from "next/router"

export default function OurStory() {
  const router = useRouter()

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
          <p>Photo.</p>
        </PageHeader>
        <div>
          <img
            className="mx-auto"
            src={`/story/${router.query.image}.jpg`}
            onError={() => router.replace("/story")} />
        </div>
      </PageWrapper>
    </div>
  )
}
