import Head from "next/head"
import Link from "next/link"
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
        <div className="w-full text-center">
          {(() => {
            const images = []

            for (let i = 0; i <= 26; i++ ) {
              images.push(
                <Link key={`img-${i}`} href={`/story/${i}`}>
                  <a>
                    <img
                      className="inline-block object-cover p-4 w-full md:w-1/2 lg:w-1/3 h-full md:h-64"
                      src={`/story/${i}.jpg`} />
                  </a>
                </Link>,
              )
            }

            return images
          })()}
        </div>
      </PageWrapper>
    </div>
  )
}
