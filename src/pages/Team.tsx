import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Data Definitions
const leadership = [
  { name: "M. Thousheer", role: "President", image: "https://harmless-tapir-303.convex.cloud/api/storage/0a07c8e9-add2-4ef8-86d1-ae17ac4d6b98" },
  { name: "Honalu K.G", role: "Vice President", image: "https://harmless-tapir-303.convex.cloud/api/storage/c21b0000-05c7-435d-9811-368948d34a30" },
  { name: "L. Mokshagna Reddy", role: "Vice President", image: "https://harmless-tapir-303.convex.cloud/api/storage/74a3cfdc-1326-4617-9650-f8275a255fb9" },
];

const domainTeams = [
  {
    name: "Security",
    roles: [
      { title: "Head", members: [{ name: "M. Venkata Sai Teja", image: "https://harmless-tapir-303.convex.cloud/api/storage/39123ec4-fe28-4c5c-bad0-ab2eb221bae2" }] },
      { title: "Lead", members: [{ name: "Jaswanth Koduri", image: "https://harmless-tapir-303.convex.cloud/api/storage/e1b8d76d-0b0a-418d-a90d-fb58d4576b76" }, { name: "Spoorthi S", image: "https://harmless-tapir-303.convex.cloud/api/storage/fd14b4dc-b8fe-4185-b40f-3e72528d8d29" }] },
      { title: "Co-Lead", members: [{ name: "K.B. Dhanush Tej", image: "https://harmless-tapir-303.convex.cloud/api/storage/06ffd6ea-8076-4458-ac5a-b76080fb52e4" }, { name: "Rupesh Koneti", image: "https://harmless-tapir-303.convex.cloud/api/storage/d2dd842d-108b-4107-b0a3-bd2e733d2011" }] },
    ]
  },
  {
    name: "Media",
    roles: [
      { title: "Lead", members: [{ name: "G. Sai Krishna", image: "https://harmless-tapir-303.convex.cloud/api/storage/7fe2b617-067e-45a7-87d7-ab252708e8e2" }] },
      { title: "Co-Lead", members: [{ name: "Shaik Mohammed Aasim", image: "https://harmless-tapir-303.convex.cloud/api/storage/857107d9-6045-43bc-ab47-e6b0033ae74b" }] },
    ]
  },
  {
    name: "Design & Content",
    roles: [
      { title: "Head", members: [{ name: "Venkata Vishnu Vardhan Raju", image: "https://harmless-tapir-303.convex.cloud/api/storage/b0b811e7-fc09-42c7-ad63-689fe542a0c8" }] },
      { title: "Lead", members: [{ name: "M. Dhanunjay Reddy", image: "https://harmless-tapir-303.convex.cloud/api/storage/c6d2c2ac-a887-4e9a-9b74-8bf3ea04815a" }] },
      { title: "Co-Lead", members: [{ name: "Sohitha", image: "https://harmless-tapir-303.convex.cloud/api/storage/abab97c5-fe9c-4ab6-89d6-62aec61afd47" }, {name: "Guru Sai"}] },
    ]
  },
  {
    name: "Technology",
    roles: [
      { title: "Head", members: [{ name: "D. Naga Chandra Teja", image: "https://harmless-tapir-303.convex.cloud/api/storage/5cb4b06e-79e3-4d71-91bc-74d3d813aba0" }] },
      { title: "Lead", members: [{ name: "Vasavi Gorantala" }] },
      { title: "Co-Lead", members: [{ name: "Shaik Mohammed Aasim", image: "https://harmless-tapir-303.convex.cloud/api/storage/f19f04f8-fb37-4e1e-832d-0dc71ee218ee" }, { name: "Kandala Pavan", image: "https://harmless-tapir-303.convex.cloud/api/storage/86238237-813d-4505-b497-f65bcfbcf66d" }] },
    ]
  },
  {
    name: "Events",
    roles: [
      { title: "Head", members: [{ name: "B. Neha Reddy", image: "/images/team/neha-reddy.jpg" }] },
      { title: "Lead", members: [{ name: "Rachel Smita Massey", image: "https://harmless-tapir-303.convex.cloud/api/storage/0f0b0031-49bc-4b23-b9e0-83e21b0554d0" }] },
      { title: "Co-Lead", members: [{ name: "Lanka Darshini Raj", image: "https://harmless-tapir-303.convex.cloud/api/storage/851a576e-08b8-4bd2-b360-793a2dab85c9" }, { name: "P. Yathin Bharadwaj", image: "https://harmless-tapir-303.convex.cloud/api/storage/1a77c08c-0a3c-4039-96a6-1fc5cd25f1fd" }] },
    ]
  },
  {
    name: "Marketing",
    roles: [
      { title: "Head", members: [{ name: "Apurva Mishra", image: "/images/team/apurva-mishra.jpg" }] },
      { title: "Lead", members: [{ name: "Manoj Kumar" }] },
      { title: "Co-Lead", members: [{ name: "J. Riteesh Reddy", image: "/images/team/j-riteesh-reddy.jpg" }] },
    ]
  },
  {
    name: "Operations",
    roles: [
      { title: "Head", members: [{ name: "Singareddy Ruthish Reddy", image: "/images/team/singareddy-ruthish-reddy.jpg" }] },
      { title: "Lead", members: [{ name: "P. Joel Michael Son", image: "/images/team/p-joel-michael-son.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Allata Harshita", image: "/images/team/allata-harshita.jpg" }] },
    ]
  },
  {
    name: "Sponsorship",
    roles: [
      { title: "Head", members: [{ name: "K. Sriniwas", image: "/images/team/k-sriniwas.jpg" }] },
      { title: "Lead", members: [{ name: "Sumanth Reddy S", image: "/images/team/sumanth-reddy-s.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Srishti Sucklecha", image: "/images/team/srishti-sucklecha.jpg" }] },
    ]
  },
  {
    name: "Hospitality",
    roles: [
      { title: "Head", members: [{ name: "A. Jagadeesh", image: "/images/team/a-jagadeesh.jpg" }, { name: "Prakruthi V", image: "/images/team/prakruthi-v.jpg" }] },
      { title: "Lead", members: [{ name: "Prithvi Ganesh Goud" }] },
      { title: "Co-Lead", members: [{ name: "Sri Nandini T", image: "/images/team/sri-nandini-t.jpg" }, { name: "Vakul Kumar Bayya", image: "/images/team/vakul-kumar-bayya.jpg" }] },
    ]
  },
  {
    name: "Legal & Documentation",
    roles: [
      { title: "Head", members: [{ name: "Sophiya Sharma", image: "/images/team/sophiya-sharma.jpg" }] },
      { title: "Lead", members: [{ name: "Hrishita Rauniyar", image: "/images/team/hrishita-rauniyar.jpg" }] },
      { title: "Co-Lead", members: [{ name: "Unnati Chari", image: "/images/team/unnati-chari.jpg" }] },
    ]
  },
];

