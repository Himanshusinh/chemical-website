import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollBackground from "@/components/ScrollBackground";
import { getCategoryBySlug, getProductsByCategory, productCategories } from "@/data/products";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} | Aditya Chemicals`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const isMineralsParent = categorySlug === "minerals";
  const subCategories = productCategories.filter(cat => cat.parentCategorySlug === categorySlug);
  const categoryProducts = getProductsByCategory(categorySlug);

  return (
    <>
      <ScrollBackground />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant select-none">
          <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
          <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
          <Link href="/products" className="hover:text-primary transition-colors font-medium">Products</Link>
          {category.parentCategorySlug && (
            <>
              <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
              <Link href="/product-category/minerals" className="hover:text-primary transition-colors font-medium">
                Chelated Minerals
              </Link>
            </>
          )}
          <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
          <span className="text-on-surface font-semibold">{category.name}</span>
        </nav>

        {/* Hero Banner Header */}
        <div className="relative w-full h-[280px] md:h-[360px] rounded-[2.5rem] overflow-hidden shadow-xl border border-glass-stroke bg-deep-navy">
          <Image
            src={category.bannerPath}
            alt={`${category.name} Banner`}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-3 z-10 max-w-3xl">
            <span className="px-3 py-1 bg-white/20 backdrop-blur text-white rounded-full text-xs font-semibold select-none uppercase tracking-wider">
              {category.parentCategorySlug ? "Chelated Minerals Sub-Category" : "Product Category"}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight font-headline-md">
              {category.name}
            </h1>
            <p className="text-white/80 font-body-md text-sm md:text-base leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        {/* Level 2 Grid Sections */}
        {isMineralsParent ? (
          /* Minerals parent view: list subcategories */
          <div data-bg-color="#ffffff" className="space-y-6 md:bg-white md:rounded-3xl p-0 md:p-8 md:shadow-sm md:border md:border-surface-container-highest">
            <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
              Mineral Sub-categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {subCategories.map((subCat) => (
                <div
                  key={subCat.slug}
                  className="bg-white rounded-2xl border border-surface-container-highest overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="relative w-full h-[180px] bg-surface-container-low">
                    <Image
                      src={subCat.cardImagePath || subCat.bannerPath}
                      alt={subCat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-deep-navy leading-snug">{subCat.name}</h3>
                      <p className="text-xs text-on-surface-variant mt-1">Bioavailable Mineral Formulations</p>
                    </div>
                    <Link href={`/product-category/${subCat.slug}`}>
                      <button className="w-full py-2.5 bg-primary hover:bg-vibrant-azure text-white rounded-full font-button text-xs uppercase shadow transition-colors cursor-pointer font-bold tracking-wider">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Product listing view */
          <div data-bg-color="#ffffff" className="space-y-6 md:bg-white md:rounded-3xl p-0 md:p-8 md:shadow-sm md:border md:border-surface-container-highest">
            <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
              Available Compounds ({categoryProducts.length})
            </h2>
            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="bg-white rounded-2xl border border-surface-container-highest overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                  >
                    {/* Small product image display */}
                    <div className="relative w-full h-[180px] bg-surface-container-low">
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-base font-bold text-deep-navy leading-snug font-headline-md">{product.name}</h3>
                        <p className="text-xs text-primary font-mono font-semibold mt-1">CAS: {product.casNumber}</p>
                      </div>
                      <div className="space-y-2">
                        <Link href={`/products/${product.slug}`}>
                          <button className="w-full py-2 bg-vibrant-azure hover:bg-primary text-white rounded-full font-button text-xs uppercase shadow transition-colors cursor-pointer font-bold">
                            View Details
                          </button>
                        </Link>
                        <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>
                          <button className="w-full py-2 border border-surface-container-highest text-on-surface-variant hover:bg-surface-container-low rounded-full font-button text-xs uppercase transition-colors cursor-pointer font-bold">
                            Quick Inquiry
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-on-surface-variant">
                No products found in this category.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
