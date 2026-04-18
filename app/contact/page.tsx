import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free electrical estimate from All Wired Up Idaho. Serving Wood River Valley — call 208-421-2123 or fill out our contact form.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "208-421-2123",
    href: "tel:+12084212123",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@allwiredupidaho.com",
    href: "mailto:info@allwiredupidaho.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Wood River Valley, Idaho\nSun Valley · Ketchum · Hailey · Bellevue",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 7am–6pm\nSat: 8am–4pm",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2e4a6b] py-14 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#f5c800] font-heading uppercase tracking-widest text-sm mb-2">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 max-w-xl leading-relaxed">
            Free estimates on all projects. Call us directly for urgent work, or
            fill out the form and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-[#2e4a6b] mb-5">
                  Reach Us Directly
                </h2>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#2e4a6b] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-[#f5c800]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-slate-800 font-semibold hover:text-[#2e4a6b] transition-colors duration-200 cursor-pointer"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-slate-800 font-semibold whitespace-pre-line">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call now CTA */}
              <div className="bg-[#2e4a6b] rounded-xl p-6 text-white">
                <p className="font-heading text-lg font-bold mb-2">
                  Need Same-Day Service?
                </p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  For urgent electrical issues, call us directly. We do our best
                  to accommodate emergency requests.
                </p>
                <a
                  href="tel:+12084212123"
                  className="flex items-center justify-center gap-2 bg-[#f5c800] hover:bg-[#d4ac00] text-[#2e4a6b] font-heading font-bold uppercase tracking-wide px-5 py-3 rounded transition-colors duration-200 cursor-pointer w-full"
                >
                  <Phone size={16} />
                  Call 208-421-2123
                </a>
              </div>

              {/* Service area map visual */}
              <div className="bg-[#f0f4fb] rounded-xl p-5 border border-slate-200">
                <h3 className="font-heading font-bold text-[#2e4a6b] mb-3">
                  Service Area
                </h3>
                <div className="grid grid-cols-2 gap-2">
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
                      className="flex items-center gap-1.5 text-xs text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-[#f5c800] rounded-full shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#2e4a6b] mb-1">
                Request a Free Estimate
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Tell us about your project and we&apos;ll be in touch quickly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
