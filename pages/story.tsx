import Head from "next/head";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";
import SectionText from "../components/SectionText";

export default function OurStory() {
  return (
    <div>
      <Head>
        <title>Our Story - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />

      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Our Story</PageHeaderText>
          <PageHeaderSeparator />
          <p>Learn more about us.</p>
        </PageHeader>
        <SectionText>
          We met on Coffee Meets Bagel after Jeff sent Nicole a woo. Our first date was at a gelato parlor in downtown Seattle. Our third date lasted from dawn to dusk — we went to a cat cafe, strolled through the city, watched &quot;The Shape of Water,&quot; and stuffed our faces at a beer hall. From then on, we knew we had something special.
        </SectionText>
        <SectionText>
          On their second anniversary (December 21, 2019), Jeff and Nicole made their way to Pacific Park at Santa Monica Pier. After going on some rides, they boarded the ferris wheel. Jeff proposed to Nicole as their cabin reached the top during a stunning sunset, and she said yes!
        </SectionText>
        <SectionText>
          We enjoy trying new restaurants, watching TV, playing games, and being silly together. (Having 3-starred all of Overcooked, we know we can overcome anything.) We love going on adventures together and have explored both domestically and internationally (Japan, Greece, Czech Republic, Switzerland), and are excited for our biggest adventure yet!
        </SectionText>
        <div className="flex flex-wrap flex-row justify-center">
          {(() => {
            const images = [];

            for (let i = 0; i <= 26; i++) {
              images.push(
                <img
                className="inline-block object-cover p-4 w-full h-full md:h-auto md:w-1/2 lg:w-1/3"
                  height="600"
                  src={`/story/${i}.jpg`}
                />
              );
            }

            return images;
          })()}
        </div>
      </PageWrapper>
    </div>
  );
}
