import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-6 md:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative z-10 space-y-4 md:space-y-6">
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

        <div className="relative mt-8 lg:mt-0 w-full max-w-[520px] mx-auto lg:ml-auto">
          {/* Main Card (Back) */}
          <div className="w-[85%] ml-auto relative z-0 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] border border-glass-stroke">
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

          {/* Secondary Overlapping Card (Front) */}
          <div className="absolute -bottom-8 left-0 w-[42%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 hidden sm:block">
            <Image
              alt="Chemical crystallization close up"
              src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-res_Pi1noj542C (1).png"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>

          {/* Floating Data Badges */}
          <div className="absolute -left-6 top-[15%] animate-float z-20">
            <div className="bg-white/90 backdrop-blur shadow-xl p-3 md:p-4 rounded-xl border border-surface-container-highest">
              <p className="text-primary font-bold text-2xl md:text-3xl leading-none">41+</p>
              <p className="text-on-surface-variant font-label-caps uppercase text-[9px] md:text-[10px] mt-1">Products</p>
            </div>
          </div>

          <div className="absolute -right-6 bottom-[25%] animate-float z-20" style={{ animationDelay: "-2s" }}>
            <div className="bg-white/90 backdrop-blur shadow-xl p-3 md:p-4 rounded-xl border border-surface-container-highest">
              <p className="text-primary font-bold text-2xl md:text-3xl leading-none">10+</p>
              <p className="text-on-surface-variant font-label-caps uppercase text-[9px] md:text-[10px] mt-1">Countries</p>
            </div>
          </div>

          <div className="absolute left-[30%] -bottom-6 animate-float z-20" style={{ animationDelay: "-4s" }}>
            <div className="bg-white/90 backdrop-blur shadow-xl p-3 md:p-4 rounded-xl border border-surface-container-highest">
              <p className="text-primary font-bold text-2xl md:text-3xl leading-none">30+</p>
              <p className="text-on-surface-variant font-label-caps uppercase text-[9px] md:text-[10px] mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
