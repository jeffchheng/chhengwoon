import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import PageWrapper from "../components/PageWrapper"

export default function Details() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
      </Head>
  
      <Nav />
  
      <PageWrapper>
        <div className="text-center p-8">
          <PageHeader>Wedding Details</PageHeader>
          <p className="text-base">
            The who, what, when, and where.
          </p>
        </div>
        <SectionHeader>Where</SectionHeader>
        <p>The wedding ceremoney and reception will be held at the Arctic Club</p>
        <address>
          700 3rd Ave
          <br />
          Seattle, WA 98104
        </address>

        <SectionHeader>When</SectionHeader>
        <p>Some time in 2020.</p>

        <SectionHeader>What to wear</SectionHeader>
        <p>Stuff.</p>
      </PageWrapper>
    </div>
  )
}
