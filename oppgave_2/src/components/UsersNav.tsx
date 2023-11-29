"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    
    {
        label: "Edit",
        href: "users/{id}/edit",
    },
    {
        label: "Stats",
        href: "/users/{id}/stats",
    },
    {
        label: "Goals",
        href: "/users/{id}/goals",
    },
    {
        label: "Sessions",
        href: "/users/{id}/sessions",
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