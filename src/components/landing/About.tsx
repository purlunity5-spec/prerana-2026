import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            WHAT IS PRERANA?
          </h2>

          <div className="px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Prerana 2026: The Spectrum Within</h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-center">
              Welcome to the intersection where code meets culture and a calm mind sparks the wildest ideas. Prerana has grown into something bigger than just an event on the calendar — it’s a shared experience.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-center">
              Under the banner of <span className="text-primary font-semibold">Innovation, Collaboration, and Hope</span>, we are inviting every student to explore the full spectrum of who they are. We want to see your talent and your spirit in equal measure.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-center">
              It’s a unique mix of the intensity of hackathons sitting right next to the grace of fashion shows, the peace of wellness sessions balancing the electric energy of the Battle of Bands. Guided by our Git-Buzz spirit, we are here to champion resilience and joy. Let’s spark new conversations, embrace how different we all are, and celebrate the optimism that drives our future.
            </p>

            <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed text-center">
              Prerana 2026: Collaborate. Innovate. Hope.
            </p>
          </div>
        </div>

        {/* Feature cards removed as requested */}

        <div className="text-center">
          <Button variant="link" className="text-lg gap-2" onClick={() => navigate("/schedule")}>
            View Full Schedule <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}