"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Professional Circular Progress */}
        <div className="relative h-36 w-36 mb-6 flex items-center justify-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="shared-prof-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#144065" />
                <stop offset="100%" stopColor="#1E9193" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="transparent"
              className="text-muted/10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              stroke="url(#shared-prof-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray="301.59"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <div className="relative h-20 w-20">
            <Image
              src="https://i.ibb.co.com/ccPqtfC9/xmplum-official.png"
              alt="Xmplum AI Loading"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs font-bold text-foreground uppercase tracking-widest">
            Loading
          </span>
          <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.3em] font-medium">
            Xmplum Core
          </span>
        </div>
      </div>
    </motion.div>
  );
}
