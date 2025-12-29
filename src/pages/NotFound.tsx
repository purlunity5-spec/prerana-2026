import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section 1: Error Message & Quirky Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary opacity-20 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-24 h-24 text-primary animate-bounce" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            404: The Page Couldn't Keep Up!
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Looks like you took a wrong turn, but don't worry—even we get lost in the excitement sometimes. 
            We couldn't find that page, but you can definitely find your way to Prerana 2026.
          </p>
        </motion.div>

        {/* Section 2: Quick Links for Recovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold mb-6 text-white/80">Here's How You Can Find the Party:</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 h-14 text-lg border-primary/20 hover:bg-primary/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" /> BACK TO HOME
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 h-14 text-lg border-secondary/20 hover:bg-secondary/10"
              onClick={() => navigate("/events")}
            >
              <MapPin className="w-5 h-5" /> Explore All Events
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 h-14 text-lg border-accent/20 hover:bg-accent/10"
              onClick={() => navigate("/schedule")}
            >
              <Calendar className="w-5 h-5" /> View the Schedule
            </Button>
          </div>
        </motion.div>

        {/* Section 3: Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Or Skip the Detours and Just...</h3>
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-12 py-6 text-xl font-bold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all"
            onClick={() => navigate("/register")}
          >
            REGISTER FOR PRERANA NOW
          </Button>
        </motion.div>
      </div>
    </div>
  );
}