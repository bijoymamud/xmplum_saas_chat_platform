"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-20 w-24"
        >
          <Image 
            src="https://i.ibb.co.com/7JTGSGZC/Dark-logo.png" 
            alt="Xmplum AI Loading"
            fill
            className="object-contain dark:invert-0 light:invert"
            priority
            unoptimized
          />
        </motion.div>
        <p className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase opacity-80 animate-pulse">
          Loading
        </p>
      </div>
    </motion.div>
  );
}