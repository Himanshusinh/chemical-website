import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-container-max mx-auto bg-deep-navy rounded-[2rem] p-8 md:p-24 text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-azure rounded-full blur-[120px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-5 md:space-y-8">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-white">
            Ready to innovate <br />
            with us?
          </h2>
          <p className="text-white/70 font-body-lg">
            We build partnerships founded on collaborative innovation. Trusted globally. Crafted precisely. Aditya Chemicals - Powering Purity for Over 30 Years.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="px-8 py-4 md:px-12 md:py-6 bg-vibrant-azure text-white rounded-full font-button text-button uppercase shadow-2xl hover:scale-105 transition-transform cursor-pointer">
              Connect with our Experts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
