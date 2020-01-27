import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export const locations = [
  {
    href: "/details",
    label: "Wedding Details",
  },
  {
    href: "/rsvp",
    label: "RSVP",
  },
  {
    href: "/travel",
    label: "Travel Information",
  },
  {
    href: "/story",
    label: "Our Story",
  },
  {
    href: "/party",
    label: "Wedding Party",
  },
  {
    href: "/registry",
    label: "Gift Registry",
  },
]

const links = locations.map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const color = "purple"

export default function Nav() {
  const router = useRouter()
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={`bg-${color}-800 h-2 min-h-full`} />
      <nav className={`flex items-center justify-between flex-wrap text-${color}-800 bg-${color}-200 p-6`}>
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">
              <a className={`hover:text-${color}-600 ${router.pathname === "/" ? `text-${color}-600` : ""}`}>
                Jeff &amp; Nicole
              </a>
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setShow(val => !val)}
            className={`flex items-center px-3 py-2 border rounded border-${color}-800 text-${color}-800 hover:text-${color}-600 hover:border-${color}-600`}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`w-full block ${show ? "" : "hidden"} flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-md lg:flex-grow">
            {links.map(({ key, href, label }) => (
              <Link key={key} href={href}>
                <a className={`block mt-4 lg:inline-block lg:mt-0 font-semibold ${router.pathname === href ? `text-${color}-600` : ""} hover:text-${color}-600 mr-6`}>
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
