import About from "@/components/landing/About";
import CtaBar from "@/components/landing/CtaBar";
import Footer from "@/components/landing/Footer";
import Gallery from "@/components/landing/Gallery";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import SplashScreen from "@/components/SplashScreen";
import { useState } from "react";

export default function Landing() {
  // State for splash screen
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        
        <CtaBar />
      </main>
      <Footer />
    </div>
  );
}