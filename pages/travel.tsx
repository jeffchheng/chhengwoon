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
        <title>Travel Information - Jeff &amp; Nicole</title>
      </Head>

      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Travel Information</PageHeaderText>
          <PageHeaderSeparator />
          <p>Coming from out of town?</p>
        </PageHeader>

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
          And finally, <OutsideLink href="">taxis</OutsideLink> are located on the third floor of the parking garage.
        </SectionText>

        <SectionHeader>Staying in Seattle</SectionHeader>
      </PageWrapper>
    </div>
  )
}
