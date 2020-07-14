import Head from "next/head";

import Nav from "../components/Nav";
import OutsideLink from "../components/OutsideLink";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";
import SectionHeader from "../components/SectionHeader";
import SectionText from "../components/SectionText";

export default function GiftRegistry() {
  return (
    <div>
      <Head>
        <title>FAQs - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />

      <PageWrapper>
        <PageHeader>
          <PageHeaderText>FAQs</PageHeaderText>
          <PageHeaderSeparator />
        </PageHeader>

        <SectionHeader>RSVPs</SectionHeader>

        <SectionText>
          <strong>When is the RSVP deadline?</strong>
        </SectionText>
        <SectionText>November 1, 2020.</SectionText>

        <SectionText>
          <strong>I lost my RSVP...</strong>
        </SectionText>
        <SectionText>
          Oops, it happens! Send us a message at chhengwoon@gmail.com or give us
          a call/text.
        </SectionText>

        <SectionText>
          <strong>What about COVID-19?</strong>
        </SectionText>
        <SectionText>
          Washington State has a four-phase reopening plan that incrementally
          allows for more in-person activities as long as COVID-19 key
          indicators remain within certain parameters. Seattle is located in
          King County - the county&apos;s latest status can be found{" "}
          <OutsideLink href="https://www.kingcounty.gov/depts/health/covid-19/safe-start.aspx">
            here
          </OutsideLink>
          . If for some reason we need to postpone or cancel, we will add an
          announcement to this site and contact you based on the email provided
          in the RSVP.
        </SectionText>

        <SectionText>
          <strong>Are plus-ones allowed?</strong>
        </SectionText>
        <SectionText>
          We will only be able to accommodate the name(s) formally listed on
          your invitation. Contact us if you have any questions.
        </SectionText>

        <SectionHeader>Day of the Wedding</SectionHeader>

        <SectionText>
          <strong>What time should we arrive?</strong>
        </SectionText>
        <SectionText>
          Doors open at 2:15 pm and the ceremony begins at 3 pm, so you have
          plenty of time to be seated and settle in.
        </SectionText>

        <SectionText>
          <strong>Where do we park?</strong>
        </SectionText>
        <SectionText>
          There is valet parking at the hotel. If staying for the evening, it is
          $41 for 4-8 hours and $48 for 8-12 hours. If staying overnight/12-24
          hours, it is $53.
        </SectionText>
        <SectionText>
          There is also an unattended parking structure half a block to the
          east. As of January 2020, it is $10 if staying for up to 10 hours on
          the weekend, and $20 if staying overnight (anytime after 2 pm until
          8:30 am the next day).
        </SectionText>

        <SectionText>
          <strong>Is the venue accessible?</strong>
        </SectionText>
        <SectionText>
          Yes! The hotel&apos;s accessible public entrance is on 3rd Avenue, and
          there are elevators to travel between floors. Note that the ceremony
          and reception will take place on the 2nd floor in the Northern Lights
          Dome Room, and the cocktail hour will take place on the 1st floor in
          the Polar Bar&apos;s lounge area.
        </SectionText>

        <SectionHeader>Miscellaneous</SectionHeader>

        <SectionText>
          <strong>
            Where should we eat and what should we do while in Seattle?
          </strong>
        </SectionText>
        <SectionText>
          We made{" "}
          <OutsideLink href="https://www.google.com/maps/d/u/0/viewer?mid=1wkitZK6exQQnvNPI1l38dJ3SKzgIcIlJ&ll=47.6259786054647%2C-122.35035185&z=13">
            a map of all our favorite places around the city.
          </OutsideLink>
        </SectionText>

        <SectionText>
          <strong>Do you have a gift registry?</strong>
        </SectionText>
        <SectionText>
          We do not have any gift registries. The best present you could
          possibly give us is to join in person to celebrate!
        </SectionText>

        <SectionText>
          <strong>Is Nicole changing her last name?</strong>
        </SectionText>
        <SectionText>No.</SectionText>
      </PageWrapper>
    </div>
  );
}
