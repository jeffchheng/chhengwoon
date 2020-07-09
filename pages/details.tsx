import Head from "next/head";

import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";
import PhotoWithCaption from "../components/PhotoWithCaption";
import SectionHeader from "../components/SectionHeader";

export default function Details() {
  return (
    <div>
      <Head>
        <title>Wedding Details - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />

      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Wedding Details</PageHeaderText>
          <PageHeaderSeparator />
          <p>The when, where, and what to wear.</p>
        </PageHeader>

        <PhotoWithCaption
          src="/arctic_club_polar_bar.jpg"
          alt="The iconic Polar Bar at the Arctic Club."
        />

        <SectionHeader>When</SectionHeader>
        <p>Saturday, 12/12/2020. The reception starts at 3 pm sharp. This will be followed by a cocktail hour, with the dinner reception starting at 5 pm. </p>

        <SectionHeader>Where</SectionHeader>

        <p>
          The wedding ceremony, cocktail hour, and reception will be held at the
          Arctic Club. All locations will be indoors. 
        </p>

        <address className="py-2 select-all">
          700 3rd Ave
          <br />
          Seattle, WA 98104
        </address>

        <div className="py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10760.60788227898!2d-122.332065!3d47.6037346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd400f37346754679!2sThe%20Arctic%20Club%20Seattle%20-%20a%20DoubleTree%20by%20Hilton%20Hotel!5e0!3m2!1sen!2sus!4v1580025213845!5m2!1sen!2sus"
            frameBorder="0"
            height="360"
            style={{
              border: 0,
              display: "block",
              margin: "0 auto",
              width: "90%",
              maxWidth: 600,
            }}
            allowFullScreen={false}
          />
        </div>

        <SectionHeader>What to wear</SectionHeader>
        <p>Formal attire, please.</p>
      </PageWrapper>
    </div>
  );
}
