import Head from "next/head";
import Link from "next/link";

import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import PageHeaderSeparator from "../components/PageHeaderSeparator";
import PageHeaderText from "../components/PageHeaderText";
import PageWrapper from "../components/PageWrapper";

const row1 = [
  {
    href: "/details",
    label: "Wedding Details",
    description: "The when, where, and what to wear.",
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
];

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
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeff &amp; Nicole&apos;s Wedding</title>
      </Head>

      <Nav />

      <PageWrapper>
        <PageHeader>
          <PageHeaderText>Jeff &amp; Nicole</PageHeaderText>
          <PageHeaderSeparator />
          <p>12/12/2020</p>
        </PageHeader>

        <div className="max-w-4xl mx-auto flex flex-wrap flex-row justify-around">
          {row1.concat(row2).map(({ href, label, description }) => (
            <div
              key={`card-to-${href}`}
              className="m-4 w-full md:w-1/3 lg:w-64 h-30 inline-block rounded border border-gray-200 overflow-hidden shadow-md hover:shadow-xl"
            >
              <Link href={href}>
                <a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{label} &rarr;</div>
                    <p>{description}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
