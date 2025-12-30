import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Layers, MapPin, Music, Trophy, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function getFormUrl(category: string) {
  const map: Record<string, string> = {
    technical: 'https://forms.gle/cvpkkSALCAeaC6s4A',
    wellness: 'https://forms.gle/qZHaTmpfXSqV21Em9',
    cultural: 'https://forms.gle/J7drNFtCpNwJyMcE7'
  };
  return map[category?.toLowerCase() ?? ''] ?? '';
}

interface EventListProps {
  category: string;
  events: any[]; // Ideally type this properly
}

export default function EventList({ category, events }: EventListProps) {
  const navigate = useNavigate();
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const regularEvents = events.filter(e => !e.isCombo);
  const comboEvents = events.filter(e => e.isCombo);

  const selectedEvent = events.find(e => e.id === selectedEventId) || null;

  const toggleSelect = (id: string) => setSelectedEventId(prev => prev === id ? null : id);

  return (
    <>
      <div className="mb-8">
        <Button variant="ghost" onClick={() => navigate("/events")} className="gap-2 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Categories
        </Button>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 capitalize">{category} Events</h1>
        <p className="text-muted-foreground">Click an event to expand details in an accordion; on wider screens details appear on the right.</p>
      </div>

      {/* Combo Events (click to expand) */}
      {comboEvents.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-secondary">Combo Events</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comboEvents.map((event, index) => (
              <motion.div key={event.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Card onClick={() => navigate(`/events/${category}/${event.slug}`)} className={`h-full border-secondary/30 hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/10 group bg-secondary/5 ${selectedEventId === event.id ? 'ring-2 ring-secondary/20' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">{event.code}</span>
                      <span className="text-xs font-bold text-secondary">{event.registrationFee}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors">{event.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-2">{event.shortDescription}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {event.day && <span className="font-medium">{event.day}</span>}
                      {event.time && <span>• {event.time}</span>}
                    </div>
                  </CardContent>

                  <AnimatePresence>
                    {selectedEventId === event.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="px-6 pb-6">
                        <div className="text-sm text-muted-foreground">{event.fullDescription}</div>
                        <div className="mt-4 flex gap-3">
                          <Button size="sm" onClick={() => navigate(`/events/${category}/${event.slug}`)}>Know More</Button>
                          <Button size="sm" variant="outline" onClick={() => window.open(getFormUrl(event.category), '_blank')}>Register Now</Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Regular events with side-by-side details on md+ */}
      {regularEvents.length > 0 ? (
        <div>
          {comboEvents.length > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Individual Events</h2>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularEvents.map((event, index) => (
              <motion.div key={event.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}>
                <Card onClick={() => navigate(`/events/${category}/${event.slug}`)} className={`h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group ${selectedEventId === event.id ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{event.code}</span>
                      <span className="text-xs font-bold text-secondary">{event.registrationFee === '0' || event.registrationFee === 0 ? 'Free' : event.registrationFee}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-2">{event.shortDescription}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {event.location}</div>
                      {event.day && <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {event.day}</div>}
                      {event.time && <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {event.time}</div>}
                    </div>
                  </CardContent>

                  <div className="px-6 pb-6">
                    <div className="text-sm text-muted-foreground">{event.fullDescription}</div>
                    <div className="mt-4 flex gap-3">
                      <Button size="sm" onClick={() => navigate(`/events/${category}/${event.slug}`)}>Know More</Button>
                      <Button size="sm" variant="outline" onClick={() => window.open(getFormUrl(event.category), '_blank')}>Register Now</Button>
                    </div>
                  </div>

                  <CardFooter className="text-sm text-muted-foreground flex gap-4 border-t border-border/50 pt-4 mt-auto">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {event.teamSize}</span>
                    {event.prizes && event.prizes.length > 0 && (
                      <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> {event.prizes[0].includes(':') ? event.prizes[0].split(':')[1] : event.prizes[0]}</span>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No events found for this category yet. Stay tuned!</p>
        </div>
      )}
    </>
  );
}

