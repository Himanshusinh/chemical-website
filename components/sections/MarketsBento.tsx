import Link from "next/link";
import { marketSectors } from "@/data/markets";

export default function MarketsBento() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-12 md:py-24 bg-background">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
          <div className="space-y-4">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-deep-navy">
              Core Industry <span className="text-primary italic">Markets</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl font-body-lg">
              Supplying innovative solutions across the most critical health and nutrition sectors globally.
            </p>
          </div>
          <Link href="/products">
            <button className="px-6 py-2.5 md:px-8 md:py-3 border border-primary text-primary rounded-full font-button text-button uppercase hover:bg-primary/5 transition-all cursor-pointer">
              Explore All Products
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
          {marketSectors.map((sector) => {
            if (sector.slug === "bespoke-formulations") {
              return (
                <div
                  key={sector.slug}
                  className={`bento-card rounded-xl p-6 md:p-10 shadow-xl relative overflow-hidden flex items-center col-span-1 ${sector.accentClass}`}
                >
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                    <div>
                      <h3 className="font-headline-md text-headline-md mb-4">{sector.name}</h3>
                      <p className="text-white/80">{sector.description}</p>
                    </div>
                    <div className="flex justify-start md:justify-end">
                      <Link href="/contact">
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-primary rounded-full font-button text-button uppercase shadow-lg hover:scale-95 transition-all cursor-pointer">
                          {sector.linkText}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute -right-20 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>
              );
            }

            const isDark = sector.accentClass.includes("text-white");
            return (
              <div
                key={sector.slug}
                className={`bento-card rounded-xl p-6 md:p-10 border shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[360px] md:min-h-[400px] col-span-1 ${sector.accentClass}`}
              >
                <div className="relative z-10 max-w-md">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                      isDark ? "bg-white/10 text-primary-fixed" : "bg-primary-container/10 text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined">{sector.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4">{sector.name}</h3>
                  <p className={isDark ? "text-white/70" : "text-on-surface-variant"}>
                     {sector.description}
                  </p>
                </div>

                <Link
                  href="/products"
                  className={`font-bold mt-8 flex items-center gap-2 w-fit ${
                    isDark ? "text-primary-fixed hover:text-white" : "text-primary hover:text-primary-fixed-dim"
                  } transition-colors`}
                >
                  {sector.linkText}
                  <span className="material-symbols-outlined text-sm">
                    {sector.slug === "nutritional-supplements" ? "north_east" : "arrow_forward"}
                  </span>
                </Link>

                {sector.bgIcon && (
                  <div className="absolute right-0 bottom-0 w-1/2 h-3/4 opacity-10 pointer-events-none select-none flex items-end justify-end">
                    <span className="material-symbols-outlined text-[200px] text-primary leading-none">
                      {sector.bgIcon}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
