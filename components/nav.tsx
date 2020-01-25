import Link from "next/link"

import useDarkMode from "../hooks/useDarkMode"

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

export default function Nav() {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <nav className={`flex items-center justify-between flex-wrap ${darkMode ? "bg-blue-900" : "bg-blue-700"} p-6`}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Nicole &amp; Jeff</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
           <Link href="/" >
            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">Home</a>
          </Link>
          {links.map(({ key, href, label }) => (
            <Link key={key} href={href} >
              <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">{label}</a>
            </Link>
          ))}
        </div>
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 ${darkMode ? "hover:bg-white" : "hover:bg-black" } mt-4 lg:mt-0`}
          >
            {darkMode ? "Go Light" : "Go Dark"}
          </button>
        </div>
      </div>
    </nav>
  )
}
