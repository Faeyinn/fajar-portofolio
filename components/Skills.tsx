"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            {
              name: "HTML",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "TypeScript",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
              name: "React",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Next.js",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Tailwind",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "MySQL",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
              name: "PostgreSQL",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
              name: "Git",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "Postman",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
            },
            {
              name: "Framer Motion",
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all group aspect-square"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={skill.url}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-foreground text-sm md:text-base">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
