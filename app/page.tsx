import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Showcase } from "@/components/sections/showcase";
import { Faq } from "@/components/sections/faq";
import { CtaDownload } from "@/components/sections/cta-download";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Showcase />
        <Faq />
        <CtaDownload />
      </main>
      <Footer />
    </>
  );
}
