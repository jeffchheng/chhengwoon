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
        <title>Travel Information - Jeff & Nicole's Wedding</title>
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
          width="2047"
          height="717"
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
          to find and compare airfare. We generally fly Alaska Airlines.
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
          minutes depending on the time of day. Service is generally available
          from 5 am to 1 am Monday through Saturday, and from 6 am to midnight
          on Sunday and holidays. There are ticket vending machines located on
          the floor below the platform. Adult fares range from $2.25 to $3.25
          depending on how far you travel. The closest stop to the Fairmont
          Olympic is the{" "}
          <OutsideLink href="https://www.soundtransit.org/ride-with-us/stops-stations/university-street-station">
            University Street Station
          </OutsideLink>
          .
        </SectionText>

        <SectionHeader>Staying in Seattle</SectionHeader>

        <SectionText>
          We recommend staying at the Fairmont Olympic itself!
        </SectionText>
        <ul className="list-disc list-outside px-10">
          <li>
            You can make reservations within our room block{" "}
            <OutsideLink href="https://book.passkey.com/go/WoonChhengWedding">
              using this link
            </OutsideLink>
            , or by calling 888-363-5022 and referencing the Woon-Chheng
            Wedding.
          </li>
          <li>
            Check in as early as Wed, September 22, 2021, and check out as late
            as Wed, September 29, 2021.
          </li>
          <li>
            For a 2-person room, rates start at $275 per night for a deluxe
            king. For a 4-person room, rates start at $305 per night for a
            deluxe two double.
          </li>
        </ul>

        <div className="py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.9319648209193!2d-122.3360642480622!3d47.60801257908253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3fa957b7f%3A0xdd28f7dca2a5499a!2sFairmont%20Olympic%20Hotel%20-%20Seattle!5e0!3m2!1sen!2sus!4v1626836884629!5m2!1sen!2sus"
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
          distance of the Fairmont Olympic. Some suggestions:
        </SectionText>

        <SectionText>Within a block of the venue:</SectionText>

        <ul className="list-disc list-outside px-10">
          <li>
            <OutsideLink href="https://www.marriott.com/hotels/travel/seawh-w-seattle/">
              W Seattle
            </OutsideLink>
          </li>
          <li>
            <OutsideLink href="https://www.monaco-seattle.com/">
              Kimpton Hotel Monaco
            </OutsideLink>
          </li>
          <li>
            <OutsideLink href="https://www.hotelvintage-seattle.com/">
              Kimpton Hotel Vintage
            </OutsideLink>
          </li>
        </ul>

        <SectionText>
          Near Pike Place Market (0.5 miles away from venue):
        </SectionText>
        <ul className="list-disc list-outside px-10">
          <li>
            <OutsideLink href="http://www.innatthemarket.com/">
              Inn at the Market
            </OutsideLink>
          </li>
          <li>
            <OutsideLink href="https://www.thompsonhotels.com/hotels/washington/seattle/thompson-seattle">
              Thompson Seattle
            </OutsideLink>
          </li>
          <li>
            <OutsideLink href="https://www.palladianhotel.com/">
              Kimpton Palladian
            </OutsideLink>
          </li>
        </ul>

        <SectionText>
          Near Seattle Center and the Space Needle (1.2 miles away from venue):
        </SectionText>
        <ul className="list-disc list-outside px-10">
          <li>
            <OutsideLink href="https://www.hyatt.com/en-US/hotel/washington/hyatt-house-seattle-downtown/seaxd">
              Hyatt House Seattle
            </OutsideLink>
            . You can make a reservation through{" "}
            <OutsideLink href="https://www.hyatt.com/en-US/group-booking/SEAXD/G-CWW9">
              this room block
            </OutsideLink>{" "}
            until 8/10/21.
          </li>
        </ul>
      </PageWrapper>
    </div>
  );
}
