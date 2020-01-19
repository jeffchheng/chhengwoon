import Link from 'next/link'

export const locations = [
  {
    href: '/details',
    label: 'Wedding Details',
  },
  {
    href: '/rsvp',
    label: 'RSVP',
  },
  {
    href: '/travel',
    label: 'Travel Information',
  },
  {
    href: '/story',
    label: 'Our Story',
  },
  {
    href: '/party',
    label: 'Wedding Party',
  },
  {
    href: '/registry',
    label: 'Gift Registry',
  },
]

const links = locations.map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Lato, sans-serif;
      }
      nav {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
