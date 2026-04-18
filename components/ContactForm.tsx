"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please describe your project (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  "Residential – New Construction",
  "Residential – Remodel / Addition",
  "Residential – Panel Upgrade",
  "Residential – Repairs & Troubleshooting",
  "Commercial – New Construction",
  "Commercial – Tenant Improvement",
  "Commercial – Maintenance",
  "EV Charger Installation",
  "Hot Tub / Spa Wiring",
  "Generator Installation",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error || "Something went wrong. Please call us directly.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please call us at 208-421-2123.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-[#2e4a6b] mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600 mb-6 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within one business
          day. For urgent work, give us a call.
        </p>
        <a
          href="tel:+12084212123"
          className="flex items-center gap-2 bg-[#2e4a6b] hover:bg-[#243d59] text-white font-heading font-bold uppercase tracking-wide px-6 py-3 rounded transition-colors duration-200 cursor-pointer"
        >
          <Phone size={18} />
          208-421-2123
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#2e4a6b] focus:border-transparent transition-colors duration-200";
  const errorClass = "mt-1 text-xs text-red-600";
  const labelClass = "block text-sm font-semibold text-slate-700 mb-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className={inputClass}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="208-555-0100"
            className={inputClass}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
          {...register("email")}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project Type <span className="text-red-500">*</span>
        </label>
        <select
          id="projectType"
          className={inputClass}
          {...register("projectType")}
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type…
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className={errorClass}>{errors.projectType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project — location, scope, timeline, any specific concerns…"
          className={inputClass}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#f5c800] hover:bg-[#d4ac00] disabled:opacity-60 text-[#2e4a6b] font-heading font-bold uppercase tracking-wide text-base px-6 py-4 rounded transition-colors duration-200 cursor-pointer"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-slate-500 text-center">
        Prefer to call?{" "}
        <a
          href="tel:+12084212123"
          className="text-[#2e4a6b] font-semibold hover:underline cursor-pointer"
        >
          208-421-2123
        </a>
      </p>
    </form>
  );
}
