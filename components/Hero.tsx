import Container from "./layout/Container";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden text-white">

      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[1.05]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <Container className="max-w-4xl space-y-6">

          <div className="brand-logo">Pinnacl Properties</div>

          <h1 className="brand-heading">
            Where Every Home{" "}
            <span className="text-[var(--color-brand-gold)]">Reflects You</span>
          </h1>

          <p className="brand-body mt-2 md:mt-3 text-neutral-200">
            Handpicked residences — curated for lifestyle &amp; comfort
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/919146238303?text=Hi,%20I%27d%20like%20to%20explore%20the%20property.%20Please%20share%20the%20details%20and%20schedule%20a%20site%20visit%2E"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-hero"
            >
              Schedule Site Visit
            </a>

            <a href="#properties" className="btn-outline">
              View Properties
            </a>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✔</span>
              <span>RERA Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)]" />
              <span>Trusted by 500+ families</span>
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
}