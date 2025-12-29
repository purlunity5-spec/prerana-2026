import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const schedule = {
  day1: [
    { time: "09:00 AM – 09:30 AM", event: "Torch Relay & Flag Hoisting", category: "Ceremony", location: "Underpass to Shivaji Bhavan" },
    { time: "09:30 AM – 09:45 AM", event: "Inauguration & Flag Hoisting", category: "Ceremony", location: "SB Portico" },
    { time: "09:45 AM – 09:50 AM", event: "SPICMACAY Performance", category: "Cultural", location: "In front of SB" },
    { time: "09:50 AM – 10:00 AM", event: "Ethnic Procession (Chenda Mela)", category: "Cultural", location: "Main Gate to SB" },
    { time: "10:00 AM – 10:30 AM", event: "Chenda Mela Performance", category: "Cultural", location: "In front of SB" },
    { time: "10:30 AM – 04:00 PM", event: "Wellness Zone Activities", category: "Wellness", location: "Opposite to Vinaysadan Lawn" },
    { time: "11:00 AM – 04:00 PM", event: "Project Expo", category: "Technical", location: "VDC (Innovation Street)" },
    { time: "10:30 AM – 01:30 PM", event: "Gamethon — Theme Reveal & Start", category: "Technical", location: "VB 501" },
    { time: "10:30 AM – 11:20 AM", event: "Solo Singing", category: "Cultural", location: "Auditorium" },
    { time: "10:30 AM – 11:30 AM", event: "Short Film Making", category: "Cultural", location: "VB 203" },
    { time: "11:30 AM – 12:40 PM", event: "Battle of Bands", category: "Cultural", location: "Auditorium" },
    { time: "01:00 PM – 02:20 PM", event: "Fashion Walk", category: "Cultural", location: "Auditorium" },
    { time: "01:30 PM – 02:00 PM", event: "Gamethon Judgement", category: "Technical", location: "VB 501" },
    { time: "02:30 PM – 03:20 PM", event: "Drama Competition", category: "Cultural", location: "Auditorium" },
    { time: "03:20 PM – 04:00 PM", event: "Mono Acting", category: "Cultural", location: "Auditorium" },
    { time: "04:00 PM – 04:30 PM", event: "Project Expo Judgement", category: "Technical", location: "VDC" },
    { time: "04:00 PM – 05:30 PM", event: "Army Band Performance", category: "Cultural", location: "Main Stage" },
    { time: "06:00 PM – 08:30 PM", event: "Band Performance with Artist", category: "Cultural", location: "Main Stage" },
  ],
  day2: [
    { time: "07:30 AM – 08:00 AM", event: "Yoga Session", category: "Wellness", location: "Opposite to Vinaysadan Lawn" },
    { time: "08:00 AM – 08:30 AM", event: "Rise of Hope (Balloon Release)", category: "Ceremony", location: "Basketball Court" },
    { time: "09:00 AM – 05:00 PM", event: "Hackathon — 8 Hour Sprint", category: "Technical", location: "VDC (Alpha, Beta & Gamma)" },
    { time: "10:00 AM – 04:00 PM", event: "Wellness Zones", category: "Wellness", location: "Opposite to Vinaysadan Lawn" },
    { time: "10:00 AM – 10:50 AM", event: "Solo Dance (Indian)", category: "Cultural", location: "Auditorium" },
    { time: "10:00 AM – 12:00 PM", event: "Treasure Hunt", category: "Wellness", location: "Opposite to Vinaysadan Lawn" },
    { time: "12:00 PM – 01:00 PM", event: "Maze Finder Mouse", category: "Technical", location: "VDC (Kojo)" },
    { time: "01:00 PM – 02:00 PM", event: "Lunch Break", category: "General", location: "Campus" },
    { time: "02:00 PM – 03:00 PM", event: "Drone Workshop (Demo)", category: "Technical", location: "VB 204" },
    { time: "02:00 PM – 04:00 PM", event: "Art Therapy Corner", category: "Wellness", location: "Opposite to Vinaysadan Lawn" },
    { time: "04:20 PM – 04:30 PM", event: "Introduction by MC", category: "Ceremony", location: "Main Stage" },
    { time: "04:30 PM – 05:25 PM", event: "Cultural Showcase", category: "Cultural", location: "Main Stage" },
    { time: "06:00 PM – 08:30 PM", event: "DJ Night", category: "Cultural", location: "Main Stage" },
  ],
};

export default function Schedule() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Main Events", "Cultural", "Technology", "Wellness"];

  const filterEvents = (events: typeof schedule.day1) => {
    return events.filter((item) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Main Events") return item.category === "Ceremony" || item.location.includes("Main Stage");
      if (activeCategory === "Cultural") return item.category === "Cultural";
      if (activeCategory === "Technology") return item.category === "Technical";
      if (activeCategory === "Wellness") return item.category === "Wellness";
      return true;
    });
  };

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-muted-foreground">Don't miss out on any of the action.</p>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <Accordion type="single" collapsible defaultValue="day1">
            {Object.entries(schedule).map(([day, events]) => (
              <AccordionItem key={day} value={day}>
                <AccordionTrigger>{day === 'day1' ? 'Day 1 (Jan 22)' : 'Day 2 (Jan 23)'}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {filterEvents(events as any).length > 0 ? (
                      filterEvents(events as any).map((item, index) => (
                        <motion.div
                          key={`${day}-${index}-${item.event}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card className="hover:bg-muted/50 transition-colors border-l-4 border-l-primary">
                            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex items-center gap-6">
                                <div className="text-sm font-bold text-primary w-32 shrink-0">{item.time}</div>
                                <div>
                                  <h3 className="text-xl font-semibold">{item.event}</h3>
                                  <p className="text-sm text-muted-foreground">{item.location}</p>
                                </div>
                              </div>
                              <Badge variant={
                                item.category === "Technical" ? "default" :
                                item.category === "Cultural" ? "secondary" :
                                item.category === "Wellness" ? "outline" : "destructive"
                              } className="w-fit shrink-0">
                                {item.category}
                              </Badge>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        No events found for this category on this day.
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}