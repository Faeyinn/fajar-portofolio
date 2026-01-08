"use client";

import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
} from "lucide-react";
import Image from "next/image";
import TextType from "./anim/TextType";
import Particles from "./anim/Particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAltPhoto, setIsAltPhoto] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground pt-32 lg:pt-0"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Particles
            particleColors={
              resolvedTheme === "dark"
                ? ["#22c55e", "#ffffff"]
                : ["#16a34a", "#000000"]
            }
            particleCount={300}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        )}
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
                Building <br />
                <TextType
                  as="span"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary background-animate"
                  cursorClassName="text-primary"
                  text={[
                    "Digital Products",
                    "Web Application",
                    "User Experience",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  loop={true}
                  cursorCharacter="|"
                />
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="text-foreground font-semibold">Fajar</span>. A
                Fullstack Developer focused on creating clean, scalable, and
                responsive web solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Selected Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-transparent border border-input text-foreground rounded-xl font-medium hover:bg-secondary/50 backdrop-blur-sm transition-all hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>

            <div className="pt-8 flex items-center gap-6 text-muted-foreground">
              {[
                {
                  href: "https://github.com/Faeyinn",
                  icon: Github,
                  label: "Github",
                },
                {
                  href: "https://linkedin.com/in/rahmat-fajar-saputra-90690a287",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://instagram.com/jaaeyii__",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "mailto:fajar.saputra2907@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative block"
          >
            <div className="relative w-full aspect-square max-w-[320px] md:max-w-[400px] lg:max-w-[500px] mx-auto group">
              {/* Abstract decorative elements - Green Glow */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] opacity-60 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] opacity-60 animate-pulse delay-1000" />

              <div
                onClick={() => setIsAltPhoto(!isAltPhoto)}
                className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 bg-secondary/30 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:shadow-primary/10 hover:border-primary/20 group cursor-pointer"
              >
                {/* Primary Image */}
                <Image
                  src="/jaenand1x1.jpg"
                  alt="Fajar Portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1200px) 400px, 500px"
                />

                {/* Secondary Image (Hover/Click) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isAltPhoto
                      ? "opacity-100"
                      : "opacity-0 lg:group-hover:opacity-100"
                  }`}
                >
                  <Image
                    src="/transhumans.png"
                    alt="Fajar Alt Portrait"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 320px, (max-width: 1200px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
