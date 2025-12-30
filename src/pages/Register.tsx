import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Music, Heart, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>
            <p className="text-xl text-muted-foreground">Choose your event category to register for Prerana 2026</p>
          </div>

          {/* General Fest Registration */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="flex flex-col md:flex-row border-primary/40 bg-primary/5 hover:bg-primary/10 transition-colors overflow-hidden">
              <div className="md:w-1/3 bg-primary/10 flex items-center justify-center p-8">
                <Ticket className="w-24 h-24 text-primary" />
              </div>
              <div className="flex-1 flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-3xl">General Fest Pass</CardTitle>
                      <CardDescription className="text-lg mt-1">Access to main events, pro-shows, and common areas.</CardDescription>
                    </div>
                    <div className="text-3xl font-bold text-primary whitespace-nowrap">₹ 299</div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    Get your official Prerana 2026 pass. This is required for entry into the campus during the fest days.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    size="lg"
                    className="w-full gap-2 text-lg" 
                    onClick={() => navigate("/register/general")}
                  >
                    Get Fest Pass <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground/60 italic text-center">
                    * Does not include individual competition registrations.
                  </p>
                </CardFooter>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Technical Events */}
            <Card className="flex flex-col border-primary/20 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Technical Events</CardTitle>
                <CardDescription>Hackathons, Coding Contests, and Workshops</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Showcase your technical prowess in our flagship hackathons and coding competitions.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2" 
                  onClick={() => window.open('https://forms.gle/KYqstmztD7UazrBu6', '_blank', 'noopener')}
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Cultural Events */}
            <Card className="flex flex-col border-secondary/20 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Cultural Events</CardTitle>
                <CardDescription>Dance, Music, Drama, and Arts</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Unleash your creativity and talent on the big stage. Join the cultural extravaganza.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                  onClick={() => window.open('https://forms.gle/YpQCfXMVQ4kasDtB6', '_blank', 'noopener')}
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Wellness Events */}
            <Card className="flex flex-col border-accent/20 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Wellness Events</CardTitle>
                <CardDescription>Yoga, Meditation, and Mental Health</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Find your inner peace and participate in our wellness and mindfulness sessions.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" 
                  onClick={() => window.open('https://forms.gle/sqGzHvJY8Y8hPuDK6', '_blank', 'noopener')}
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
