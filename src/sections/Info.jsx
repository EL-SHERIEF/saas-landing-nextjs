'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import productImage from '../assets/product-image.png';

const InfoSection = ({ title, image, brief, tag, align = 'right',id }) => {
  const sectionRef = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Create horizontal translation based on scroll progress.
  // If align is 'left', slide from -50px to 0; otherwise slide from 50px to 0.
  const x = useTransform(scrollYProgress, [0, 1], [align === 'left' ? -50 : 50, 0]);
  // Fade in from 0 to full opacity.
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id={id}
      ref={sectionRef}
      className="bg-white sm:px-12 overflow-hidden w-full max-w-screen flex flex-col md:flex-row items-center justify-between lg:py-36 sm:py-16 md:py-36 relative "
    >
      <div className='flex flex-col md:flex-row items-center justify-between  mx-auto w-[100%] md:w-[80%]'>
      <div className="w-full md:w-1/2 lg:w-[60%] px-4 flex flex-col justify-start gap-4">
        <span className="tag w-fit text-white bg-gradient-to-b from-black to-[#14255d] ">{tag}</span>
        <h2 className=" text-3xl md:text-[44px] md:leading-[50px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-1">{title}</h2>
        <p className="section-des my-5 text-start text-lg">{brief}</p>
      </div>
      <motion.div
        style={{ x, opacity }}
        className="w-full px-4 md:w-1/3 my-6 md:mt-0"
      >
        <Image
          src={image || productImage}
          alt="Product Image"
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
      </div>
  
    </section>
  );
};

export default InfoSection;
