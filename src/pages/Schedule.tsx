import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import Schedule from "@/components/landing/Schedule";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <Schedule />
        </div>
      </main>
      <Footer />
    </div>
  );
}
