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
        {navLinks.map((item, key) => (
          <Link
            href={item.href}
            key={key}
            className={`h-full inline-block box-border p-5  ${pathname === item.href && "router-active"}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
