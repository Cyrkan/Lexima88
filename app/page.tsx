import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
