// src/app/page.tsx
import { Metadata } from "next";
import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
import CreativeMind from "./components/home/creative-mind";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import EducationalPillars from "./components/home/web-result";

export const metadata: Metadata = {
    title: "UX/UI Hub - Portal Informativo de Diseño de Experiencia e Interfaz",
    description: "Descubre el mundo del UX/UI Design. Casos de estudio, pioneros, herramientas y recursos para entender el diseño centrado en el usuario.",
};

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <HeroSection />

      {/* Brand/Tools section */}
      <Brand />

      {/* About UX/UI section */}
      <EducationalPillars />

      {/* UX/UI Areas section */}
      <Innovation />

      {/* Case Studies section */}
      <OnlinePresence />

      {/* UX/UI Pioneers section */}
      <CreativeMind />

      {/* FAQ section */}
      <Faq />

      {/* Historical Milestones section */}
      <Achievements />

      {/* CTA section */}
      <Solutions />
    </main>
  )
}