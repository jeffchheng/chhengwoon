import Head from "next/head";

import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";
import PhotoWithCaption from "../components/PhotoWithCaption";
import SectionHeader from "../components/SectionHeader";
import SectionText from "../components/SectionText";

type OutsideLinkProps = {
  href: string;
  children: string;
};

function OutsideLink(props: OutsideLinkProps) {
  return (
    <a
      className="text-purple-400 underline"
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </a>
  );
}

export default function Travel() {
  return (
    <div>
      <Head>
        <title>Travel Information - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />

      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Travel Information</PageHeaderText>
          <PageHeaderSeparator />
        </PageHeader>

        <PhotoWithCaption
          src="/seattle_skyline.jpg"
          alt="The beautiful Seattle skyline from Kerry Park."
        />

        <SectionHeader>Getting to Seattle</SectionHeader>
        <SectionText>
          Sea-Tac (SEA) is the region&apos;s major airport.
        </SectionText>
        <SectionText>
          We recommend using{" "}
          <OutsideLink href="https://www.google.com/flights?hl=en#flt=LAX.SEA.2020-12-11*SEA.LAX.2020-12-13;c:USD;e:1;sd:1;t:f">
            Google Flights
          </OutsideLink>{" "}
          to find and compare the cheapest airfare. We generally fly Alaska
          Airlines.
        </SectionText>

        <SectionHeader>Traveling to Downtown Seattle</SectionHeader>

        <SectionText>
          When leaving the airport, there are several travel options to get to
          downtown Seattle: rideshare (like Lyft and Uber), taxi, and the Link.
          After baggage claim, follow the marked signs to go up the escalator
          and across the skybridge to the 4th floor of the airport parking
          garage.
        </SectionText>

        <SectionText>
          If you use a{" "}
          <OutsideLink href="https://www.portseattle.org/sea-tac/ground-transportation/app-based-rideshare">
            rideshare app
          </OutsideLink>
          , there are designated pick-up spots on the 3rd floor of the airport
          parking garage.
        </SectionText>

        <SectionText>
          There are also{" "}
          <OutsideLink href="https://www.portseattle.org/sea-tac/ground-transportation/taxis">
            taxis
          </OutsideLink>{" "}
          located on the 3rd floor of the airport parking garage.
        </SectionText>

        <SectionText>
          For the most affordable option, you can follow signs to the{" "}
          <OutsideLink href="https://www.soundtransit.org/ride-with-us/popular-destinations/sea-tac-airport">
            Link Light Rail
          </OutsideLink>
          . You can either walk along the corridor (~2-3 blocks in length) or
          look for the free courtesy shuttle to transport you from the airport
          parking garage to the Link station. Link trains run every 6, 10 or 15
          minutes depending on the time of day. Service is available from 5 am
          to 1 am. Monday through Saturday, and from 6 am to midnight on Sunday
          and holidays. There are ticket vending machines located on the floor
          below the platform. Adult fares range from $2.25 to $3.25 depending on
          how far you travel. The closest stop to the Arctic Club is the{" "}
          <OutsideLink href="https://www.soundtransit.org/ride-with-us/stations/link-light-rail-stations/pioneer-square-station">
            Pioneer Square Station
          </OutsideLink>
          .
        </SectionText>

        <SectionHeader>Staying in Seattle</SectionHeader>

        <SectionText>
          We recommend staying at the Arctic Club itself! Make reservations
          directly through{" "}
          <OutsideLink href="https://secure3.hilton.com/en_US/dt/reservation/book.htm?inputModule=HOTEL&ctyhocn=SEAACDT&groupCode=CDTCHW&arrival=20210923&departure=20210927&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT">
            Hilton&apos;s website
          </OutsideLink>
          .
        </SectionText>
        <ul className="list-disc list-outside px-10">
          <li>The group code is CDTCHW.</li>
          <li>
            Check in as early as September 23, 2021, and check out as late as
            September 27, 2021.
          </li>
          <li>
            For a room in our room block, which is on the same floor as the
            ceremony/reception, you&apos;ll need to pick the $219 king bed
            option.
          </li>
          <li>The cutoff date to make reservations is August 28, 2021.</li>
          <li>
            If you have any issues reserving rooms, you may call Wedding and
            Special Event Executive Emily Maxwell-Mitchell directly at
            206-631-8041.
          </li>
        </ul>

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

        <SectionText>
          There are also plenty of{" "}
          <OutsideLink href="https://www.google.com/travel/hotels/Seattle?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271059%2C4274032%2C4291318%2C4305595%2C4308216%2C4311408%2C4314846%2C4315873%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4340162%2C4270859%2C4284970%2C4291517%2C4292955%2C4307996&hl=en&gl=us&un=1&q=hotels%20seattle&rp=EK2Co5e5rcvLJhDCp-WCzpzv9rsBEM2Ai5KP4JiFTxCQneXL5qzPijQ4AUAASAI&ictx=1&ved=2ahUKEwiVm-TEiKPnAhXjLX0KHWnFCTwQtDV6BAgLEAU&hrf=CgUI4QEQACIDVVNEKhYKBwjkDxAMGAsSBwjkDxAMGA0YAiABsAEAWAFoAYoBKAoSCWnlXKbHy0dAEbzE08EEll7AEhIJsMVoAEHPR0ARvMTTFaOUXsCaAQkSB1NlYXR0bGWiARMKCC9tLzBkOWpyEgdTZWF0dGxlqgEKCgIIIRICCAgYAaoBCgoCCBISAghoGAGqAQcKAwihAhgAqgEfCgIIHBICCFESAghYEgIIRxICCDYSAghNEgMInQIYAaoBFwoCCCUSAgh1EgMIoAISAgh5EgIIehgBqgEOCgIIERICCCoSAgh_GAGqASQKAgguEgIIVhIDCIMBEgIISxICCAwSAghTEgMIiQESAggnGAGqAQ4KAgg1EgIICxICCBAYAZIBAiAB&ap=KigKEglp5Vymx8tHQBG8xNPBBJZewBISCbDFaABBz0dAEbzE0xWjlF7AMAJapgIKBQjhARAAIgNVU0QqFgoHCOQPEAwYCxIHCOQPEAwYDRgCIAGwAQBYAWgBigEoChIJfNkKCQrMR0ARvMTTGSWWXsASEgmf30Vag89HQBG8xNNtw5RewJoBCRIHU2VhdHRsZaIBEwoIL20vMGQ5anISB1NlYXR0bGWqAQoKAgghEgIICBgBqgEKCgIIEhICCGgYAaoBBwoDCKECGACqAR8KAggcEgIIURICCFgSAghHEgIINhICCE0SAwidAhgBqgEXCgIIJRICCHUSAwigAhICCHkSAgh6GAGqAQ4KAggREgIIKhICCH8YAaoBJAoCCC4SAghWEgMIgwESAghLEgIIDBICCFMSAwiJARICCCcYAaoBDgoCCDUSAggLEgIIEBgBkgECIAE">
            hotels
          </OutsideLink>{" "}
          downtown, from luxury suites to budget options, within walking
          distance of the Arctic Club. We recommend staying at locations north
          of Cherry Street. Some suggestions:
        </SectionText>

        <ul className="list-disc list-outside px-10">
          <li>
            <OutsideLink href="http://www.innatthemarket.com/">
              Inn at the Market
            </OutsideLink>{" "}
            (in the heart of Pike Place Market)
          </li>
          <li>
            <OutsideLink href="https://www.palladianhotel.com/">
              Kimpton Palladian
            </OutsideLink>
          </li>
          <li>
            <OutsideLink href="https://www.thompsonhotels.com/hotels/washington/seattle/thompson-seattle">
              Thompson Seattle
            </OutsideLink>
          </li>
          <li>
            <OutsideLink href="https://www.fairmont.com/seattle/">
              Fairmont Olympic
            </OutsideLink>
          </li>
        </ul>
      </PageWrapper>
    </div>
  );
}
