"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-background text-muted-foreground text-center border-t border-border">
      <div className="flex items-center justify-center gap-2">
        <span className="text-lg">Made with</span>
        <Heart className="w-5 h-5 text-red-500 animate-pulse" />
        <span className="text-lg">by Fajar</span>
      </div>
    </footer>
  );
}
