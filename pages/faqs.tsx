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
        <SectionText>September 1, 2021.</SectionText>

        <SectionText>
          <strong>What about COVID-19?</strong>
        </SectionText>
        <SectionText>
          Washington State has fully reopened as of June 30, 2021. We are
          requiring all guests to have gotten a COVID-19 vaccine. If for some
          reason we need to postpone or cancel, we will add an announcement to
          this site and contact you based on the email provided in the RSVP.
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
          Doors open at 4:30 pm, and the ceremony begins at 5 pm so that you
          have plenty of time to be seated and settle in.
        </SectionText>

        <SectionText>
          <strong>Where do we park?</strong>
        </SectionText>
        <SectionText>
          There is valet parking at the hotel. You also have the option to
          self-park in the garage at 5th and Seneca, one block away.
        </SectionText>

        <SectionText>
          <strong>Is the venue accessible?</strong>
        </SectionText>
        <SectionText>
          Yes! The hotel has elevators to travel between floors.
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
          <strong>Where are you registered?</strong>
        </SectionText>
        <SectionText>
          We are saving for our honeymoon and home together, but we do have gift
          registries at{" "}
          <OutsideLink href="https://www.amazon.com/wedding/nicole-woon-jeff-chheng-seattle-september-2021/registry/22OZWY6MOVL68">
            Amazon
          </OutsideLink>{" "}
          and{" "}
          <OutsideLink href="https://www.macys.com/wgl/registry/guest/NICOLE-WOON-JEFF-CHHENG/7282938">
            Macy's
          </OutsideLink>
          . Note that for Macy's site, you will need to disable your ad blocker.
        </SectionText>

        <SectionText>
          <strong>Is Nicole changing her last name?</strong>
        </SectionText>
        <SectionText>No.</SectionText>

        <SectionText>
          <strong>Have any questions?</strong>
        </SectionText>
        <SectionText>Shoot us an email at chhengwoon@gmail.com.</SectionText>
      </PageWrapper>
    </div>
  );
}
