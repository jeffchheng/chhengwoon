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
        </PageHeader>
        <SectionText>
          We met on Coffee Meets Bagel after Jeff sent Nicole a woo. Our first
          date was at a gelato parlor in downtown Seattle, followed by a second
          date sampling sushi rolls. Our third date lasted from dawn to dusk —
          we went to a cat cafe, strolled through the city, watched &quot;The
          Shape of Water,&quot; and stuffed our faces at a beer hall. From then
          on, we knew we had something special.
        </SectionText>
        <SectionText>
          On our second anniversary (December 21, 2019), we made our way to
          Pacific Park at Santa Monica Pier in Nicole&apos;s hometown. After
          breezing over the boardwalk on the West Coaster and swirling around on
          Inkie&apos;s Scrambler, we boarded the Pacific Wheel (the world’s only
          solar-powered Ferris wheel). Jeff proposed to Nicole as their private
          cabin reached the top during a stunning sunset, and she said yes!
        </SectionText>
        <SectionText>
          We enjoy trying new restaurants, watching TV, playing games, and being
          silly together. (Having 3-starred all of the Overcooked video game, we
          know we can overcome anything.) We love going on adventures together
          and have explored both domestically and internationally (Canada,
          Japan, Greece, Czech Republic, Switzerland), and are excited for our
          biggest adventure yet!
        </SectionText>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2">
          {(() => {
            const images = [];

            for (let i = 0; i <= 26; i++) {
              images.push(<img src={`/story/${i}.jpg`} />);
            }

            return images;
          })()}
        </div>
      </PageWrapper>
    </div>
  );
}
