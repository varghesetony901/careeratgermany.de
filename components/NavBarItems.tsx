"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./LocaleSwitcher";

const NavBarItems = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const params = useSearchParams();

  const MenuItemsEn = [
    { name: "home", link: `/${locale}` },
    { name: "services", link: `/${locale}/services` },
    { name: "blog", link: `/${locale}/blogs` },
    { name: "contact", link: `/${locale}/contact` },
    { name: "gallery", link: `/${locale}/gallery` },
  ];
  const MenuItemsDe = [
    { name: "home", link: `/${locale}` },
    { name: "Dienste", link: `/${locale}/services` },
    { name: "blog", link: `/${locale}/blogs` },
    { name: "Kontakt", link: `/${locale}/contact` },
    { name: "Galerie", link: `/${locale}/gallery` },
  ];

  let content: JSX.Element;

  if (
    pathname.startsWith(`/${locale}/auth`) ||
    pathname.startsWith(`/${locale}/dashboard`)
  ) {
    content = <></>;
  } else {
    content = (
      <nav>
        <div className="flex h-16 sm:h-20 items-center justify-between ">
          <div className="">
            <Link href={`/${locale}`} className="hidden sm:flex">
              <Icons.logo />
            </Link>
            <Link href={`/${locale}`} className="sm:hidden">
              <Icons.smallLogo />
            </Link>
          </div>

          {/* Menu items */}
          <div className="lg:flex divide-x hidden ">
          {locale === "en" ? (
            MenuItemsEn.map((menu) => (
              <Link
                href={menu.link}
                key={menu.name}
                className={cn(
                  "px-5 font-semibold hover:text-red-600 capitalize",
                  { "text-red-700": pathname.includes(menu.name) }
                )}
              >
                {menu.name}
              </Link>
            ))
          ) : (
            MenuItemsDe.map((menu) => (
              <Link
                href={menu.link}
                key={menu.name}
                className={cn(
                  "px-5 font-semibold hover:text-red-600 capitalize",
                  { "text-red-700": pathname.includes(menu.name) }
                )}
              >
                {menu.name}
              </Link>
            ))
          )}
            
          </div>
          <div className="flex gap-4 items-center justify-center">
            <LocaleSwitcher />
            <div className="lg:hidden ">
              <MobileNav locale={locale} />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return content;
};

export default NavBarItems;
