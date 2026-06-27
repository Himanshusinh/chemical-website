import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

// Curate a diverse selection of 14 representative products across all categories
const featuredProducts = [
  products.find(p => p.slug === "glycine"),
  products.find(p => p.slug === "arginine-aspartate-2"),
  products.find(p => p.slug === "calcium-taurinate-2"),
  products.find(p => p.slug === "calcium-lactate-gluconate-2"),
  products.find(p => p.slug === "copper-gluconate-2"),
  products.find(p => p.slug === "ferrous-bis-glycinate-2"),
  products.find(p => p.slug === "magnesium-taurinate-2"),
  products.find(p => p.slug === "magnesium-bis-glycinate-2"),
  products.find(p => p.slug === "potassium-gluconate-2"),
  products.find(p => p.slug === "zinc-citrate-2"),
  products.find(p => p.slug === "riboflavin-sodium-5phosphate"),
  products.find(p => p.slug === "disodium-edetate-2")
].filter(Boolean); // Filter out any undefined values just in case

export default function ProductsMarquee() {
  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-6 md:mb-10 text-center space-y-3">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold select-none uppercase tracking-wider">
          Compound Catalog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-deep-navy tracking-tight font-headline-md">
          Explore Our <span className="text-primary italic">Featured Products</span>
        </h2>
        <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto leading-relaxed text-sm">
          Browse our high-purity product range. Hover to pause the scroll, and click any card to view compliance specifications.
        </p>
      </div>

      {/* Marquee Wrapper with edge gradients */}
      <div className="relative w-full select-none">
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused] py-6 px-4">
            {/* First sequence */}
            {featuredProducts.map((product) => {
              if (!product) return null;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="relative w-64 h-96 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-md group hover:scale-[1.05] transition-all duration-300 cursor-pointer block"
                >
                  {/* Full-bleed background image */}
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                  {/* Dark gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />

                  {/* Overlaid content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white space-y-2 z-10 whitespace-normal">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white select-none bg-primary/30 backdrop-blur w-fit px-2 py-0.5 rounded">
                      {product.categoryTag.split(" ")[0]}
                    </span>
                    <h3 className="text-base font-bold font-headline-md leading-snug text-white transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-white/70 font-mono">
                      CAS: {product.casNumber}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* Duplicate sequence for loop */}
            {featuredProducts.map((product) => {
              if (!product) return null;
              return (
                <Link
                  key={`dup-${product.slug}`}
                  href={`/products/${product.slug}`}
                  className="relative w-64 h-96 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-md group hover:scale-[1.05] transition-all duration-300 cursor-pointer block"
                >
                  {/* Full-bleed background image */}
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                  {/* Dark gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />

                  {/* Overlaid content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white space-y-2 z-10 whitespace-normal">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white select-none bg-primary/30 backdrop-blur w-fit px-2 py-0.5 rounded">
                      {product.categoryTag.split(" ")[0]}
                    </span>
                    <h3 className="text-base font-bold font-headline-md leading-snug text-white transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-white/70 font-mono">
                      CAS: {product.casNumber}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
