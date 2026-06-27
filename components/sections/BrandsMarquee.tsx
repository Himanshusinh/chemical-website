import Image from "next/image";

const row1 = [
  "/brands/br_logo3.png",
  "/brands/br_logo6.png",
  "/brands/br_logo1.png",
  "/brands/br_logo2.png",
  "/brands/br_logo4.png",
  "/brands/br_logo5.png",
  "/brands/2solvay.jpg",
  "/brands/3pandg.jpg",
  "/brands/4indchem.jpg",
  "/brands/sun-pharma.jpg"
];

const row2 = [
  "/brands/br_logo7.png",
  "/brands/br_logo8.png",
  "/brands/br_logo9.png",
  "/brands/br_logo10.png",
  "/brands/br_logo11.png",
  "/brands/br_logo12.png",
  "/brands/5naure-buety.jpg",
  "/brands/6innophos.jpg",
  "/brands/7concord.jpg",
  "/brands/8navana.jpg"
];

export default function BrandsMarquee() {
  return (
    <section className="py-8 md:py-16 overflow-hidden bg-background">
      {/* Stats Banner Block */}
      <div className="w-[95%] max-w-container-max mx-auto bg-primary py-6 md:py-12 px-3 md:px-8 text-white rounded-[1.5rem] md:rounded-[2rem] mb-8 md:mb-16 shadow-lg">
        <div className="grid grid-cols-3 gap-1 md:gap-8 text-center items-center">
          <div className="space-y-1 md:space-y-2">
            <p className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight font-headline-md">75+</p>
            <p className="text-[9px] sm:text-[11px] md:text-sm font-semibold uppercase tracking-wider text-white/80 leading-snug">No. Of Products</p>
          </div>
          <div className="space-y-1 md:space-y-2 border-x border-white/15 px-1 md:px-4">
            <p className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight font-headline-md">10+</p>
            <p className="text-[9px] sm:text-[11px] md:text-sm font-semibold uppercase tracking-wider text-white/80 leading-snug">Operational Countries</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <p className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight font-headline-md">30+</p>
            <p className="text-[9px] sm:text-[11px] md:text-sm font-semibold uppercase tracking-wider text-white/80 leading-snug">Years Of Experience</p>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-6 md:mb-8 text-center">
        <h2 className="text-xs font-label-caps tracking-[0.2em] text-primary font-bold">
          Trusted Collaboration Partnerships
        </h2>
      </div>

      {/* Marquee Wrapper with edge gradients */}
      <div
        className="relative w-full space-y-6 select-none"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
        }}
      >
        {/* Row 1: Leftward Scrolling */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused] py-2">
            {/* First sequence */}
            {row1.map((src, idx) => (
              <div key={idx} className="relative w-36 h-14 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-md border border-surface-container-highest shadow-sm">
                <Image
                  src={src}
                  alt={`Collaborator Brand ${idx}`}
                  width={140}
                  height={50}
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate sequence for loop */}
            {row1.map((src, idx) => (
              <div key={`dup-${idx}`} className="relative w-36 h-14 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-md border border-surface-container-highest shadow-sm">
                <Image
                  src={src}
                  alt={`Collaborator Brand Duplicate ${idx}`}
                  width={140}
                  height={50}
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee-right hover:[animation-play-state:paused] py-2">
            {/* First sequence */}
            {row2.map((src, idx) => (
              <div key={idx} className="relative w-36 h-14 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-md border border-surface-container-highest shadow-sm">
                <Image
                  src={src}
                  alt={`Collaborator Brand Row2 ${idx}`}
                  width={140}
                  height={50}
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate sequence for loop */}
            {row2.map((src, idx) => (
              <div key={`dup2-${idx}`} className="relative w-36 h-14 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-md border border-surface-container-highest shadow-sm">
                <Image
                  src={src}
                  alt={`Collaborator Brand Row2 Duplicate ${idx}`}
                  width={140}
                  height={50}
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
