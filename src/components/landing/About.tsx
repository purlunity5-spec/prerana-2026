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
              Prerana, the most anticipated annual fest of GITAM Bengaluru, is a grand celebration of the fusion of culture, technology, and wellness. Recognized as the top 25 cultural fest of Bengaluru in 2025 by the Bengaluru Cultural Fest Club, the flagship fest has returned this year with more energy, enthusiasm, new ideas, and collaboration from fresh minds, promising to serve a one-of-a-kind experience to students.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-center">
              This year's theme, <span className="font-semibold">Innovation● Collaboration● Hope●</span>, dives into “The Spectrum Within”, which is an exploration of the wide range of diverse strengths, skills, and qualities that exist within every student and celebrates each of them. From the visionaries and innovators to the artists, tech enthusiasts, and empaths of GITAM, Prerana recognizes and cherishes your uniqueness, giving a platform to express your true self.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-center">
              From intensive hackathons, coding challenges, and tech showcases to eloquent dance, music, drama, fashion walks, and battle of bands, Prerana seamlessly blends the best of technology and culture united by the essence of wellness. There will be dedicated spaces and mindful activities that create balance, reminding us that true growth embraces the well-being of oneself alongside excelling in performance.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-center">
              With our <span className="text-primary font-semibold">Git-Buzz Spirit</span> as a symbol of resilience and renewal, Prerana 2026 encourages students to spark fresh ideas, bridge disciplines, forge optimism, and build a cohesive tomorrow.
            </p>

            <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed text-center">
              Prerana 2026 : Collaborate. Innovate. Hope.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              A celebration of the diverse spectrum within every student.
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