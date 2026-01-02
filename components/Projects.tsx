"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, featuring modern web technologies and
            responsive user interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group flex flex-col bg-card/50 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
            >
              {/* Image Container */}
              <Link
                href={`/projects/${project.slug}`}
                className="block relative overflow-hidden aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                {project.images && project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50 text-muted-foreground">
                    <Code className="w-12 h-12 opacity-50" />
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-semibold rounded-full border border-border">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block group-hover:text-primary transition-colors"
                  >
                    <h3 className="text-2xl font-bold font-heading mb-3 line-clamp-1">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm md:text-base">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-6 flex gap-3 border-t border-border/50">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors border bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-100 dark:!bg-[#18181b] dark:!text-[#a1a1aa] dark:!border-[#27272a] dark:hover:!bg-[#27272a] dark:hover:!text-white"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
