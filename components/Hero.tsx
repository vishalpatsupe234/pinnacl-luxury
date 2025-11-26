import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen text-white bg-brand-black overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay so text clearly dikhe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Content (Container styling yahi pe hai) */}
      <div className="relative z-10 flex min-h-screen items-center mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <p className="tracking-[0.25em] uppercase text-sm text-brand-gold">
            Pinnacl Properties
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Where Every Home
            <br />
            Reflects You
          </h1>

          <p className="text-base md:text-lg text-neutral-200 max-w-xl">
            Handpicked residences curated for lifestyle and comfort,
            crafted for Mumbai&apos;s most discerning buyers.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-8 py-3 rounded-full bg-brand-gold text-brand-black text-sm font-semibold tracking-wide hover:bg-brand-gold/90 transition">
              Schedule a Visit
            </button>
            <button className="px-8 py-3 rounded-full border border-brand-gold text-sm font-semibold tracking-wide hover:bg-white/5 transition">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;