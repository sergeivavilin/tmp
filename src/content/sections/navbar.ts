import { siteConfig, SiteConfig } from "@/src/config/site"

import { PiEnvelope } from "react-icons/pi";
import { PiWhatsappLogo } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";

const navbar = {
	navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "О нас",
      href: "/#about",
    },
    {
      label: "Услуги",
      href: "/#services",
    },
    {
      label: "Работы",
      href: "/#works",
    },
    {
      label: "Отзывы",
      href: "/#testimonials",
    },
    {
      label: "Контакты",
      href: "/#contacts",
    },
  ],
  navMenuItems: [
    {
      label: "О нас",
      href: "/#about",
    },
    {
      label: "Услуги",
      href: "/#services",
    },
    {
      label: "Работы",
      href: "/#works",
    },
    {
      label: "Отзывы",
      href: "/#testimonials",
    },
    {
      label: "Контакты",
      href: "/#contacts",
    },
  ],
	navContactItems: [
		{
			label: 'Telegram',
			href: siteConfig.contact.telegram,
			icon: PiTelegramLogo,
		},
		{
			label: 'WhatsApp',
			href: siteConfig.contact.whatsapp,
			icon: PiWhatsappLogo,
		},
    {
      label: 'Email',
      href: `mailto:${siteConfig.contact.email}`,
			icon: PiEnvelope,
    },
  ]
}

export default navbar