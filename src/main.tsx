import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import ErrorBoundary from "@/components/ErrorBoundary";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./types/global.d.ts";

// Direct imports for immediate loading
import Landing from "./pages/Landing.tsx";
import AuthPage from "./pages/Auth.tsx";
import NotFound from "./pages/NotFound.tsx";
import Register from "./pages/Register.tsx";
import Events from "./pages/Events.tsx";
import Gallery from "./pages/Gallery.tsx";
import Sponsors from "./pages/Sponsors.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import SecurityGuidelines from "./pages/SecurityGuidelines.tsx";
import FAQ from "./pages/FAQ.tsx";
import Team from "./pages/Team.tsx";
import Contact from "./pages/Contact.tsx";
import AdminBrochure from "./pages/AdminBrochure.tsx";
import About from "./pages/About.tsx";
import SchedulePage from "./pages/Schedule";
import Mascot from "./pages/Mascot.tsx";
import TechnicalRegistration from "./pages/register/Technical.tsx";
import CulturalRegistration from "./pages/register/Cultural.tsx";
import WellnessRegistration from "./pages/register/Wellness.tsx";
import GeneralRegistration from "./pages/register/General.tsx";

// Simple loading fallback for route transitions
function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

const convexUrl = import.meta.env.VITE_CONVEX_URL;
if (!convexUrl) {
  console.error("VITE_CONVEX_URL environment variable is not set. Please configure your .env file.");
}
const convex = new ConvexReactClient(convexUrl || "https://harmless-tapir-303.convex.cloud");

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/general" element={<GeneralRegistration />} />
              <Route path="/register/technical" element={<TechnicalRegistration />} />
              <Route path="/register/cultural" element={<CulturalRegistration />} />
              <Route path="/register/wellness" element={<WellnessRegistration />} />
              <Route path="/about" element={<About />} />
              <Route path="/mascot" element={<Mascot />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:category" element={<Events />} />
              <Route path="/events/:category/:slug" element={<Events />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/sponsors/partner-with-us" element={<Sponsors />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security-guidelines" element={<SecurityGuidelines />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/admin/brochure" element={<AdminBrochure />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);