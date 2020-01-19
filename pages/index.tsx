import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
      </Head>
  
      <Nav />
  
      <div className="hero">
        <h1 className="title">Wedding Time</h1>
        <p className="description">
          Jeff Chheng and Nicole Woon&apos;s wedding.
        </p>

        <div className="row">
          <Link href="/details">
            <a className="card">
              <h3>Wedding Details &rarr;</h3>
              <p>Where, when, and what (to wear).</p>
            </a>
          </Link>

          <Link href="/rsvp">
            <a className="card">
              <h3>RSVP &rarr;</h3>
              <p>Let us know you&apos;re coming.</p>
            </a>
          </Link>

          <Link href="/travel">
            <a className="card">
              <h3>Travel Information &rarr;</h3>
              <p>Coming from out of town?</p>
            </a>
          </Link>
        </div>

        <div className="row">
          <Link href="/story">
            <a className="card">
              <h3>Our Story &rarr;</h3>
              <p>Learn more about us.</p>
            </a>
          </Link>

          <Link href="/party">
            <a className="card">
              <h3>Wedding Party &rarr;</h3>
              <p>Who are the cool kids?</p>
            </a>
          </Link>

          <Link href="/registry">
            <a className="card">
              <h3>Gift Registry &rarr;</h3>
              <p>Gifts are hard. Wondering what to get us?</p>
            </a>
          </Link>
        </div>

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
        .row {
          max-width: 800px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  )
} 
