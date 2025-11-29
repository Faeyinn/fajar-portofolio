"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 dark:bg-black/20 backdrop-blur-md shadow-sm rounded-full px-6 py-3 border border-white/50 dark:border-white/10 w-[90%] max-w-4xl flex justify-between items-center transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center space-x-8 w-full">
        <motion.div
          className="text-2xl font-bold font-heading text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Fajar
        </motion.div>
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2 rounded-full hover:bg-secondary/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full mt-4 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-xl rounded-3xl px-6 py-6 border border-white/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
