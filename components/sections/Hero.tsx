import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-8 md:py-24 overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative z-10 space-y-5 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 text-primary rounded-full font-label-caps uppercase text-[10px] md:text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Powering Purity for Over 30 Years
          </div>
          <h1 className="font-headline-lg-mobile md:font-display-lg text-deep-navy leading-none">
            Precision Chemistry. <br />
            <span className="text-primary italic">High-Performance</span> <br />
            Global Impact.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Recognized among the top API manufacturing companies globally, delivering pharmaceutical and nutrition excellence since 1992. We build the chemistry that performs.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <button className="px-6 py-3.5 md:px-10 md:py-5 bg-vibrant-azure text-white rounded-full font-button text-button uppercase shadow-xl hover:scale-95 transition-all cursor-pointer">
                Let&apos;s Connect
              </button>
            </Link>
            <Link href="/products">
              <button className="px-6 py-3.5 md:px-10 md:py-5 border-2 border-primary-fixed text-primary rounded-full font-button text-button uppercase hover:bg-primary-fixed/20 transition-all flex items-center gap-2 cursor-pointer">
                Our Products
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          {/* Lab image with curved mask */}
          <div className="relative z-0 rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-[500px] mx-auto lg:max-w-none">
            <Image
              alt="Hyper-realistic lab environment"
              src="/aditya chemicals images/home page/home page images/magnific_massive-pharmaceutical-ma_mCc5jr4hJQ.png"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent"></div>
          </div>

          {/* Floating Data Badges */}
          <div className="absolute -left-4 md:-left-12 top-1/4 animate-float z-20">
            <div className="bg-white/90 backdrop-blur shadow-xl p-4 md:p-6 rounded-xl border border-surface-container-highest">
              <p className="text-primary font-bold text-headline-md leading-none">41+</p>
              <p className="text-on-surface-variant font-label-caps uppercase text-[10px] mt-1">Products</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-1/3 animate-float z-20" style={{ animationDelay: "-2s" }}>
            <div className="bg-white/90 backdrop-blur shadow-xl p-4 md:p-6 rounded-xl border border-surface-container-highest">
              <p className="text-primary font-bold text-headline-md leading-none">10+</p>
              <p className="text-on-surface-variant font-label-caps uppercase text-[10px] mt-1">Countries</p>
            </div>
          </div>

          <div className="absolute left-1/4 -bottom-4 md:-bottom-8 animate-float z-20" style={{ animationDelay: "-4s" }}>
            <div className="bg-white/90 backdrop-blur shadow-xl p-4 md:p-6 rounded-xl border border-surface-container-highest">
              <p className="text-primary font-bold text-headline-md leading-none">30+</p>
              <p className="text-on-surface-variant font-label-caps uppercase text-[10px] mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
