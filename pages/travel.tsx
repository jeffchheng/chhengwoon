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
          <p>Coming from out of town?</p>
        </PageHeader>

        <PhotoWithCaption
          src="/seattle_skyline.jpg"
          alt="The beautiful Seattle skyline from Kerry Park. (Photo Credit: Nicole)"
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
          to find and compare the cheapest airfare.
        </SectionText>
        <SectionText>
          When leaving the airport, you can usually follow the herd toward the{" "}
          <OutsideLink href="https://www.soundtransit.org/ride-with-us/popular-destinations/sea-tac-airport">
            Link Light Rail
          </OutsideLink>
          . There are ticket counters located on the floor below the platform.
          Link trains run every 6, 10 or 15 minutes depending on the time of
          day. Service is available from 5 am to 1 am. Monday through
          Saturday, and from 6 am to midnight on Sunday and holidays. Adult
          fares range from $2.25 to $3.25 depending on how far you travel. The
          closest stop to the Arctic Club is the{" "}
          <OutsideLink href="https://www.soundtransit.org/ride-with-us/stations/link-light-rail-stations/pioneer-square-station">
            Pioneer Square Station
          </OutsideLink>
          .
        </SectionText>
        <SectionText>
          If you prefer to use a{" "}
          <OutsideLink href="https://www.portseattle.org/sea-tac/ground-transportation/app-based-rideshare">
            rideshare app
          </OutsideLink>
          , there are designated pick-up spots.
        </SectionText>
        <SectionText>
          And finally,{" "}
          <OutsideLink href="https://www.portseattle.org/sea-tac/ground-transportation/taxis">
            taxis
          </OutsideLink>{" "}
          are located on the third floor of the parking garage.
        </SectionText>

        <SectionHeader>Staying in Seattle</SectionHeader>
        <SectionText>
          There are plenty of{" "}
          <OutsideLink href="https://www.google.com/travel/hotels/Seattle?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271059%2C4274032%2C4291318%2C4305595%2C4308216%2C4311408%2C4314846%2C4315873%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4340162%2C4270859%2C4284970%2C4291517%2C4292955%2C4307996&hl=en&gl=us&un=1&q=hotels%20seattle&rp=EK2Co5e5rcvLJhDCp-WCzpzv9rsBEM2Ai5KP4JiFTxCQneXL5qzPijQ4AUAASAI&ictx=1&ved=2ahUKEwiVm-TEiKPnAhXjLX0KHWnFCTwQtDV6BAgLEAU&hrf=CgUI4QEQACIDVVNEKhYKBwjkDxAMGAsSBwjkDxAMGA0YAiABsAEAWAFoAYoBKAoSCWnlXKbHy0dAEbzE08EEll7AEhIJsMVoAEHPR0ARvMTTFaOUXsCaAQkSB1NlYXR0bGWiARMKCC9tLzBkOWpyEgdTZWF0dGxlqgEKCgIIIRICCAgYAaoBCgoCCBISAghoGAGqAQcKAwihAhgAqgEfCgIIHBICCFESAghYEgIIRxICCDYSAghNEgMInQIYAaoBFwoCCCUSAgh1EgMIoAISAgh5EgIIehgBqgEOCgIIERICCCoSAgh_GAGqASQKAgguEgIIVhIDCIMBEgIISxICCAwSAghTEgMIiQESAggnGAGqAQ4KAgg1EgIICxICCBAYAZIBAiAB&ap=KigKEglp5Vymx8tHQBG8xNPBBJZewBISCbDFaABBz0dAEbzE0xWjlF7AMAJapgIKBQjhARAAIgNVU0QqFgoHCOQPEAwYCxIHCOQPEAwYDRgCIAGwAQBYAWgBigEoChIJfNkKCQrMR0ARvMTTGSWWXsASEgmf30Vag89HQBG8xNNtw5RewJoBCRIHU2VhdHRsZaIBEwoIL20vMGQ5anISB1NlYXR0bGWqAQoKAgghEgIICBgBqgEKCgIIEhICCGgYAaoBBwoDCKECGACqAR8KAggcEgIIURICCFgSAghHEgIINhICCE0SAwidAhgBqgEXCgIIJRICCHUSAwigAhICCHkSAgh6GAGqAQ4KAggREgIIKhICCH8YAaoBJAoCCC4SAghWEgMIgwESAghLEgIIDBICCFMSAwiJARICCCcYAaoBDgoCCDUSAggLEgIIEBgBkgECIAE">
            hotels
          </OutsideLink>{" "}
          downtown, from luxury suites to budget options, within walking
          distance of the Arctic Club.{" "}
        </SectionText>

        <SectionText>
          Or why walk when you could stay at the Arctic Club itself? Make
          reservations directly through{" "}
          <OutsideLink href="https://doubletree.hilton.com/en/dt/groups/personalized/S/SEAACDT-CWW-20201210/index.jhtml?WT.mc_id=POG">
            Hilton&apos;s website
          </OutsideLink>
          .
        </SectionText>
        <ul className="list-disc list-outside px-10">
          <li>The group code is CWW.</li>
          <li>
            Check in as early as December 10, 2020, and check out as late as
            December 14, 2020.
          </li>
          <li>
            For a room in our room block, which is on the same floor as the
            ceremony/reception, you&apos;ll need to pick the $219 king bed
            option.
          </li>
          <li>The cutoff date to make reservations is November 12, 2020.</li>
          <li>
            If you have any issues reserving rooms, you may call sales
            coordinator Chipo Muchelemba directly on 206-631-8060 or
            206-340-0340.
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
      </PageWrapper>
    </div>
  );
}
