
"use client";

import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

const WorkingWith = () => {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Jahangirnagar_University_Logo.svg/1280px-Jahangirnagar_University_Logo.svg.png", alt: "JU" },
    { src: "https://amc.edu.bd/assets/images/logo/AMC_Logo(200).png", alt: "AMC" },
    { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-F3-2QD2hyphenhyphenqde16PrPtFkCxSIS3G55CYD7yuEgKG4K7EZf4zaOb8baPpzmYn_jZUfn70PVu7lK2cjkx3Db3nVH49ICnQfxJKIO6phyphenhyphenRIl4hBcmXXkOTxlUZzYrXhVz-i1aUoolh6KcE4/s1600/logo+of+jessore+university+of+science+and+technology.png", alt: "KU" },
    { src: "https://static.vecteezy.com/system/resources/previews/067/142/746/non_2x/national-university-high-quality-logo-national-university-of-bangladesh-nu-icon-of-bd-premium-quality-transparent-background-digital-download-free-png.png", alt: "NU" },
  ];

  return (
    /* 1. overflow-hidden here prevents the whole page from scrolling due to scaling */
    <section className='py-24 bg-transparent overflow-hidden'> 
      <div className='mx-auto max-w-screen-2xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          
          <div className='space-y-6'>
            <div className='flex items-center gap-3'>
              <div className="h-1 w-12 rounded-full bg-primary"></div>
              <span className='text-sm font-bold uppercase tracking-widest text-muted-foreground'>
                Our Academic Network
              </span>
            </div>
            
            <h2 className='font-heading text-4xl font-bold text-foreground sm:text-5xl leading-[1.1]'>
              Collaborating with students from <span className="text-primary">leading institutions</span>
            </h2>
            
            <p className='text-lg text-muted-foreground leading-relaxed max-w-lg'>
              We actively engage with talent from the nation&apos;s most prestigious 
              colleges and universities.
            </p>
          </div>

          <div className='relative'>
            {/* 2. py-24 provides a "safe zone" so logos can grow without hitting the borders */}
            <div className=''> 
              <Marquee 
                gradient={true} 
                gradientColor="white" 
                gradientWidth={100} 
                speed={35} 
                pauseOnHover={false} 
              >
                {logos.map((logo, index) => (
                  <motion.div 
                    key={index} 
                    className="mx-12 flex items-center justify-center"
                    /* 3. We use a slightly smaller scale (1.1) to ensure safety on mobile screens */
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={95} 
                      height={60} 
                      className="object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                    />
                  </motion.div>
                ))}
              </Marquee>
            </div>
            
            {/* 4. Background Glow is absolute and behind, so it won't cause scrollbars */}
            <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-[120px] opacity-10 bg-primary rounded-full'></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WorkingWith