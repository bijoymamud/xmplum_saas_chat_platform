"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 preloader-aurora" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-soft opacity-20" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-center text-center">
        <motion.div
          animate={{ scale: [0.95, 1.04, 0.95], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-32 w-32 items-center justify-center preloader-float"
        >
          <div className="absolute inset-0 border border-primary/25 rotate-45" />
          <div className="absolute inset-4 border border-primary/15 rotate-45" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-transparent to-indigo-500/25 blur-2xl" />
          <div className="absolute inset-0 preloader-sweep" />
          <Image
            src="https://i.ibb.co.com/ccPqtfC9/xmplum-official.png"
            alt="Xmplum AI Loading"
            fill
            className="object-contain bg-transparent drop-shadow-2xl"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </motion.div>
  );
}