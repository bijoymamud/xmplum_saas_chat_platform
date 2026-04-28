"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function GlobalPreloader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the preloader on initial website load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="global-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Animated Logo */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-20 w-24 flex items-center justify-center"
              >
                <div className="absolute inset-0 m-auto h-[120%] w-[120%] animate-pulse rounded-full bg-primary/10 blur-xl" />
                <Image 
                  src="https://i.ibb.co.com/7JTGSGZC/Dark-logo.png" 
                  alt="Xmplum AI Loading"
                  fill
                  className="object-contain dark:invert-0 light:invert drop-shadow-2xl z-10"
                  priority
                  unoptimized
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">Xmplum AI</h2>
                <div className="mt-4 flex items-center justify-center space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-[#0B57D0]" style={{ animationDelay: "0ms" }}></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-[#0B57D0]" style={{ animationDelay: "150ms" }}></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-[#0B57D0]" style={{ animationDelay: "300ms" }}></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}