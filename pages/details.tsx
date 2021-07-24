import Head from "next/head";

import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";
import PhotoWithCaption from "../components/PhotoWithCaption";
import SectionHeader from "../components/SectionHeader";
import SectionText from "../components/SectionText";

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
        </PageHeader>

        <PhotoWithCaption
          src="/fairmont-olympic-exterior.jpg"
          alt="The Fairmont Olympic Hotel."
          width="1200"
          height="800"
        />

        <SectionHeader>When</SectionHeader>
        <SectionText>
          The wedding will take place on Saturday, 9/25/2021. The ceremony,
          cocktail hour, and reception will be held at the Fairmont Olympic
          Hotel. All locations will be indoors.
        </SectionText>

        <SectionText>
          The ceremony starts at 5 pm in the Spanish Ballroom. This will be
          followed by a cocktail hour in the Spanish Foyer. The dinner reception
          starts at 7 pm back in the Spanish Ballroom.
        </SectionText>

        <SectionHeader>Where</SectionHeader>

        <address className="py-2 select-all">
          411 University St
          <br />
          Seattle, WA 98101
        </address>

        <SectionText>
          The main entrance is on University Street, between 4th and 5th Ave.
        </SectionText>

        <div className="py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1130.9766719197355!2d-122.33446319280567!3d47.60803113900165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd28f7dca2a5499a!2sFairmont%20Olympic%20Hotel%20-%20Seattle!5e0!3m2!1sen!2sus!4v1626320294315!5m2!1sen!2sus"
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
