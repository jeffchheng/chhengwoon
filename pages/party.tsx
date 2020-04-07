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
        <PageHeaderSeparator small />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
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
          <div className="w-full md:w-1/2 w-1/2 p-2">
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
          <div className="w-full md:w-1/2 p-2">
            <div className="rounded overflow-hidden shadow-lg h-full">
              <img className="w-full object-cover object-top" src="/party/nicole-jamie.jpg" alt="Nicole and Jamie" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Jamie Lee</div>
                <p className="text-gray-700 text-base">
                  Jamie and Nicole met online in a Facebook group matching Microsoft summer intern coordinators. They&apos;ve since survived four summers leading interns and have had many adventures throughout the years. They enjoy chatting about all things Disney, solving puzzles and brain teasers, and working on arts and crafts.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
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
        
        <SectionHeader textCenter>Groomsmen</SectionHeader>
        <PageHeaderSeparator small />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
            <div className="rounded overflow-hidden shadow-lg h-full">
              <img className="w-full object-cover object-top" src="/party/jeff-alex.jpg" alt="Jeff and Alex" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Alex Chheng</div>
                <p className="text-gray-700 text-base">
                  Jeff and Alex&apos;s mental synchronization can have but one explanation: they may be two brothers, but they share one brain. A bro-mind, if you will. They share a fiery passion for gaming and anime, and will debate and deep-dive for hours on end.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 w-1/2 p-2">
            <div className="mx-auto rounded overflow-hidden shadow-lg h-full">
              <img className="w-full" src="/party/jeff-chris.jpg" alt="Jeff and Chris" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Chris Ouch</div>
                <p className="text-gray-700 text-base">
                  Jeff and Chris basically grew up in the same house during their formative years. They ruled the neighborhood with an iron fist, scootering around and challenging people to Yu-Gi-Oh duels. That relationship translated from real life into the digital world, where they enjoy kicking ass in competitive MOBAs and MMOs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
            <div className="rounded overflow-hidden shadow-lg h-full">
              <img className="w-full object-cover object-top" src="/party/jeff-alan.jpg" alt="Jeff and Alan" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Alan Chang</div>
                <p className="text-gray-700 text-base">
                  Jeff and Alan were vaguely aware of each others&apos; existence in elementary school, but it wasn&apos;t until high school that they formally met and became fast friends, and the Chheng-Chang connection was formed. From then on, the duo loved to engage in silly antics and relish in a similar sense of humor.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="mx-auto rounded overflow-hidden shadow-lg h-full">
              <img className="w-full" src="/party/jeff-louis.jpg" alt="Jeff and Louis" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Louis Hughes</div>
                <p className="text-gray-700 text-base">
                  Jeff met Louis through Chris, who brought him into the squad. There, they discovered a shared interest in dumb internet memes. They&apos;re known for being very online and inundating the group chat with their best (though some would say worst) finds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}
