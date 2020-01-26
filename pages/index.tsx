import Head from "next/head"
import Link from "next/link"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageHeaderText from "../components/PageHeaderText"

const row1 = [
  {
    href: "/details",
    label: "Wedding Details",
    description: "The who, what, when, and where.",
  },
  {
    href: "/rsvp",
    label: "RSVP",
    description: "Let us know you're coming.",
  },
  {
    href: "/travel",
    label: "Travel Info",
    description: "Coming from out of town?",
  },
]

const row2 = [
  {
    href: "/story",
    label: "Our Story",
    description: "Learn more about us.",
  },
  {
    href: "/party",
    label: "Wedding Party",
    description: "Who are the cool kids?",
  },
  {
    href: "/registry",
    label: "Gift Registry",
    description: "Gifts are hard. Wondering what to get us?",
  },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
      </Head>
  
      <Nav />
  
      <PageHeader>
        <PageHeaderText>Wedding Time</PageHeaderText>
        <p className="text-base">
          Jeff Chheng and Nicole Woon&apos;s wedding.
        </p>
      </PageHeader>

      <div className="max-w-3xl mx-auto flex flex-row justify-around">
        {row1.map(({ href, label, description }) => (
          <div key={`card-to-${href}`} className="m-2 w-full h-30 inline-block rounded overflow-hidden hover:shadow-lg">
            <Link href={href}>
              <a>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{label} &rarr;</div>
                  <p className="text-gray-700 text-base">
                    {description}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto flex flex-row justify-around">
        {row2.map(({ href, label, description }) => (
          <div key={`card-to-${href}`} className="m-2 w-full h-30 inline-block rounded overflow-hidden hover:shadow-lg">
            <Link href={href}>
              <a>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{label} &rarr;</div>
                  <p className="text-gray-700 text-base">
                    {description}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 
