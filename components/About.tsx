"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles,
  User,
  Heart,
  Headphones,
  BookOpen,
  Coffee,
} from "lucide-react";
import Image from "next/image";

import { projects } from "@/data/projects";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20" />
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50 dark:opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-muted-foreground mb-4">
            <User className="w-4 h-4 text-primary" />
            <span>Discover More</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground relative z-10 flex items-center justify-center gap-3">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into who I am, what I do, and what I love.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Bio Card - Spans 8 columns */}
          <motion.div
            variants={item}
            className="md:col-span-8 bg-card/50 dark:bg-card/40 backdrop-blur-xl p-8 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                Who I Am
              </h3>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I&apos;m{" "}
                  <span className="text-foreground font-semibold">
                    Rahmat Fajar Saputra
                  </span>
                  , a dedicated web developer and student with a passion for
                  building
                  <span className="text-primary font-medium">
                    {" "}
                    digital experiences
                  </span>{" "}
                  that matter.
                </p>
                <p>
                  I specialize in modern web technologies, focusing on creating
                  applications that are not just functional, but also
                  <span className="italic text-foreground">
                    {" "}
                    beautiful
                  </span> and{" "}
                  <span className="italic text-foreground">intuitive</span>. My
                  journey involves constantly learning new tools and best
                  practices to deliver high-quality code.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["React", "Next.js", "Typescript", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 border border-border/50 rounded-full text-sm font-medium text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Column - Spans 4 columns */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <motion.div
              variants={item}
              className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 p-6 rounded-[2rem] border border-primary/10 flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold font-heading text-foreground mb-1">
                Student
              </h4>
              <p className="text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                Computer Engineering
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-card/50 dark:bg-card/40 backdrop-blur-xl p-6 rounded-[2rem] border border-border/50 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-primary/20 transition-colors"
            >
              <div className="bg-secondary/50 p-3 rounded-full shadow-sm mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="text-3xl font-bold font-heading text-foreground mb-1">
                {projects.length}
              </h4>
              <p className="text-sm font-medium text-muted-foreground">
                Projects Completed
              </p>
            </motion.div>
          </div>

          {/* Interests Section - Spans full width */}
          <motion.div
            variants={item}
            className="md:col-span-12 bg-secondary/20 dark:bg-secondary/10 backdrop-blur-xl p-8 rounded-[2rem] border border-border/50 mt-2"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </div>
                <h3 className="text-2xl font-bold font-heading">
                  Things I Love
                </h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Beyond coding, these are the things that fuel my creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "Coding",
                  icon: Code,
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                  desc: "Building ideas",
                },
                {
                  name: "Music",
                  icon: Headphones,
                  color: "text-pink-500",
                  bg: "bg-pink-500/10",
                  desc: "Deep focus",
                },
                {
                  name: "Coffee",
                  icon: Coffee,
                  color: "text-amber-600",
                  bg: "bg-amber-600/10",
                  desc: "Fuel for code",
                },
                {
                  name: "Learning",
                  icon: BookOpen,
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                  desc: "Always growing",
                },
              ].map((interest, idx) => (
                <motion.div
                  key={interest.name}
                  whileHover={{ y: -5 }}
                  className="bg-card hover:bg-card/80 p-4 rounded-2xl border border-border/50 transition-colors flex items-center gap-4 group cursor-default"
                >
                  <div
                    className={`${interest.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <interest.icon className={`w-5 h-5 ${interest.color}`} />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm">
                      {interest.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {interest.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
