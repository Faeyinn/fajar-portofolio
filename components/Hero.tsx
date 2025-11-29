"use client";

import { motion } from "framer-motion";
import { Code, Github, Heart, Instagram, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import TextType from "./anim/TextType";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen px-4 py-24 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg mx-auto lg:mx-0 rotate-3 hover:rotate-6 transition-transform">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-10 h-10 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/50 rounded-full text-primary font-bold text-sm mb-6 shadow-sm"
          >
            ✨ Fullstack JS Developer
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-6 leading-tight min-h-[1.2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-primary relative inline-block">
              <TextType
                text={["Fajar", "Jaeyi"]}
                typingSpeed={150}
                deletingSpeed={100}
                loop={true}
                cursorCharacter="|"
                variableSpeed={{ min: 50, max: 150 }}
              />
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-secondary -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Rahmat Fajar Saputra - A passionate web developer creating modern
            and cute digital experiences
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-primary hover:scale-110 transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-[#0A66C2] hover:scale-110 transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-[#E4405F] hover:scale-110 transition-all"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-[#25D366] hover:scale-110 transition-all"
            >
              <Phone className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white border-2 border-primary/20 text-primary rounded-full font-bold shadow-sm hover:bg-primary hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/softboy.jpg"
                alt="Fajar's Photo"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <Heart className="w-10 h-10 text-primary fill-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
