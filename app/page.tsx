import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Zap,
  Home,
  Building,
  Award,
  Shield,
  CheckCircle,
  ChevronRight,
  Star,
  Clock,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "All Wired Up Idaho | Electrical Contractor Wood River Valley",
};

const trustSignals = [
  { icon: Award, label: "26 Years in Business", sub: "Est. 1998" },
  { icon: Shield, label: "Licensed & Insured", sub: "Idaho State Licensed" },
  { icon: Zap, label: "Free Estimates", sub: "Call or fill out the form" },
  { icon: MapPin, label: "Locally Based", sub: "Wood River Valley" },
];

const services = [
  {
    icon: Home,
    title: "Custom Residential",
    description:
      "Lutron-certified specialists for high-end custom homes — panel upgrades, full rewires, new construction, EV chargers, and smart lighting.",
    items: ["Lutron Smart Lighting", "Panel Upgrades", "New Construction Wiring", "EV Charger Install"],
  },
  {
    icon: Building,
    title: "Commercial",
    description:
      "Reliable electrical solutions for businesses across Wood River Valley — on schedule, on budget.",
    items: ["Tenant Improvements", "New Construction", "Maintenance Contracts", "Lighting Systems"],
  },
  {
    icon: Zap,
    title: "Specialty",
    description:
      "Generator installations, smart home wiring, outdoor lighting, and custom electrical projects.",
    items: ["Generator Hookups", "Smart Home Wiring", "Landscape Lighting", "Service Upgrades"],
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Sun Valley",
    text: "Fast, professional, and honest pricing. They upgraded our panel and installed EV chargers in one day. Couldn't ask for better service.",
  },
  {
    name: "Mike T.",
    location: "Ketchum",
    text: "All Wired Up handled all the electrical for two of our remodels. Always on time and the work is spotless. They're our go-to.",
  },
  {
    name: "Jenna R.",
    location: "Hailey",
    text: "Highly recommend. They troubleshot an issue that had stumped two other electricians in under an hour. Real experts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2e4a6b] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: copy */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#f5c800]/20 border border-[#f5c800]/40 text-[#f5c800] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <Zap size={12} />
                <span>Serving Wood River Valley Since 1998</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Wood River Valley&apos;s<br />
                <span className="text-[#f5c800]">Trusted Electricians</span>
              </h1>
              <p className="text-[#d4c9a8] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                26 years of expert electrical work across Sun Valley, Ketchum,
                Hailey, and Bellevue. Residential, commercial, and specialty
                projects — done right, every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="tel:+12084212123"
                  className="flex items-center justify-center gap-2 bg-[#f5c800] hover:bg-[#d4ac00] text-[#2e4a6b] font-heading font-bold uppercase tracking-wide text-base px-6 py-4 rounded transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={20} />
                  Call 208-421-2123
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-[#d4c9a8] hover:border-[#f5c800] hover:text-[#f5c800] text-[#d4c9a8] font-heading font-bold uppercase tracking-wide text-base px-6 py-4 rounded transition-colors duration-200 cursor-pointer"
                >
                  Get a Free Quote
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right: logo on brand background card */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="bg-[#243d59] border border-[#3a5878] rounded-2xl p-8 shadow-xl">
                <Logo variant="full" className="w-48 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#f5c800]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#2e4a6b] rounded flex items-center justify-center">
                  <Icon size={20} className="text-[#f5c800]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#2e4a6b] text-sm leading-tight">
                    {label}
                  </p>
                  <p className="text-[#2e4a6b]/70 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2e4a6b] mb-3">
              What We Do
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Residential, commercial, and specialty electrical services — all
              backed by 26 years of proven work right here in the valley.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, items }) => (
              <div
                key={title}
                className="border border-slate-200 rounded-xl p-6 hover:border-[#2e4a6b] hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-[#2e4a6b] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#f5c800] transition-colors duration-200">
                  <Icon
                    size={22}
                    className="text-[#d4c9a8] group-hover:text-[#2e4a6b] transition-colors duration-200"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#2e4a6b] mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {description}
                </p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle size={14} className="text-[#f5c800] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[#2e4a6b] hover:bg-[#2e4a6b] hover:text-white text-[#2e4a6b] font-heading font-bold uppercase tracking-wide px-6 py-3 rounded transition-colors duration-200 cursor-pointer"
            >
              View All Services
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 26-year legacy section — no father-son, just the brand story */}
      <section className="py-16 sm:py-20 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="bg-[#2e4a6b] rounded-2xl p-8 text-center min-w-[220px]">
                <p className="font-heading text-6xl font-bold text-[#f5c800]">26</p>
                <p className="font-heading text-[#d4c9a8] text-lg uppercase tracking-wide">
                  Years
                </p>
                <p className="text-[#d4c9a8]/70 text-sm mt-1">in Wood River Valley</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-[#d4c9a8] text-sm font-semibold">Est. 1998</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2e4a6b] mb-4">
                All Wired Up Idaho — Built on Results
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Since 1998, All Wired Up Idaho has been the name neighbors,
                contractors, and businesses in Wood River Valley call when they
                need electrical work done right. No runaround, no guesswork —
                just experienced hands and honest pricing.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                We&apos;ve handled everything from single-outlet fixes in Bellevue to
                full commercial builds in Ketchum. Whatever the scope, you get
                the same standard of care every time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#2e4a6b] font-heading font-bold uppercase tracking-wide hover:text-[#f5c800] transition-colors duration-200 cursor-pointer"
              >
                About
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2e4a6b] mb-3">
              What Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, text }) => (
              <div
                key={name}
                className="bg-[#f0f4f8] rounded-xl p-6 border border-[#d8e3ed]"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#f5c800] text-[#f5c800]" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  &ldquo;{text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#2e4a6b] text-sm">{name}</p>
                  <p className="text-slate-500 text-xs">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-[#2e4a6b] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Clock size={32} className="text-[#f5c800] mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-[#d4c9a8] mb-8">
            Call for a free estimate or fill out our contact form. We respond to
            all inquiries within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12084212123"
              className="flex items-center justify-center gap-2 bg-[#f5c800] hover:bg-[#d4ac00] text-[#2e4a6b] font-heading font-bold uppercase tracking-wide text-base px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
            >
              <Phone size={20} />
              208-421-2123
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[#d4c9a8] hover:border-[#f5c800] hover:text-[#f5c800] text-[#d4c9a8] font-heading font-bold uppercase tracking-wide text-base px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
