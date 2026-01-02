"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skills = [
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
  ];

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
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A curated collection of technologies I use to build modern
            applications.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group relative bg-card/50 dark:bg-card/20 backdrop-blur-sm border border-border/50 p-4 md:p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={skill.url}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
