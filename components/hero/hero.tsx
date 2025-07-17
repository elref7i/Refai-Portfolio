import AnimateHero from "./_components/animate-hero";
import ButtonScroll from "./_components/button-scroll";
import HeroInfo from "./_components/hero-info";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <AnimateHero />

      <div className="container mx-auto px-4 py-20">
        {/* Hero INfo */}
        <HeroInfo />
        {/* Scroll indicator */}

        <ButtonScroll />
      </div>
    </section>
  );
}
