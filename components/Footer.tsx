import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#243d59] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand — cream logo on darker brand blue */}
          <div>
            <Logo variant="dark" className="h-16 w-auto mb-4" />
            <p className="text-sm text-[#d4c9a8]/80 leading-relaxed">
              Licensed electrical contractors serving Wood River Valley since
              1998. Quality workmanship, local roots, community trust.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-[#d4a800] uppercase tracking-wider text-sm font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#d4c9a8]/80 hover:text-[#d4a800] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-[#d4a800] uppercase tracking-wider text-sm font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12084212123"
                  className="flex items-center gap-3 text-[#d4c9a8]/80 hover:text-[#d4a800] text-sm transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={16} className="shrink-0 text-[#d4a800]" />
                  <span>208-421-2123</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@allwiredupidaho.com"
                  className="flex items-center gap-3 text-[#d4c9a8]/80 hover:text-[#d4a800] text-sm transition-colors duration-200 cursor-pointer"
                >
                  <Mail size={16} className="shrink-0 text-[#d4a800]" />
                  <span>info@allwiredupidaho.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#d4c9a8]/80 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[#d4a800]" />
                <span>
                  Wood River Valley, Idaho
                  <br />
                  Sun Valley · Ketchum · Hailey · Bellevue
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#d4c9a8]/80 text-sm">
                <Clock size={16} className="shrink-0 mt-0.5 text-[#d4a800]" />
                <span>
                  Mon–Fri: 7am–6pm
                  <br />
                  Sat: 8am–4pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#3a5878] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#d4c9a8]/60">
            © {new Date().getFullYear()} All Wired Up Idaho. All rights reserved.
          </p>
          <p className="text-xs text-[#d4c9a8]/60">
            Licensed & Insured · Wood River Valley, ID
          </p>
        </div>
      </div>
    </footer>
  );
}
