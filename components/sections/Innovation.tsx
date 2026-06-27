import Image from "next/image";

export default function Innovation() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-12 md:py-24 bg-surface-container-low/50">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
        {/* Left Column: Milestones and Steps */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-6">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-deep-navy leading-tight">
              Advancing <span className="text-primary italic">Health</span> Through Innovation
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              At Aditya Chemicals, we believe innovation is the key to unlocking a healthier future. Our dedicated R&D team spearheads cutting-edge research.
            </p>
          </div>
          <div className="space-y-10">
            <div className="flex gap-6 group">
              <span className="text-4xl font-extrabold text-primary-fixed-dim group-hover:text-primary transition-colors select-none">
                01
              </span>
              <div>
                <h4 className="text-xl font-bold text-deep-navy mb-2">Pioneering Solutions</h4>
                <p className="text-on-surface-variant">
                  Constantly developing new and improved products to address the evolving needs of clients.
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <span className="text-4xl font-extrabold text-primary-fixed-dim group-hover:text-primary transition-colors select-none">
                02
              </span>
              <div>
                <h4 className="text-xl font-bold text-deep-navy mb-2">Uncompromising Quality</h4>
                <p className="text-on-surface-variant">
                  Leveraging the latest technologies to ensure the highest safety standards in every product.
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <span className="text-4xl font-extrabold text-primary-fixed-dim group-hover:text-primary transition-colors select-none">
                03
              </span>
              <div>
                <h4 className="text-xl font-bold text-deep-navy mb-2">Global Impact</h4>
                <p className="text-on-surface-variant">
                  Driven by our mission to improve wellness worldwide through API and premix development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 sm:pt-12">
            <div className="rounded-xl overflow-hidden shadow-lg h-[220px] sm:h-[300px] relative w-full">
              <Image
                alt="Scientist looking into a high-precision microscope in laboratory"
                src="/aditya chemicals images/home page/Advancing Health Through Innovation.png"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="bg-primary p-6 md:p-8 rounded-xl text-white">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm font-label-caps uppercase opacity-80">Safety Verification</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-surface-container-highest shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 select-none">
                analytics
              </span>
              <p className="text-on-surface-variant text-sm">
                Advanced Analytical Testing on every batch produced.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-[240px] sm:h-[350px] relative w-full">
              <Image
                alt="Capsules and powder on clean reflective surface"
                src="/aditya chemicals images/home page/home page images/magnific_pharmaceutical-ingredient_SOF3Y4uUb8.png"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
