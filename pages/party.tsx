import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderSeparator from "../components/PageHeaderSeparator"
import PageHeaderText from "../components/PageHeaderText"
import PageWrapper from "../components/PageWrapper"
import SectionHeader from "../components/SectionHeader"

export default function WeddingParty() {
  return (
    <div>
      <Head>
        <title>Wedding Party - Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />
  
      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Wedding Party</PageHeaderText>
          <PageHeaderSeparator />
          
        </PageHeader>
 <SectionHeader textCenter>Bridesmaids</SectionHeader>
        
        <SectionText><b>Nancy Chin</b>
          Nancy and Nicole are cousins. Their childhoods were filled with late-night sleepovers and camping trips along the California coast. They love seeing each other at family gatherings, eating Fosselman's ice cream, and playing all kinds of games from Monopoly to Mario Kart. 
        </SectionText>
        
        <SectionText><b>Michelle Chan</b>
          Michelle and Nicole connected at Penn, where Nicole was Michelle's engineering Orientation Peer Advisor. Their mentorship turned into friendship, and they were excited to both end up in Seattle. You'll find them hosting board game nights and dinner parties, watching musicals together, and sharing a love for chicken karaage.
        </SectionText>
        
        <SectionText><b>Jamie Lee</b>
          Jamie and Nicole met online in a Facebook group matching Microsoft summer intern coordinators. They've since survived four summers leading interns and have had many adventures throughout the year. They enjoy chatting about all things Disney, solving puzzles and brain teasers, and working on arts and crafts.
        </SectionText>
        
        <SectionText><b>Angelica Tran</b>
          Angelica and Nicole got to know each other at Microsoft because Angelica was Jamie's officemate. They quickly became friends and have fun crafting, dominating at Disney trivia, and savoring scoops of Salt and Straw's Pots of Gold and Rainbows.
        </SectionText>
        
        <SectionHeader textCenter>🚧 Groomsmen coming soon. 🚧</SectionHeader>
      </PageWrapper>
    </div>
  )
}
