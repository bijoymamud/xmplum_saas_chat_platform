"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function GlobalPreloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="global-preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <div className="relative flex flex-col items-center justify-center">
              {/* Professional Circular Progress */}
              <div className="relative h-44 w-44 mb-8 flex items-center justify-center">
                <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="prof-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#144065" />
                      <stop offset="100%" stopColor="#1E9193" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Background Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="transparent"
                    className="text-muted/10"
                  />
                  {/* Clean Progress Stroke */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="url(#prof-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="transparent"
                    strokeDasharray="301.59"
                    initial={{ strokeDashoffset: 301.59 }}
                    animate={{ strokeDashoffset: 301.59 - (301.59 * progress) / 100 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  />
                </svg>

                {/* Branded Logo */}
                <div className="relative h-28 w-28">
                  <Image
                    src="https://i.ibb.co.com/ccPqtfC9/xmplum-official.png"
                    alt="Xmplum AI"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}