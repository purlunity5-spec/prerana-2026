import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { motion } from "framer-motion";

export default function Mascot() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Meet The Mascot
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              GIT-BUZZ
            </h2>
            <p className="text-xl text-muted-foreground">
              The spirit of Prerana 2026
            </p>
          </div>

          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto bg-gradient-to-b from-primary/20 to-transparent rounded-full flex items-center justify-center border-4 border-primary/20 shadow-[0_0_50px_-12px_var(--color-primary)] overflow-hidden group">
             <img 
               src="https://harmless-tapir-303.convex.cloud/api/storage/e8d66dab-3969-4d1e-91c2-ae1155c2041c" 
               alt="Prerana Mascot" 
               className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
             />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
            <div className="p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Ingenuity</h3>
              <p className="text-muted-foreground">Showcasing pioneering technologies and creative solutions that propel us toward a transformative future.</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Enthusiasm</h3>
              <p className="text-muted-foreground">Channeling the dynamic spirit and boundless passion that fuels every participant's journey.</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary mb-2">Synergy</h3>
              <p className="text-muted-foreground">Weaving together diverse talents and cultures into a seamless, harmonious celebration of collective excellence.</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}