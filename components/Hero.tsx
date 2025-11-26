import type { ReactNode } from "react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden text-white">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        {/* Optional: दूसरा format */}
        {/* <source src="/video/hero.webm" type="video/webm" /> */}
      </video>

      {/* 🔹 हल्की dark overlay, ताकि text readable रहे */}
      <div className="absolute inset-0 bg-black/40 -z-5" />

      {/* 🔹 Actual hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 md:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
          Pinnacl Properties
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Where Every Home <br />
          <span className="text-amber-300">Reflects You</span>
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-neutral-100/80">
          Handpicked residences curated for lifestyle and comfort, crafted for
          Mumbai&apos;s most discerning buyers.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-medium text-black hover:bg-amber-300 transition">
            Schedule a Visit
          </button>
          <button className="rounded-full border border-amber-300/80 px-6 py-3 text-sm font-medium text-amber-100 hover:bg-amber-300/10 transition">
            View Properties
          </button>
        </div>
      </div>
    </section>
  );
}
