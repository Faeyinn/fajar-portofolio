"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Coffee,
  Gamepad2,
  Globe,
  Music,
  Sparkles,
  User,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-secondary/10 rounded-[3rem] mx-4 my-8 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio Card - Large */}
          <motion.div
            className="md:col-span-2 bg-white dark:bg-card p-8 rounded-[2.5rem] shadow-sm border border-border/50 relative overflow-hidden group hover:shadow-md transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
              <User className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Who am I?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              I&apos;m Rahmat Fajar Saputra, a passionate web developer who
              loves creating modern and cute digital experiences. With expertise
              in React, Next.js, and various web technologies, I enjoy bringing
              ideas to life through code. I focus on building accessible,
              pixel-perfect, and performant web applications.
            </p>
          </motion.div>

          {/* Stats Card 1 - Experience */}
          <motion.div
            className="bg-primary/10 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center border border-primary/20 hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-10 h-10 text-primary mb-2" />
            <span className="text-5xl font-bold text-primary font-heading">
              2+
            </span>
            <span className="text-muted-foreground font-medium">
              Years Experience
            </span>
          </motion.div>

          {/* Stats Card 2 - Projects */}
          <motion.div
            className="bg-secondary/20 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center border border-secondary/30 hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Code className="w-10 h-10 text-secondary-foreground mb-2" />
            <span className="text-5xl font-bold text-secondary-foreground font-heading">
              10+
            </span>
            <span className="text-muted-foreground font-medium">
              Projects Built
            </span>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            className="md:col-span-2 bg-white dark:bg-card p-8 rounded-[2.5rem] shadow-sm border border-border/50 relative overflow-hidden group hover:shadow-md transition-all"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading mb-6">
              Things I Love
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  name: "Coffee",
                  icon: Coffee,
                  color: "bg-amber-100 text-amber-600",
                },
                {
                  name: "Gaming",
                  icon: Gamepad2,
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  name: "Music",
                  icon: Music,
                  color: "bg-pink-100 text-pink-600",
                },
                {
                  name: "Travel",
                  icon: Globe,
                  color: "bg-blue-100 text-blue-600",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`${item.color} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-default`}
                >
                  <item.icon className="w-8 h-8" />
                  <span className="font-bold text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
