"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksType {
  href: string;
  title: string;
}

export default function Header() {
  const pathname = usePathname();

  const navLinks: NavLinksType[] = [
    { href: "/", title: "首页" },
    { href: "/chat", title: "聊天" },
    { href: "/chat/root", title: "管理员" },
    { href: "/chat/user", title: "用户" },
  ];

  return (
    <header className="h-16 flex-shrink-0 bg-pink-200">
      <div className="w-3/5 h-full bg-yellow-800">
        <ul>
          {navLinks.map((item, key) => (
            <li className="inline-block" key={key}>
              <Link
                href={item.href}
                className={`h-full inline-block box-border p-5  ${
                  pathname === item.href && "router-active"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
