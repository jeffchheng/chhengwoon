import Head from 'next/head'

import Nav from '../components/nav'

export default function OurStory() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
      </Head>

      <Nav />
  
      <div className="hero">
        <h1 className="title">Our Story</h1>
      </div>

      <style jsx>{`
        .hero {
          margin: 0 auto;
          max-width: 800px;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding: 80px 0 25px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  )
}
