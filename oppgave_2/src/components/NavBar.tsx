"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    {
        label: "Hjem",
        href: "/",
    },
    {
        label: "Users",
        href: "users",
    },
    {
        label: "Create user",
        href: "/users/create",
    },
    {
        label: "Templates",
        href: "/templates",
    },
    {
        label: "Create templates",
        href: "/templates/create",
    },
    {
        label: "Questions",
        href: "/questions",
    },
    {
        label: "Create questions",
        href: "/questions/create",
    }
]

export default function NavBar() {
    const pathname = usePathname()
  
    const checkActivePath = (path: string) => {
      return path === pathname
    }
  
    return (
      <nav className="mb-6 flex gap-10 p-5 px-10">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={checkActivePath(item.href) ? "underline" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    )
  }