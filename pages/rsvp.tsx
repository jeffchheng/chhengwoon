import Head from "next/head";

import Nav from "../components/Nav";
import OutsideLink from "../components/OutsideLink";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";
import PhotoWithCaption from "../components/PhotoWithCaption";
import SectionText from "../components/SectionText";

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
        </PageHeader>

        <PhotoWithCaption
          src="/arctic_club_polar_bar.jpg"
          alt="The iconic Polar Bar at the Arctic Club."
        />

        <SectionText>
          Please RSVP by August 15, 2021, using{" "}
          <OutsideLink href="https://docs.google.com/forms/d/e/1FAIpQLSczb8Bz0NAQGvNWjzdewFbkfl7H6JTg0cakaWY7jn1Gfw9oVQ/viewform">
            this form.
          </OutsideLink>
        </SectionText>
      </PageWrapper>
    </div>
  );
}
