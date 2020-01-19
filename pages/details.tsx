import Head from 'next/head'

import Nav from '../components/nav'

export default function Details() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
      </Head>
  
      <Nav />
  
      <div className="hero">
        <h1 className="title">Wedding Details</h1>

        <h3>Where</h3>
        <p>The wedding ceremoney and reception will be held at the Arctic Club</p>
        <address>
          700 3rd Ave
          <br />
          Seattle, WA 98104
        </address>

        <h3>When</h3>
        <p>Some time in 2020.</p>

        <h3>What to wear</h3>
        <p>Stuff.</p>
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
