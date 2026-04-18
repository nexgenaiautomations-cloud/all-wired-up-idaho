import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Award, Shield, CheckCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind All Wired Up Idaho — 26 years of electrical expertise rooted in Wood River Valley.",
};

const timeline = [
  {
    year: "1998",
    title: "Company Founded",
    text: "Started as a solo operation serving the Hailey and Bellevue area. Word-of-mouth grew the business one satisfied customer at a time.",
  },
  {
    year: "2003",
    title: "Expanded to Sun Valley & Ketchum",
    text: "Reputation for quality work opened doors to Sun Valley resort and luxury residential projects.",
  },
  {
    year: "2010",
    title: "Second Generation Joins",
    text: "Son joins the trade, bringing new energy and techniques while carrying forward the same standards the business was built on.",
  },
  {
    year: "2015",
    title: "Commercial Division Grows",
    text: "Expanded into commercial tenant improvements, new construction, and maintenance contracts across the valley.",
  },
  {
    year: "2020",
    title: "EV & Smart Home Services",
    text: "Added EV charger installations and smart home wiring to serve a rapidly growing segment of homeowners.",
  },
  {
    year: "2024",
    title: "26 Years & Still Going",
    text: "A father-son team with deep roots in every corner of Wood River Valley — still doing things the right way.",
  },
];

const values = [
  {
    icon: Award,
    title: "Experience You Can Trust",
    text: "26 years in the field means we've seen almost everything. We bring that depth of knowledge to every job, big or small.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    text: "Fully licensed by the state of Idaho and insured for your protection. Every job is done to code.",
  },
  {
    icon: CheckCircle,
    title: "Local & Accountable",
    text: "We live and work in the same community. Our reputation is everything — we stand behind every project we touch.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2e4a6b] py-14 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#f5c800] font-heading uppercase tracking-widest text-sm mb-2">
            About
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            All Wired Up Idaho
          </h1>
          <p className="text-[#d4c9a8] max-w-2xl leading-relaxed">
            A family-built business with 26 years of electrical expertise and
            deep roots in Wood River Valley.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-[#2e4a6b] mb-5">
            Our Story
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-base">
            <p>
              All Wired Up Idaho is a newly formed company, but the man
              behind it has been wiring homes and businesses across Wood
              River Valley for over 26 years. That depth of experience — the
              relationships, the reputation, the craft — is exactly what we
              bring to every job under the All Wired Up name.
            </p>
            <p>
              What makes All Wired Up different is the continuity — when
              you call us, you get the same experienced team that&apos;s been
              here for 26 years. Not a rotating crew of subcontractors. Not
              a franchise. A real local business where the people answering
              the phone are the same people doing the work.
            </p>
            <p>
              We&apos;ve worked in Sun Valley&apos;s most prestigious homes, wired
              commercial buildings in Hailey, and helped homeowners in
              Bellevue bring their properties up to code. The valley is our
              home — and we treat every job like it&apos;s in our own backyard.
            </p>
            <p>
              It&apos;s a father-son operation, and that matters to us. The
              same family name is on every job, which means we&apos;re as
              invested in the outcome as you are.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-[#2e4a6b] mb-8 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-[#d8e3ed] shadow-sm"
              >
                <div className="w-12 h-12 bg-[#2e4a6b] rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#d4c9a8]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#2e4a6b] mb-1 text-lg">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-[#2e4a6b] mb-10 text-center">
            26 Years in Wood River Valley
          </h2>
          <div className="relative">
            <div className="absolute left-[52px] sm:left-[60px] top-0 bottom-0 w-0.5 bg-[#2e4a6b]/20" />
            <div className="space-y-8">
              {timeline.map(({ year, title, text }) => (
                <div key={year} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-24 sm:w-28 text-right">
                    <span className="inline-block bg-[#2e4a6b] text-[#f5c800] font-heading font-bold text-sm px-3 py-1 rounded">
                      {year}
                    </span>
                  </div>
                  <div className="absolute left-[88px] sm:left-[102px] top-2 w-3 h-3 bg-[#f5c800] rounded-full border-2 border-[#2e4a6b]" />
                  <div className="flex-1 pb-2">
                    <h3 className="font-heading font-bold text-[#2e4a6b] mb-1">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-[#2e4a6b] mb-3 text-center">
            Our Service Area
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-xl mx-auto">
            We serve Wood River Valley, Magic Valley, and surrounding communities
            across south-central Idaho.
          </p>

          <h3 className="font-heading text-lg font-bold text-[#2e4a6b] mb-4">Wood River Valley</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              "Sun Valley",
              "Ketchum",
              "Hailey",
              "Bellevue",
              "Carey",
              "Picabo",
              "Fairfield",
              "Blaine County",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-[#d8e3ed]"
              >
                <CheckCircle size={14} className="text-[#f5c800] shrink-0" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-[#2e4a6b] mb-4">Magic Valley</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Twin Falls",
              "Jerome",
              "Burley",
              "Rupert",
              "Gooding",
              "Shoshone",
              "Wendell",
              "Filer",
              "Kimberly",
              "Eden",
              "Hagerman",
              "Twin Falls County",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-[#d8e3ed]"
              >
                <CheckCircle size={14} className="text-[#f5c800] shrink-0" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2e4a6b] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-3">
            Ready to Work With Us?
          </h2>
          <p className="text-[#d4c9a8] mb-8">
            Get a free estimate from the team that&apos;s been wiring Wood River
            Valley for 26 years.
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
              Contact Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
