"use client";
import { Locale } from "@/i18n.config";
import { MenuSquare, XCircle } from "lucide-react";
import { RevealList, RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MobileNav = ({ locale }: { locale: Locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const MenuItemsEn = [
    { name: "home", link: `/${locale}` },
    { name: "services", link: `/${locale}/services` },
    { name: "blog", link: `/${locale}/blogs` },
    { name: "contact", link: `/${locale}/contact` },
    { name: "gallery", link: `/${locale}/gallery` },
  ];
  const MenuItemsDe = [
    { name: "Startseite", link: `/${locale}` },
    { name: "Dienstleistungen", link: `/${locale}/services` },
    { name: "Blog", link: `/${locale}/blogs` },
    { name: "Kontakt", link: `/${locale}/contact` },
    { name: "Galerie", link: `/${locale}/gallery` },
  ];

  const handleClickOutside = (event: Event) => {
    // Check if the clicked element is outside the menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="" ref={menuRef}>
      <MenuSquare
        size={32}
        strokeWidth={1}
        className="cursor-pointer mr-2"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <RevealWrapper
          easing="cubic-bezier(0.5, 0, 0, 1)"
          delay={0}
          origin="top"
          className={"invisible"}
        >
          <div className="bg-white w-56 sm:w-72 absolute z-50 right-0 -top-8 flex flex-col gap-6 pt- pb-6 rounded-b-lg items-end shadow-lg lg:hidden ">
            <XCircle
              strokeWidth={1}
              size={32}
              className="cursor-pointer mr-2 bg-white"
              onClick={() => setIsOpen(false)}
            />

            <RevealList
              interval={60}
              delay={0}
              origin="left"
              className={"flex flex-col gap-4 text-right px-6 mt-2"}
            >
              {locale === "en"
                ? MenuItemsEn.map((menu) => (
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href={menu.link}
                      key={menu.name}
                      className="font-semibold capitalize"
                    >
                      {menu.name}
                    </Link>
                  ))
                : MenuItemsDe.map((menu) => (
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href={menu.link}
                      key={menu.name}
                      className="font-semibold capitalize"
                    >
                      {menu.name}
                    </Link>
                  ))}
            </RevealList>
          </div>
        </RevealWrapper>
      )}
    </div>
  );
};

export default MobileNav;
