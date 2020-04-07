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
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="rounded overflow-hidden shadow-lg h-full">
              <img className="w-full object-cover object-top" src="/party/nicole-nancy.jpg" alt="Nicole and Nancy" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Nancy Chin</div>
                <p className="text-gray-700 text-base">
                  Nancy and Nicole are cousins. Their childhoods were filled with late-night sleepovers and camping trips along the California coast. They love seeing each other at family gatherings, eating Fosselman&apos;s ice cream, and playing all kinds of games from Monopoly to Mario Kart.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="mx-auto rounded overflow-hidden shadow-lg h-full">
              <img className="w-full" src="/party/nicole-michelle.jpg" alt="Nicole and Michelle" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Michelle Chan</div>
                <p className="text-gray-700 text-base">
                  Michelle and Nicole connected at Penn, where Nicole was Michelle&apos;s engineering Orientation Peer Advisor. Their mentorship turned into friendship, and they were excited to both end up in Seattle. You&apos;ll find them hosting board game nights and dinner parties, watching musicals together, and sharing a love for chicken karaage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="rounded overflow-hidden shadow-lg h-full">
              <img className="w-full object-cover object-top" src="/party/nicole-jamie.jpg" alt="Nicole and Jamie" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Jamie Lee</div>
                <p className="text-gray-700 text-base">
                  Jamie and Nicole met online in a Facebook group matching Microsoft summer intern coordinators. They&apos;ve since survived four summers leading interns and have had many adventures throughout the year. They enjoy chatting about all things Disney, solving puzzles and brain teasers, and working on arts and crafts.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="mx-auto rounded overflow-hidden shadow-lg h-full">
              <img className="w-full" src="/party/nicole-angelica.jpg" alt="Nicole and Angelica" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Angelica Tran</div>
                <p className="text-gray-700 text-base">
                  Angelica and Nicole got to know each other at Microsoft because Angelica was Jamie&apos;s officemate. They quickly became friends and have fun crafting, dominating at Disney trivia, and savoring scoops of Salt and Straw&apos;s Pots of Gold and Rainbows.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <SectionHeader textCenter>🚧 Groomsmen coming soon. 🚧</SectionHeader>
      </PageWrapper>
    </div>
  )
}
