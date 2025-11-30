"use client";

import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm">
                {project.role}
              </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/20 text-secondary-foreground font-bold rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-border/50 group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold font-heading mb-4">
                About the Project
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <ExternalLink className="w-5 h-5" />
                View Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-border text-gray-800 hover:text-foreground rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-secondary/20 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
