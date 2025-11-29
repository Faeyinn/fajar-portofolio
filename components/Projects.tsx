"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A modern dashboard for managing online stores with real-time analytics and inventory management.",
    tags: ["Next.js", "Tailwind", "Recharts"],
    color: "bg-blue-100 text-blue-600",
    icon: Code,
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A cute and responsive social platform connecting people with shared interests.",
    tags: ["React", "Firebase", "Framer Motion"],
    color: "bg-pink-100 text-pink-600",
    icon: Code,
  },
  {
    id: 3,
    title: "Task Management",
    description:
      "Productivity tool to organize your daily tasks with a beautiful and intuitive interface.",
    tags: ["TypeScript", "Redux", "Node.js"],
    color: "bg-green-100 text-green-600",
    icon: Code,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one is
            crafted with love and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-card rounded-[2.5rem] p-6 shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              {/* Project Preview Placeholder */}
              <div
                className={`w-full h-48 ${project.color} rounded-[2rem] mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <project.icon className="w-16 h-16 opacity-80" />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-xs font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.button
                    className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.button>
                  <motion.button
                    className="flex-1 px-4 py-3 bg-white border-2 border-border text-gray-800 hover:text-foreground rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-secondary/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
