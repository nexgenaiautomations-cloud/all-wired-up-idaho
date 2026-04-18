"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#1a2e45] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo — cream colored on the brand slate blue */}
          <Link href="/" className="flex-shrink-0 py-1" onClick={() => setOpen(false)}>
            <Logo variant="dark" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  pathname === link.href
                    ? "text-[#d4a800]"
                    : "text-[#d4c9a8] hover:text-[#d4a800]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA: Click-to-call */}
          <a
            href="tel:+12084212123"
            className="hidden md:flex items-center gap-2 bg-[#d4a800] hover:bg-[#b08800] text-[#2e4a6b] font-heading font-bold text-sm uppercase tracking-wide px-4 py-2.5 rounded transition-colors duration-200 cursor-pointer"
          >
            <Phone size={16} />
            <span>208-421-2123</span>
          </a>

          {/* Mobile: call icon + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+12084212123"
              className="flex items-center justify-center w-10 h-10 bg-[#d4a800] text-[#2e4a6b] rounded cursor-pointer"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-10 h-10 text-[#d4c9a8] cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#243d59] border-t border-[#3a5878]">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-heading text-base font-semibold uppercase tracking-wider py-3 px-2 border-b border-[#3a5878] cursor-pointer transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#d4a800]"
                    : "text-[#d4c9a8] hover:text-[#d4a800]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12084212123"
              className="flex items-center gap-2 mt-3 bg-[#d4a800] text-[#2e4a6b] font-heading font-bold uppercase tracking-wide px-4 py-3 rounded cursor-pointer"
            >
              <Phone size={18} />
              <span>208-421-2123</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
