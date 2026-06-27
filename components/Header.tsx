"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerNavItems } from "@/data/navigation";

const productDropdownItems = [
  { name: "Amino Acids and Derivatives", href: "/product-category/amino-acids-derivatives" },
  { name: "Chelated Minerals", href: "/product-category/minerals" },
  { name: "Vitamins & derivatives", href: "/product-category/vitamins-derivatives" },
  { name: "Excipients", href: "/product-category/excipients" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-gutter py-4 bg-white/70 backdrop-blur-xl border border-glass-stroke rounded-full mt-6 mx-auto w-[90%] max-w-container-max shadow-sm transition-all duration-300 ease-in-out">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Aditya Chemicals"
            title="Aditya Chemicals"
            width={160}
            height={44}
            className="h-10 w-auto object-contain rounded bg-white p-1"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex gap-6 items-center">
        {headerNavItems.map((item) => {
          const isActive = pathname === item.href;
          if (item.name === "Products") {
            return (
              <div key={item.name} className="relative group py-2">
                <Link
                  href={item.href}
                  className={`font-button text-button uppercase transition-all duration-300 pb-1 text-sm flex items-center gap-1 ${isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                    }`}
                >
                  {item.name}
                  <span className="material-symbols-outlined text-base select-none transition-transform duration-200 group-hover:rotate-180">
                    keyboard_arrow_down
                  </span>
                </Link>
                {/* Hover Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="bg-white border border-surface-container-highest shadow-2xl rounded-2xl p-6 w-72 flex flex-col gap-4 text-left">
                    {productDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="font-button text-xs tracking-wider text-deep-navy font-extrabold hover:text-primary transition-all hover:translate-x-1 uppercase block"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`font-button text-button uppercase transition-all duration-300 pb-1 text-sm ${isActive
                ? "text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Brochure CTA Button */}
      <div className="hidden xl:flex items-center gap-4">
        <Link href="/contact?request=brochure">
          <button className="font-button text-button uppercase px-8 py-3 bg-primary text-white rounded-full hover:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer tracking-wider font-bold">
            Brochure
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden text-on-surface flex items-center justify-center p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Nav dropdown */}
      {isOpen && (
        <div className="absolute top-[75px] left-0 right-0 mx-auto w-full bg-white border border-glass-stroke rounded-2xl shadow-xl p-6 flex flex-col gap-4 xl:hidden z-50">
          {headerNavItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.name === "Products") {
              return (
                <div key={item.name} className="flex flex-col gap-2 border-b border-surface-container-highest pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-button text-button uppercase transition-all duration-300 py-2 ${isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </Link>
                  {/* Nested Sub-links on mobile */}
                  <div className="pl-4 flex flex-col gap-3 pb-2 pt-1">
                    {productDropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="font-button text-xs tracking-wider text-deep-navy font-extrabold hover:text-primary uppercase block"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-button text-button uppercase transition-all duration-300 py-2 border-b border-surface-container-highest ${isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/contact?request=brochure" onClick={() => setIsOpen(false)} className="w-full mt-2">
            <button className="w-full font-button text-button uppercase px-8 py-4 bg-primary text-white rounded-full shadow-md cursor-pointer text-center tracking-wider font-bold">
              Brochure
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
