import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-12 md:py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        {/* Left Side: Image container (swapped on desktop to appear first) */}
        <div className="order-2 md:order-1 relative">
          <div className="rounded-[4rem] overflow-hidden shadow-xl aspect-square w-full relative">
            <Image
              alt="Cinematic macro shot of chemical crystallization in a pristine laboratory"
              src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-res_Pi1noj542C (1).png"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
        </div>

        {/* Right Side: Text & Features content */}
        <div className="order-1 md:order-2 space-y-5 md:space-y-8">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-deep-navy">
            Chemistry that <br />
            <span className="text-primary italic">Performs.</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Founded in 1992, Aditya Chemicals is a pioneer in India, established to meet the growing demand for value-based solutions in the pharmaceutical and nutrition sectors. We proudly serve as a GMP-certified chemical manufacturer and a global leader.
          </p>
          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-surface-container-highest">
              <span className="material-symbols-outlined text-primary text-3xl select-none">
                verified
              </span>
              <div>
                <h4 className="font-bold text-on-surface">GMP-Certified Standards</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  Adhering to the highest purity levels across our state-of-the-art facilities.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-surface-container-highest">
              <span className="material-symbols-outlined text-primary text-3xl select-none">
                science
              </span>
              <div>
                <h4 className="font-bold text-on-surface">Advanced R&D Hub</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  Continuous investment in research to develop next-gen compounds.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-button uppercase border-b-2 border-primary pb-1 hover:gap-4 transition-all"
          >
            Learn more about our journey
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
