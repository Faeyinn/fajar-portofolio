"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let&apos;s Connect!
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-card p-8 md:p-12 rounded-[3rem] shadow-xl border border-white/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects or just chat about
            technology. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <motion.a
              href="mailto:example@email.com"
              className="p-4 bg-primary/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-primary/20 transition-colors group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-bold text-primary">Email Me</span>
            </motion.a>

            <motion.a
              href="#"
              className="p-4 bg-[#0A66C2]/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#0A66C2]/20 transition-colors group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="font-bold text-[#0A66C2]">LinkedIn</span>
            </motion.a>

            <motion.a
              href="#"
              className="p-4 bg-[#333]/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#333]/20 transition-colors group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-[#333] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <span className="font-bold text-[#333]">GitHub</span>
            </motion.a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground font-medium">
              Or send me a quick message directly
            </p>
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-bold shadow-lg shadow-primary/30 flex items-center gap-3 hover:shadow-xl hover:shadow-primary/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
