"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold font-heading">
              Fajar<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Building digital experiences with passion and precision.
              Let&apos;s turn your ideas into reality.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Faeyinn"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/rahmat-fajar-saputra-90690a287"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:fajar.saputra2907@gmail.com"
                className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Navigation</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Get in Touch</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="mailto:fajar.saputra2907@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  fajar.saputra2907@gmail.com
                </a>
              </li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Fajar. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in Indonesia.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            Back to Top
            <span className="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
