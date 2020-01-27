import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"
import SectionText from "../components/SectionText"

type OutsideLinkProps = {
  href: string,
  children: string,
}

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
  )
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
        <div className="border border-gray-200 p-4">
          <img src="/seattle_skyline.jpg" alt="The beautiful Seattle skyline from Kerry Park." />
          <p className="pt-4">The beautiful Seattle skyline from Kerry Park.</p>
        </div>
        <SectionHeader>Getting to Seattle</SectionHeader>
        <SectionText>
          Sea-Tac (SEA) is the region&apos;s major airport. 
        </SectionText>
        <SectionText>
          We recommend using <OutsideLink href="https://www.google.com/flights?hl=en#flt=LAX.SEA.2020-12-11*SEA.LAX.2020-12-13;c:USD;e:1;sd:1;t:f">Google Flights</OutsideLink> to find and compare the cheapest airfare.
        </SectionText>
        <SectionText>
          When leaving the airport, you can usually follow the herd toward the <OutsideLink href="https://www.soundtransit.org/ride-with-us/popular-destinations/sea-tac-airport">Link Light Rail</OutsideLink>. There are ticket counters located on the floor below the platform.
        </SectionText>
        <SectionText>
          If you prefer to use a <OutsideLink href="https://www.portseattle.org/sea-tac/ground-transportation/app-based-rideshare">rideshare app</OutsideLink>, there are designated pick-up spots.
        </SectionText>
        <SectionText>
          And finally, <OutsideLink href="https://www.portseattle.org/sea-tac/ground-transportation/taxis">taxis</OutsideLink> are located on the third floor of the parking garage.
        </SectionText>

        <SectionHeader>Staying in Seattle</SectionHeader>
        <SectionText>There are plenty of <OutsideLink href="https://www.google.com/travel/hotels/Seattle?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271059%2C4274032%2C4291318%2C4305595%2C4308216%2C4311408%2C4314846%2C4315873%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4340162%2C4270859%2C4284970%2C4291517%2C4292955%2C4307996&hl=en&gl=us&un=1&q=hotels%20seattle&rp=EK2Co5e5rcvLJhDCp-WCzpzv9rsBEM2Ai5KP4JiFTxCQneXL5qzPijQ4AUAASAI&ictx=1&ved=2ahUKEwiVm-TEiKPnAhXjLX0KHWnFCTwQtDV6BAgLEAU&hrf=CgUI4QEQACIDVVNEKhYKBwjkDxAMGAsSBwjkDxAMGA0YAiABsAEAWAFoAYoBKAoSCWnlXKbHy0dAEbzE08EEll7AEhIJsMVoAEHPR0ARvMTTFaOUXsCaAQkSB1NlYXR0bGWiARMKCC9tLzBkOWpyEgdTZWF0dGxlqgEKCgIIIRICCAgYAaoBCgoCCBISAghoGAGqAQcKAwihAhgAqgEfCgIIHBICCFESAghYEgIIRxICCDYSAghNEgMInQIYAaoBFwoCCCUSAgh1EgMIoAISAgh5EgIIehgBqgEOCgIIERICCCoSAgh_GAGqASQKAgguEgIIVhIDCIMBEgIISxICCAwSAghTEgMIiQESAggnGAGqAQ4KAgg1EgIICxICCBAYAZIBAiAB&ap=KigKEglp5Vymx8tHQBG8xNPBBJZewBISCbDFaABBz0dAEbzE0xWjlF7AMAJapgIKBQjhARAAIgNVU0QqFgoHCOQPEAwYCxIHCOQPEAwYDRgCIAGwAQBYAWgBigEoChIJfNkKCQrMR0ARvMTTGSWWXsASEgmf30Vag89HQBG8xNNtw5RewJoBCRIHU2VhdHRsZaIBEwoIL20vMGQ5anISB1NlYXR0bGWqAQoKAgghEgIICBgBqgEKCgIIEhICCGgYAaoBBwoDCKECGACqAR8KAggcEgIIURICCFgSAghHEgIINhICCE0SAwidAhgBqgEXCgIIJRICCHUSAwigAhICCHkSAgh6GAGqAQ4KAggREgIIKhICCH8YAaoBJAoCCC4SAghWEgMIgwESAghLEgIIDBICCFMSAwiJARICCCcYAaoBDgoCCDUSAggLEgIIEBgBkgECIAE">hotels</OutsideLink> downtown, from luxury suites to budget options, within walking distance of the Arctic Club. Or why walk when you could stay at the Arctic Club itself?</SectionText>
      </PageWrapper>
    </div>
  )
}
