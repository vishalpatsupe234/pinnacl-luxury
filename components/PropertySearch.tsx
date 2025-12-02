"use client";

import { useState } from "react";

const quickTags = [
  { id: "near-station", label: "Near Station" },
  { id: "hotspot", label: "City Hotspot" },
  { id: "luxury", label: "Luxury" },
  { id: "sea-facing", label: "Sea Facing" },
];

export default function PropertySearch() {
  const [type, setType] = useState<"res" | "comm">("res");
  const [location, setLocation] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Abhi ke liye sirf console – baad me isko real filter / API se jod sakte ho
    console.log({
      type,
      location,
      activeTag,
    });

    // Optional: yaha se #projects section tak scroll bhi kar sakte ho
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="lux-section border-t border-neutral-200/60 py-6">
      <div className="section-shell">
        <form
          onSubmit={handleSubmit}
          className="
            w-full rounded-3xl bg-white/90 
            border border-[rgba(230,226,216,0.9)]
            shadow-[0_18px_45px_rgba(0,0,0,0.08)]
            px-4 md:px-6 py-4
            flex flex-col gap-4
            md:flex-row md:items-center md:gap-6
          "
        >
          {/* 1) Residential / Commercial toggle */}
          <div className="flex items-center gap-2 md:border-r md:border-neutral-200/80 md:pr-4">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-grey hidden md:inline">
              Type
            </span>
            <div className="inline-flex rounded-full bg-[#F3F1EB] p-1">
              <button
                type="button"
                onClick={() => setType("res")}
                className={`
                  px-3 py-1.5 text-xs font-medium rounded-full
                  ${type === "res"
                    ? "bg-black text-white shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
                    : "text-brand-grey"
                  }
                `}
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => setType("comm")}
                className={`
                  px-3 py-1.5 text-xs font-medium rounded-full
                  ${type === "comm"
                    ? "bg-black text-white shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
                    : "text-brand-grey"
                  }
                `}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* 2) Location / Area input */}
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-[11px] uppercase tracking-[0.18em] text-brand-grey">
              Location / Station
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Powai, Thane station, BKC, Worli…"
              className="
                w-full rounded-2xl border border-neutral-200/80 
                px-3 py-2 text-sm
                bg-white/70
                focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/60
              "
            />
          </div>

          {/* 3) Quick tags */}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-grey">
              Filters
            </span>
            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() =>
                    setActiveTag((prev) => (prev === tag.id ? null : tag.id))
                  }
                  className={`
                    px-3 py-1.5 rounded-full text-[11px] font-medium
                    border
                    ${
                      activeTag === tag.id
                        ? "bg-black text-white border-black"
                        : "bg-[#F4F2EC] text-brand-grey border-transparent hover:border-neutral-300"
                    }
                  `}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4) Search button */}
          <div className="flex justify-end md:justify-center">
            <button
              type="submit"
              className="
                btn-primary-hero
                px-7 py-3 text-xs md:text-sm
                whitespace-nowrap
              "
            >
              Show Matching Properties
            </button>
          </div>
        </form>

        {/* Chhota sa reassurance line (optional) */}
        <p className="mt-3 text-[11px] text-brand-grey text-center md:text-left">
          No spam, no random listings – sirf curated options based on your filters.
        </p>
      </div>
    </section>
  );
}