const advisoryCommittee = [
  { name: "Dr. Reema Chaudhury", role: "Director, Campus Life" },
  { name: "Dr. Asha Acharya", role: "Manager, Student Life" },
  { name: "Anitha D", role: "Senior Executive" },
  { name: "Arjun Raghu", role: "Senior Executive" },
  { name: "Pranav Amarnath", role: "Senior Executive (Wellness)" },
  { name: "Meghana Musku", role: "Senior Executive (Wellness)" },
  { name: "Srikanth Basavraj", role: "Senior Executive" },
  { name: "Rayanka Debnath", role: "Senior Executive" },
  { name: "Ayush BM", role: "Executive - Visual Content" },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-24"
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind Prerana 2026 working hard to make it a memorable experience.
            </p>
          </div>

          {/* Director (Reema) then Manager (Asha) then Advisory Committee */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-secondary">Advisory Leads</h2>
              <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
              {/* Reema Mam */}
              {advisoryCommittee.filter(m => m.name.toLowerCase().includes("reema")).map((member, i) => (
                <motion.div key={`reema-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="w-full md:w-1/2">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center items-center py-10 px-6">
                    <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                      <Avatar className="w-36 h-36 border-4 border-primary/10 shadow-xl shadow-primary/5">
                        <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                        <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                          {member.name}
                        </CardTitle>
                        <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                          {member.role}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}

              {/* Asha Mam */}
              {advisoryCommittee.filter(m => m.name.toLowerCase().includes("asha")).map((member, i) => (
                <motion.div key={`asha-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="w-full md:w-1/2">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center items-center py-10 px-6">
                    <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                      <Avatar className="w-36 h-36 border-4 border-primary/10 shadow-xl shadow-primary/5">
                        <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                        <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                          {member.name}
                        </CardTitle>
                        <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                          {member.role}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Advisory Committee Placeholder + Members */}
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-6 space-y-2">
                <h3 className="text-2xl font-bold">Advisory Committee</h3>
                <p className="text-muted-foreground">Student Life Team</p>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Placeholder image for Advisory Committee group photo */}
                {/* removed group-photo placeholder as requested */}

                {/* Members grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {advisoryCommittee.filter(m => !m.name.toLowerCase().includes("reema") && !m.name.toLowerCase().includes("asha")).map((member, index) => (
                      <motion.div key={`adv-${index}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }} className="flex flex-col items-center text-center p-4 bg-muted/5 rounded-xl border border-primary/10">
                        <Avatar className="w-24 h-24">
                          {/* Advisory members may not have individual images; use fallback initials to maintain consistent size */}
                          {(member as any).image ? (
                            <AvatarImage src={(member as any).image} alt={member.name} />
                          ) : (
                            <AvatarFallback className="bg-primary/5 text-primary text-2xl font-bold">{getInitials(member.name)}</AvatarFallback>
                          )}
                        </Avatar>
                        <div className="mt-3">
                          <div className="font-semibold">{member.name}</div>
                          <div className="text-sm text-muted-foreground uppercase tracking-wide">{member.role}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Domain Teams Section */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-3xl font-bold text-secondary">Domain Teams</h2>
               <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>

            {/* Heads Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Heads</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {domainTeams.map((team) => {
                  const heads = team.roles.find(r => r.title === "Head")?.members || [];
                  return heads.map((member, mIndex) => (
                    <motion.div
                      key={`${team.name}-head-${mIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: mIndex * 0.05 }}
                      className="h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-12 px-4 w-full">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                            <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                              {getInitials(member.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis px-2">
                              {member.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {team.name}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ));
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            {/* Leads Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Leads</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {domainTeams.map((team) => {
                  const leads = team.roles.find(r => r.title === "Lead")?.members || [];
                  return leads.map((member, mIndex) => (
                    <motion.div
                      key={`${team.name}-lead-${mIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: mIndex * 0.05 }}
                      className="h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-12 px-4 w-full">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                            <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                              {getInitials(member.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis px-2">
                              {member.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {team.name}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ));
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            {/* Co-Leads Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Co-Leads</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {domainTeams.map((team) => {
                  const coLeads = team.roles.find(r => r.title === "Co-Lead")?.members || [];
                  return coLeads.map((member, mIndex) => (
                    <motion.div
                      key={`${team.name}-colead-${mIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: mIndex * 0.05 }}
                      className="h-full"
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-12 px-4 w-full">
                        <CardHeader className="text-center p-0 space-y-4 w-full flex flex-col items-center">
                          <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl shadow-primary/5">
                            <AvatarImage src={(member as any).image} alt={member.name} className="object-cover object-top" />
                            <AvatarFallback className="bg-primary/5 text-primary text-3xl font-bold">
                              {getInitials(member.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis px-2">
                              {member.name}
                            </CardTitle>
                            <p className="text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                              {team.name}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ));
                })}
              </div>
            </div>
          </section>

          

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}