import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const WorkingWith = () => {

  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Jahangirnagar_University_Logo.svg/1280px-Jahangirnagar_University_Logo.svg.png", alt: "JU" },
    { src: "https://amc.edu.bd/assets/images/logo/AMC_Logo(200).png", alt: "AMC" },
    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Khulna_University_Logo.svg/960px-Khulna_University_Logo.svg.png", alt: "KU" },
    { src: "https://static.vecteezy.com/system/resources/previews/067/142/746/non_2x/national-university-high-quality-logo-national-university-of-bangladesh-nu-icon-of-bd-premium-quality-transparent-background-digital-download-free-png.png", alt: "NU" },
  ];

  return (
    <section className='pt-24 bg-transparent'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          
          {/* Left Side: Brand Narrative */}
          <div className='space-y-8'>
            <div className='flex items-center gap-3'>
               {/* Accent bar using brand color */}
              <div className="h-1 w-12 rounded-full bg-primary"></div>
              <span className='text-sm font-bold uppercase tracking-widest opacity-70'>
                Our Academic Network
              </span>
            </div>
            
            <h2 className='font-heading text-3xl font-semibold text-foreground sm:text-4xl'>
              We are working with students of <span>these Colleges & Universities</span>
            </h2>
            
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Building bridges between industry and academia. We actively engage with talent from the nation&apos;s 
              most prestigious institutions to drive innovation forward.
            </p>

            <button 
              className="px-8 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95"
             
            >
              Learn More
            </button>
          </div>

          {/* Right Side: The Marquee Display */}
          <div className='relative'>
            {/* The "Mask" container creates a soft edge effect */}
            <div className='py-12 border-y border-gray-100 dark:border-gray-800 relative overflow-hidden'>
              <Marquee 
                gradient={true} 
                // Adjusting gradient to be transparent or match your background
                gradientColor="white" 
                gradientWidth={80} 
                speed={45} 
                pauseOnHover={true}
              >
                {logos.map((logo, index) => (
                  <div key={index} className="mx-10 flex items-center justify-center">
                    <div className="relative group p-4">
                      <Image 
                        src={logo.src} 
                        alt={logo.alt} 
                        width={90} 
                        height={70} 
                        className="object-contain filter grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
            
            {/* Background Glow using brand color (Very Professional Touch) */}
            <div 
              className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-20'
           
            ></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WorkingWith