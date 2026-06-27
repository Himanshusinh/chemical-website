import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-gutter md:px-margin-desktop bg-deep-navy text-white text-sm mt-12 rounded-t-[2.5rem]">
      {/* 5-Column Grid */}
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-bento-gap">

        {/* Column 1: Brand Logo & Intro */}
        <div className="space-y-6 md:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Aditya Chemicals"
              title="Aditya Chemicals"
              width={180}
              height={50}
              className="h-12 w-auto object-contain rounded bg-white p-1"
            />
          </Link>
          <p className="text-surface-variant/85 text-xs leading-relaxed max-w-[280px]">
            Aditya Chemicals welcomes your interest in its products, quality, and solutions. Please feel free to contact us by the method of your choice.
          </p>
        </div>

        {/* Column 2: Manufacturing & Warehouse */}
        <div className="space-y-6 md:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <h4 className="font-bold text-surface-bright uppercase text-xs tracking-wider select-none">
              {footerLinks.manufacturingPlant.title}
            </h4>
            <div className="flex items-start gap-2 text-xs text-surface-variant/80 leading-relaxed">
              <span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5 select-none">
                location_on
              </span>
              <span>{footerLinks.manufacturingPlant.address}</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-surface-bright uppercase text-xs tracking-wider select-none">
              {footerLinks.usaWarehouse.title}
            </h4>
            <div className="flex items-start gap-2 text-xs text-surface-variant/80 leading-relaxed">
              <span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5 select-none">
                location_on
              </span>
              <span>{footerLinks.usaWarehouse.address}</span>
            </div>
          </div>
        </div>

        {/* Column 3: Our Company */}
        <div className="space-y-4">
          <h4 className="font-bold text-surface-bright uppercase text-xs tracking-wider select-none">
            {footerLinks.company.title}
          </h4>
          <ul className="space-y-3">
            {footerLinks.company.items.map((item) => (
              <li key={item.name}>
                <Link
                  className="text-surface-variant/80 hover:text-white text-xs transition-all hover:translate-x-1 inline-block"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Our Products */}
        <div className="space-y-4">
          <h4 className="font-bold text-surface-bright uppercase text-xs tracking-wider select-none">
            {footerLinks.products.title}
          </h4>
          <ul className="space-y-3">
            {footerLinks.products.items.map((item) => (
              <li key={item.name}>
                <Link
                  className="text-surface-variant/80 hover:text-white text-xs transition-all hover:translate-x-1 inline-block"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Us */}
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-surface-bright uppercase text-xs tracking-wider select-none">
            {footerLinks.contact.title}
          </h4>
          <div className="space-y-4 text-xs text-surface-variant/80">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed text-sm select-none">call</span>
              <a href={`tel:${footerLinks.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {footerLinks.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed text-sm select-none">mail</span>
              <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-white transition-colors hover:underline">
                {footerLinks.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-primary-fixed text-sm mt-0.5 select-none">
                location_on
              </span>
              <span>{footerLinks.contact.address}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface-variant/65">
        <p>© {new Date().getFullYear()} Aditya Chemicals. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link className="hover:text-white transition-colors" href="/privacy-policy">
            Privacy Policy
          </Link>
          <span className="text-white/10 select-none">|</span>
          <Link className="hover:text-white transition-colors" href="/terms-of-use">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
