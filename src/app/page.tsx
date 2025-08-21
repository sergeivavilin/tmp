import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@config/site";
import { title, subtitle } from "@components/primitives";
import { GithubIcon } from "@components/icons";
import Hero from "./(sections)/1.Hero";
import Testimonials from "./(sections)/6.Testimonials";
import AboutUs from "./(sections)/2.AboutUs";
import Counter from "./(sections)/3.Counter";
import OurServices from "./(sections)/4.Services";
import Products from "./(sections)/5.Products";
import ContactUs from "./(sections)/8.Contact";
import CookieWarn from "../components/widgets/CookieWarn";

export default function Home() {

  return (
    <section className="">
      <Hero />
      <AboutUs />
      <Counter />
      <OurServices />
      <Products />
      <Testimonials />
      <ContactUs />
      <CookieWarn />
    </section>
  );
}
