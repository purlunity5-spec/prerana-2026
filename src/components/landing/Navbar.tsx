import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Mascot", href: "/mascot" },
        { name: "Team", href: "/team" },
      ],
    },
    { name: "Events", href: "/events" },
    {
      name: "Insight",
      href: "#",
      dropdown: [
        { name: "FAQ", href: "/faq" },
        { name: "Schedule", href: "/schedule" },
        { name: "Security", href: "/security-guidelines" },
      ],
    },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/")) {
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        if (window.location.pathname === path) {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate(href);
        }
      } else {
        navigate(href);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src="https://harmless-tapir-303.convex.cloud/api/storage/4a061a6e-11ab-491e-b5a2-78a2aa928f5d" alt="PRERANA 2026" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
                  {link.name} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-border/50">
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="cursor-pointer hover:text-primary focus:text-primary focus:bg-primary/10"
                    >
                      {item.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.href);
                }}
              >
                {link.name}
              </a>
            )
          )}
          <Button onClick={() => navigate("/register")}>
            GET YOUR PASSES
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border/50"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-primary/80 px-2">{link.name}</span>
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium hover:text-primary transition-colors pl-6"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        handleNavigation(item.href);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors px-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    handleNavigation(link.href);
                  }}
                >
                  {link.name}
                </a>
              )
            )}
            <Button className="w-full mt-2" onClick={() => {
              setIsMenuOpen(false);
              navigate("/register");
            }}>
              GET YOUR PASSES
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}