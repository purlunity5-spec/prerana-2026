import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechnicalRegistration() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Events Registration</h1>
            <p className="text-xl text-muted-foreground">Register for Hackathons, Coding Contests, and Technical Workshops</p>
          </div>

          <Card className="w-full max-w-4xl mx-auto overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle className="text-center">Registration Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-4">The registration form is hosted externally. Click the button below to open it in a new tab.</p>
              <div className="flex justify-center">
                <a
                  href="https://forms.gle/KYqstmztD7UazrBu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                >
                  Open Registration Form
                </a>"
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}