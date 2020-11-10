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
          src="/arctic-club-exterior.jpg"
          alt="The Arctic Club's exterior (note the terra cotta walrus sculptures lining the building!)."
        />

        <SectionHeader>When</SectionHeader>
        <SectionText>
          The wedding will take place on Saturday, 9/25/2021. The ceremony,
          cocktail hour, and reception will be held at the Arctic Club. All
          locations will be indoors.{" "}
        </SectionText>

        <SectionText>
          The ceremony starts at 3 pm in the Northern Lights Dome Room on the
          2nd floor. This will be followed by a cocktail hour in the Polar Bar
          lounge area on the 1st floor. The dinner reception starts at 5 pm back
          in the Northern Lights Dome Room on the 2nd floor. There are both
          stairs and elevators available to travel between floors.
        </SectionText>

        <SectionHeader>Where</SectionHeader>

        <address className="py-2 select-all">
          700 3rd Ave
          <br />
          Seattle, WA 98104
        </address>

        <SectionText>
          The building is at the northeast corner of 3rd Avenue and Cherry
          Street. The main entrance connecting to the lobby is on Cherry Street.
          If you require an accessible entrance, please enter on 3rd Avenue.
        </SectionText>

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
