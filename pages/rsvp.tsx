import Head from "next/head"

import Nav from "../components/Nav"
import PageHeader from "../components/PageHeader"
import PageWrapper from "../components/PageWrapper"

export default function RSVP() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
      </Head>
      
      <Nav />
  
      <PageWrapper>
        <PageHeader>RSVP</PageHeader>
      </PageWrapper>
    </div>
  )
}
