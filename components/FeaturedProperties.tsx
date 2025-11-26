import React from "react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    name: "Pinnacl Crest, Powai",
    location: "Powai, Mumbai",
    price: "₹3.2 Cr",
    tag: "Ready to Move",
    image: "/properties/crest.jpg",
  },
  {
    id: 2,
    name: "Pinnacl Aurelia",
    location: "BKC Annexe",
    price: "₹4.8 Cr",
    tag: "Limited Inventory",
    image: "/properties/aurelia.jpg",
  },
  {
    id: 3,
    name: "Pinnacl Kane",
    location: "Worli Seafront",
    price: "₹6.5 Cr",
    tag: "Sea Facing",
    image: "/properties/kane.jpg",
  },
];

const FeaturedProperties: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-brand-bg text-brand-black py-20 border-t border-neutral-200/60"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-grey">
              Featured Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mt-2">
              Handpicked Residences
            </h2>
          </div>
          <p className="text-sm text-brand-grey max-w-md">
            Every project is personally vetted for location, construction
            quality and long-term livability before it becomes a Pinnacl
            recommendation.
          </p>
        </div>

        {/* Cards with photos */}
        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group bg-white rounded-3xl border border-neutral-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 space-y-3">
                <span className="inline-flex rounded-full border border-brand-gold/40 bg-brand-bg px-3 py-1 text-[10px] font-semibold tracking-wide text-brand-gold uppercase">
                  {property.tag}
                </span>

                <h3 className="font-serif text-lg">{property.name}</h3>

                <p className="text-xs text-brand-grey">{property.location}</p>

                <p className="text-sm font-semibold text-brand-black">
                  {property.price}
                </p>

                <button className="mt-3 text-xs font-semibold text-brand-gold underline underline-offset-4 decoration-brand-gold/40 group-hover:decoration-brand-gold">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
