import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import InteractivePrompts from "./components/sections/InteractivePrompts";
import PainAndGap from "./components/sections/PainAndGap";
import InsideTheBook from "./components/sections/InsideTheBook";
import AboutAuthor from "./components/sections/AboutAuthor";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import AnimatedBackground from "./components/AnimatedBackground";
import FacebookPixel from "./components/FacebookPixel";

function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <FacebookPixel />
      <Navigation />

      <AnimatedBackground />

      {/* Grid Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <main className="relative z-10 pt-20 w-full overflow-x-hidden">
        <Hero />
        <InteractivePrompts />
        <PainAndGap />
        <InsideTheBook />
        <AboutAuthor />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
