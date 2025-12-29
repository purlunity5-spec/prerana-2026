import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle2, Clock, Layers, MapPin, Trophy, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventDetailsProps {
  event: any; // Ideally type this
  category: string;
}

export default function EventDetails({ event: selectedEvent, category }: EventDetailsProps) {
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!selectedEvent) return;

    const cat = selectedEvent.category.toLowerCase();
    const formMap: Record<string, string> = {
      technical: 'https://forms.gle/KYqstmztD7UazrBu6',
      wellness: 'https://forms.gle/sqGzHvJY8Y8hPuDK6',
      cultural: 'https://forms.gle/YpQCfXMVQ4kasDtB6'
    };
    const url = formMap[cat];
    if (url) {
      window.open(url, '_blank', 'noopener');
      return;
    }

    // Fallback to internal register route if form not available
    switch (cat) {
      case "technical":
        navigate("/register/technical");
        break;
      case "cultural":
        navigate("/register/cultural");
        break;
      case "wellness":
        navigate("/register/wellness");
        break;
      default:
        navigate("/register");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate(`/events?open=${category}`)} className="gap-2 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to {category} Events
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">{selectedEvent.code}</span>
              <span className="text-sm text-muted-foreground">{selectedEvent.category}</span>
              {selectedEvent.isCombo && <span className="text-sm font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">COMBO</span>}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedEvent.title}</h1>
            <p className="text-xl text-muted-foreground">{selectedEvent.shortDescription}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-3xl font-bold text-primary">
              {selectedEvent.registrationFee === "0" ? "Free" : selectedEvent.registrationFee}
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-lg shadow-primary/20"
              onClick={handleRegister}
            >
              Register Now
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.fullDescription}
                </p>
              </CardContent>
            </Card>

            {selectedEvent.isCombo && selectedEvent.includedEvents && (
              <Card className="border-secondary/30 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Layers className="w-5 h-5" /> Included Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedEvent.includedEvents.map((ev: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-lg font-medium">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {ev}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-secondary" /> Prizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedEvent.prizes.map((prize: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-lg font-medium">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {prize}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {selectedEvent.guidelines.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Location
                  </div>
                  <div className="font-medium">
                    <a 
                      href="https://www.google.com/maps/place/Gitam+University+Parking/@13.2876854,77.5971134,132m/data=!3m1!1e3!4m6!3m5!1s0x3bb1e134094dd77f:0x6206764d41f07ca7!8m2!3d13.2875316!4d77.5973482!16s%2Fg%2F11l29myt7v?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline transition-colors"
                    >
                      {selectedEvent.location}
                    </a>
                  </div>
                </div>
                {selectedEvent.day && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Day
                    </div>
                    <div className="font-medium">{selectedEvent.day}</div>
                  </div>
                )}
                {selectedEvent.time && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time
                    </div>
                    <div className="font-medium">{selectedEvent.time}</div>
                  </div>
                )}
                <div>
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Team Size
                  </div>
                  <div className="font-medium">{selectedEvent.teamSize}</div>
                </div>
                {selectedEvent.timeLimit && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time Limit
                    </div>
                    <div className="font-medium">{selectedEvent.timeLimit}</div>
                  </div>
                )}
                <div>
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Eligibility
                  </div>
                  <div className="font-medium">{selectedEvent.eligibility}</div>
                </div>
              </CardContent>
            </Card>

            {selectedEvent.judgingCriteria.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Judging Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {selectedEvent.judgingCriteria.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}