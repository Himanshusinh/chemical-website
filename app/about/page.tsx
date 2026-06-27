import Image from "next/image";
import Link from "next/link";
import ScrollBackground from "@/components/ScrollBackground";

export const metadata = {
  title: "About Us | Aditya Chemicals",
  description: "Established in 1992, Aditya Chemicals is a GMP-certified chemical manufacturer and global leader in APIs, food additives, and excipients.",
};

export default function AboutPage() {
  return (
    <>
      {/* Dynamic background scroll controller */}
      <ScrollBackground />

      {/* Hero Section */}
      <div data-bg-color="#faf8ff" className="py-10 md:py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-6 text-center md:text-left">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-label-caps uppercase select-none">
            Established 1992
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy tracking-tight mt-4">
            About <span className="text-primary italic">Aditya Chemicals</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            GMP-certified chemical manufacturer with FDA approval, bringing over 30 years of expertise in creating safe, effective, and reliable solutions for global markets.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div data-bg-color="#ffffff" className="py-12 md:py-24 px-margin-mobile md:px-margin-desktop border-t border-surface-container-highest bg-white">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-headline-md text-deep-navy font-bold">Company Overview</h2>
            <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed">
              <p>
                Established in 1992, Aditya Chemicals is a trusted name among the best pharma companies in India. We have been serving global markets with high-quality bulk drugs, excipients and Chelated minerals sectors. With over three decades of experience, we continue to support pharmaceutical, nutraceutical, food and animal nutrition industries with precision, integrity, and innovation. Not only this, as a GMP-certified chemical manufacturer with FDA approval, we bring over 30 years of expertise in creating safe, effective, and reliable solutions for global markets.
              </p>
              <p>
                With a strong foundation in pharmaceutical regulatory compliance, our company has evolved into one of India&apos;s major API and food & pharma manufacturers. We take pride in offering an extensive range of low-heavy metal excipients, custom particle size chemicals, high-purity APIs, and food additives. These are tailored to meet the rigorous quality standards of international markets. Furthermore, our manufacturing practices are built to serve clients across the feed industry, human health, and nutritional wellness sectors.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-res_Pi1noj542C (1).png"
              alt="Aditya Chemicals Laboratory Research"
              fill
              className="object-cover rounded-[3rem] shadow-2xl border border-glass-stroke"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div data-bg-color="#eef2ff" className="py-12 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
          {/* Mission Card */}
          <div className="bg-white p-6 md:p-10 rounded-xl border border-surface-container-highest shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl select-none">my_location</span>
              </div>
              <h3 className="font-headline-md text-deep-navy font-bold">Our Mission</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Our mission is to craft innovative and scientifically advanced ingredient solutions that raise the global benchmark in health and nutrition. We are committed to setting high standards in API manufacturing by combining technological excellence with regulatory adherence. Every formulation we produce reflects our promise to quality, consistency, and collaborative success.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-deep-navy text-white p-6 md:p-10 rounded-xl shadow-xl space-y-6 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 text-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl select-none">visibility</span>
              </div>
              <h3 className="font-headline-md text-white font-bold">Our Vision</h3>
              <p className="font-body-md text-white/80 leading-relaxed">
                We envision becoming a global force in wellness by providing high-purity APIs and functional ingredients that support the evolving needs of the pharmaceutical industry. As GMP-certified API manufacturers, we are driven to deliver excellence across all product verticals, from pharmaceuticals to animal nutrition and everything in between. We strive to lead purposefully, anticipate future demands, and offer dependable, future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence Section */}
      <div data-bg-color="#ffffff" className="py-12 md:py-24 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-5 order-last lg:order-first relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-inn_SOF3pgDUb8.png"
              alt="Global Operations and Shipment Purity"
              fill
              className="object-cover rounded-[3rem] shadow-2xl border border-glass-stroke"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-headline-md text-deep-navy font-bold">Global Presence</h2>
            <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed">
              <p>
                From humble beginnings to international recognition, Aditya Chemicals has become one of India&apos;s most respected API manufacturing companies. Our operations extend across multiple continents, and our huge client base depends on our FDA-approved API manufacturing capabilities, regulatory-ready documentation, and global shipment reliability.
              </p>
              <p>
                Today, our high-purity APIs and ingredient solutions are trusted by leading food and pharmaceutical manufacturers worldwide. Our commitment to continuous innovation and quality refinement sets us apart as the leading choice among feed industry manufacturers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div data-bg-color="#faf8ff" className="py-10 md:py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-deep-navy text-white rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl text-center md:text-left">
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10 max-w-4xl space-y-5 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-headline-md tracking-tight leading-tight">
              Looking to Collaborate?
            </h2>
            <p className="text-white/80 font-body-lg max-w-2xl leading-relaxed">
              Are you looking to collaborate with one of India&apos;s major manufacturers of API? Connect with Aditya Chemicals. You can trust us for compliance, consistency, and excellence. Let&apos;s create a health-forward solution together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link href="/contact">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full font-button text-button uppercase hover:scale-[0.98] transition-all duration-250 shadow-lg cursor-pointer tracking-wider font-bold">
                  Contact Us
                </button>
              </Link>
              <Link href="/contact?request=brochure">
                <button className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white rounded-full font-button text-button uppercase hover:bg-white/5 transition-all cursor-pointer">
                  Request Brochure
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
