import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Home,
  Building,
  Zap,
  CheckCircle,
  ChevronRight,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Custom residential and commercial electrical services in Wood River Valley, Idaho. Lutron specialists — panel upgrades, EV chargers, new construction, and more.",
};

const residential = [
  "Lutron Smart Lighting & Controls",
  "Lutron RadioRA & Caseta Systems",
  "Panel Upgrades & Replacements",
  "New Custom Home Wiring",
  "Remodel & Addition Wiring",
  "EV Charger Installation (Level 1 & 2)",
  "Hot Tub & Spa Wiring",
  "Kitchen & Bathroom Circuits",
  "Whole-Home Surge Protection",
  "Ceiling Fan Installation",
  "GFCI & AFCI Breaker Upgrades",
  "Troubleshooting & Repairs",
];

const commercial = [
  "Commercial New Construction",
  "Tenant Improvement Wiring",
  "Retail & Restaurant Fit-Outs",
  "Office Building Electrical",
  "Warehouse & Industrial Wiring",
  "Commercial Panel Upgrades",
  "LED Lighting Retrofits",
  "Emergency & Exit Lighting",
  "Security & Access Control Wiring",
  "Maintenance Contracts",
  "Code Compliance Upgrades",
  "Load Analysis & Capacity Planning",
];

const specialty = [
  {
    title: "Generator Installation",
    description:
      "Standby and portable generator hookups for whole-home or critical circuit backup power.",
  },
  {
    title: "Smart Home Wiring",
    description:
      "Low-voltage, structured wiring, and smart panel integration for modern connected homes.",
  },
  {
    title: "Landscape & Outdoor Lighting",
    description:
      "Pathway, accent, and security lighting that enhances your property year-round.",
  },
  {
    title: "Service Entrance Upgrades",
    description:
      "100A to 200A (and above) service upgrades to support growing electrical demands.",
  },
  {
    title: "Underground Wiring",
    description:
      "Trenching and underground conduit installation for outbuildings, garages, and shops.",
  },
  {
    title: "Code Violation Corrections",
    description:
      "Inspection-ready work to bring older systems up to current NEC standards.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2e4a6b] py-14 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#f5c800] font-heading uppercase tracking-widest text-sm mb-2">
            What We Offer
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Electrical Services
          </h1>
          <p className="text-[#d4c9a8] max-w-2xl leading-relaxed">
            From a single outlet repair to a full custom home build-out — All
            Wired Up Idaho has the experience to handle it. Licensed, insured,
            and local since 1998.
          </p>
        </div>
      </section>

      {/* Lutron spotlight banner */}
      <section className="bg-[#f5c800]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2 shrink-0">
              <Star size={18} className="text-[#2e4a6b]" />
              <span className="font-heading font-bold text-[#2e4a6b] uppercase tracking-wide text-sm">
                Lutron Specialists
              </span>
            </div>
            <p className="text-[#2e4a6b] text-sm text-center sm:text-left">
              We specialize in Lutron smart lighting and control systems — RadioRA, Caseta, and
              whole-home dimming for custom residential projects across Wood River Valley.
            </p>
            <Link
              href="/contact"
              className="shrink-0 font-heading font-bold text-sm uppercase tracking-wide text-[#2e4a6b] border-b-2 border-[#2e4a6b] hover:border-[#243d59] transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Residential */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-[#2e4a6b] rounded-lg flex items-center justify-center shrink-0">
              <Home size={22} className="text-[#f5c800]" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2e4a6b]">
                Custom Residential Electrical
              </h2>
              <p className="text-slate-600 text-sm">
                For homeowners and custom builders across Wood River Valley
              </p>
            </div>
          </div>

          {/* Lutron callout card */}
          <div className="mb-8 bg-[#f0f4f8] border-l-4 border-[#2e4a6b] rounded-r-xl px-5 py-4">
            <p className="font-heading font-bold text-[#2e4a6b] text-sm uppercase tracking-wide mb-1">
              Lutron Certified
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We specialize in Lutron smart lighting and control systems — including RadioRA 3,
              Caseta Wireless, and whole-home dimming integration. Whether you&apos;re building
              a new custom home or retrofitting an existing one, we design and install Lutron
              systems that are intuitive, reliable, and built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {residential.map((item) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                  item.startsWith("Lutron")
                    ? "bg-[#2e4a6b] text-white"
                    : "bg-[#f0f4f8]"
                }`}
              >
                <CheckCircle
                  size={16}
                  className={`shrink-0 ${item.startsWith("Lutron") ? "text-[#f5c800]" : "text-[#f5c800]"}`}
                />
                <span className={`text-sm font-medium ${item.startsWith("Lutron") ? "text-white" : "text-slate-700"}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#2e4a6b] rounded-lg flex items-center justify-center shrink-0">
              <Building size={22} className="text-[#f5c800]" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2e4a6b]">
                Commercial Electrical
              </h2>
              <p className="text-slate-600 text-sm">
                For businesses and commercial properties
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commercial.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-slate-200"
              >
                <CheckCircle size={16} className="text-[#f5c800] shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#2e4a6b] rounded-lg flex items-center justify-center shrink-0">
              <Zap size={22} className="text-[#f5c800]" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2e4a6b]">
                Specialty Services
              </h2>
              <p className="text-slate-600 text-sm">
                Custom and specialized electrical projects
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialty.map(({ title, description }) => (
              <div
                key={title}
                className="border border-slate-200 rounded-xl p-5 hover:border-[#2e4a6b] hover:shadow-sm transition-all duration-200"
              >
                <h3 className="font-heading font-bold text-[#2e4a6b] mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2e4a6b] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-3">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-[#d4c9a8] mb-8">
            Give us a call — if it involves electricity, chances are we&apos;ve done
            it. Free estimates on all projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12084212123"
              className="flex items-center justify-center gap-2 bg-[#f5c800] hover:bg-[#d4ac00] text-[#2e4a6b] font-heading font-bold uppercase tracking-wide px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
            >
              <Phone size={18} />
              208-421-2123
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[#d4c9a8] hover:border-[#f5c800] hover:text-[#f5c800] text-[#d4c9a8] font-heading font-bold uppercase tracking-wide px-8 py-4 rounded transition-colors duration-200 cursor-pointer"
            >
              Request a Quote <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
