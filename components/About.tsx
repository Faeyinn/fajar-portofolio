"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles,
  User,
  Heart,
  Star,
  Headphones,
  Utensils,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground relative z-10 flex items-center justify-center gap-3">
            About Me
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio Card - Large */}
          <motion.div
            className="md:col-span-2 bg-white/80 dark:bg-card/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border-2 border-white/50 dark:border-white/10 relative overflow-hidden group transition-all flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors" />

            <div className="absolute top-6 right-6 text-primary/20 rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <User className="w-24 h-24" />
            </div>

            <h3 className="text-2xl font-bold font-heading mb-4 flex items-center gap-3 relative z-10">
              <div className="bg-primary/20 p-2.5 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              Who am I?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10 font-medium">
              I&apos;m{" "}
              <span className="text-foreground font-bold">
                Rahmat Fajar Saputra
              </span>
              , a passionate web developer who loves creating{" "}
              <span className="bg-primary/20 px-2 py-0.5 rounded-lg text-primary-foreground font-bold mx-1 inline-block">
                modern
              </span>{" "}
              and{" "}
              <span className="bg-secondary/30 px-2 py-0.5 rounded-lg text-secondary-foreground font-bold mx-1 inline-block">
                cute
              </span>{" "}
              digital experiences. With expertise in React, Next.js, and various
              web technologies, I enjoy bringing ideas to life through code. I
              focus on building accessible, pixel-perfect, and performant web
              applications.
            </p>
          </motion.div>

          <div className="grid grid-rows-2 gap-6">
            {/* Stats Card 1 - Experience */}
            <motion.div
              className="bg-gradient-to-br from-[#ffb7b2]/20 to-[#ffb7b2]/5 p-6 rounded-[2.5rem] flex flex-col justify-center items-center text-center border-2 border-[#ffb7b2]/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="bg-white p-3 rounded-full shadow-lg mb-3 rotate-3 group-hover:rotate-12 transition-transform">
                <Briefcase className="w-6 h-6 text-[#ffb7b2]" />
              </div>
              <span className="text-xl font-bold text-[#ffb7b2] font-heading mb-1">
                Student
              </span>
              <span className="text-muted-foreground font-bold text-xs bg-white/60 px-3 py-1 rounded-full shadow-sm">
                Computer Engineering
              </span>
            </motion.div>

            {/* Stats Card 2 - Projects */}
            <motion.div
              className="bg-gradient-to-br from-[#e2f0cb]/40 to-[#e2f0cb]/10 p-6 rounded-[2.5rem] flex flex-col justify-center items-center text-center border-2 border-[#e2f0cb]/40 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="bg-white p-3 rounded-full shadow-lg mb-3 -rotate-3 group-hover:-rotate-12 transition-transform">
                <Code className="w-6 h-6 text-[#8d6e63]" />
              </div>
              <span className="text-4xl font-bold text-[#8d6e63] font-heading mb-1">
                5+
              </span>
              <span className="text-muted-foreground font-bold text-xs bg-white/60 px-3 py-1 rounded-full shadow-sm">
                Projects Built
              </span>
            </motion.div>
          </div>

          {/* Things I Love */}
          <motion.div
            className="md:col-span-3 bg-white/60 dark:bg-card/60 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border-2 border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
              <h3 className="text-3xl font-bold font-heading text-center">
                Things I Love
              </h3>
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Coding",
                  image:
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
                  rotate: "rotate-2",
                  color: "bg-blue-100",
                  icon: Code,
                },
                {
                  name: "Spicy Noodles",
                  image:
                    "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80",
                  rotate: "-rotate-2",
                  color: "bg-red-100",
                  icon: Utensils,
                },
                {
                  name: "Music",
                  image:
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
                  rotate: "rotate-1",
                  color: "bg-pink-100",
                  icon: Headphones,
                },
                {
                  name: "Learning",
                  image:
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=80",
                  rotate: "-rotate-1",
                  color: "bg-green-100",
                  icon: BookOpen,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  className={`relative group cursor-pointer ${item.rotate} hover:rotate-0 transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`absolute inset-0 ${item.color} rounded-[2rem] transform translate-y-2 translate-x-2`}
                  />
                  <div className="relative bg-white p-3 pb-12 rounded-[2rem] shadow-md border border-gray-100 overflow-hidden h-full">
                    <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                        <item.icon className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 w-full text-center px-2">
                      <span className="font-heading font-bold text-lg text-gray-700 group-hover:text-primary transition-colors block truncate">
                        {item.name}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
