import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/data/products";

export default function FeaturedCategories() {
  // Get the 4 parent categories
  const parentCategories = productCategories.filter(cat => !cat.parentCategorySlug);

  return (
    <section className="py-16 bg-white px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold select-none uppercase tracking-wider">
            Comprehensive Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy font-headline-md tracking-tight">
            Our Core <span className="text-primary italic">Product Segments</span>
          </h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto leading-relaxed text-sm">
            Aditya Chemicals manufactures active pharmaceutical ingredients (APIs), bioavailable mineral chelates, and high-performance excipients according to strict global compliance protocols.
          </p>
        </div>

        {/* Clean Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {parentCategories.map((category) => (
            <div
              key={category.slug}
              className="bg-white rounded-2xl border border-surface-container-highest overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full group"
            >
              {/* Product Category Graphic */}
              <div className="relative w-full h-[180px] bg-surface-container-low overflow-hidden">
                <Image
                  src={category.cardImagePath || category.bannerPath}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-deep-navy leading-snug group-hover:text-primary transition-colors font-headline-md">
                    {category.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>
                <div>
                  <Link href={`/product-category/${category.slug}`}>
                    <button className="w-full py-2.5 bg-primary hover:bg-vibrant-azure text-white rounded-full font-button text-xs uppercase shadow transition-colors cursor-pointer font-bold tracking-wider text-center">
                      Explore Segment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
