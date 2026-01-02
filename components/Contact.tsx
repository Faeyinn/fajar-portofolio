"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const socialHealth = [
    {
      name: "Email Me",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:fajar.saputra2907@gmail.com",
      color:
        "hover:bg-red-500/10 hover:text-red-500 border-red-200 dark:border-red-900/30",
      iconBox: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/rahmat-fajar-saputra-90690a287",
      color:
        "hover:bg-blue-500/10 hover:text-blue-500 border-blue-200 dark:border-blue-900/30",
      iconBox:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Faeyinn",
      color:
        "hover:bg-zinc-500/10 hover:text-zinc-500 border-zinc-200 dark:border-zinc-800",
      iconBox: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialHealth.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target={item.name !== "Email Me" ? "_blank" : undefined}
              rel={item.name !== "Email Me" ? "noopener noreferrer" : undefined}
              className={`relative flex flex-col items-center justify-center p-8 rounded-3xl border bg-card/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-2 overflow-hidden ${item.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  item.iconBox.split(" ")[0]
                }`}
              />

              <div
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.iconBox}`}
              >
                {item.icon}
              </div>
              <span className="font-bold text-lg tracking-tight group-hover:scale-105 transition-transform duration-300">
                {item.name}
              </span>
              <span className="text-sm text-muted-foreground mt-2 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                Connect Now
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-8 bg-card/30 dark:bg-card/10 backdrop-blur-md border border-border/50 p-12 rounded-[2.5rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">
              Prefer a direct message?
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              You can also reach me instantly via WhatsApp. I usually reply
              within a few hours!
            </p>
          </div>

          <motion.a
            href="https://wa.me/62895600077007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-lg shadow-[#25D366]/20 hover:bg-[#25D366]/90 hover:shadow-[#25D366]/40 transition-all hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
