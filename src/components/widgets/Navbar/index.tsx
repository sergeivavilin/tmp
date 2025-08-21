'use client'
import cn from "@/src/utils/tw-merge";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/src/config/site";

import { CiPhone } from "react-icons/ci";
import LogoWithText from "../../shared/Logo/Logo";
import isMobile from "@/src/utils/is_mobile";
import navbar from "@/src/content/sections/navbar";
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';


  const handleScrollPositionChange = (position: number) => {
    if (!isHomePage) return; // Только на главной странице реагируем на скролл

    if (position > 200) setIsScrolled(true);
    else setIsScrolled(false);
  }

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true); // На всех остальных страницах — Navbar всегда как будто "проскроллен"
    }
  }, [isHomePage]);


  return (
    <HeroNavbar
      maxWidth="full"
      // shouldHideOnScroll 
      onScrollPositionChange={handleScrollPositionChange}
      isBlurred={isScrolled || isMobile()}
      onMenuOpenChange={setIsMenuOpen}
      className={cn("transition-colors", isScrolled ? "" : "lg:bg-transparent")}
    >

      <NavbarBrand >
        {/* <LogoWithText className={isScrolled ? "lg:text-zinc-900" : "lg:text-white"} /> */}
        <LogoWithText className={"lg:text-white"} />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbar.navItems.map((item, index) => (
          <NavbarItem key={item.href + 'index' + index} >
            <Link color="foreground" className={isScrolled ? '' : 'lg:text-white text-lg'} href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {navbar.navContactItems.map((item, index) => 
        <NavbarItem key={item.href  + 'uniq' + index }>
          <Link 
            color={isScrolled ? "foreground" : "primary"} 
            href={`mailto:${siteConfig.contact.email}`} 
            className="hidden lg:flex justify-center items-center text-lg">
            {<item.icon />}
          </Link>
        </NavbarItem>)}

        <NavbarItem className="hidden lg:flex">
          <Link color={isScrolled ? "foreground" : "primary"} underline="hover" href={`tel:${siteConfig.contact.phoneFormatted}`}>
            <CiPhone className="mr-2" />
            {siteConfig.contact.phone}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {navbar.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href="#"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
