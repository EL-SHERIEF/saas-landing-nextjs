'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import productImage from '../assets/product-image.png';

const InfoSection = ({ title, image, brief, tag, align = 'right' }) => {
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
    <section
      ref={sectionRef}
      className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between lg:py-36 sm:py-16 md:py-36 relative"
    >
      <div className="w-full md:w-2/3 lg:w-[65%] px-4 flex flex-col justify-start gap-4">
        <span className="tag w-fit">{tag}</span>
        <h2 className=" text-3xl md:text-[50px] md:leading-[55px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">{title}</h2>
        <p className="section-des my-5 text-start text-lg">{brief}</p>
      </div>
      <motion.div
        style={{ x, opacity }}
        className="w-full px-4 md:w-1/3 my-6 md:mt-0"
      >
        <Image
          src={image || productImage}
          alt="Product Image"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default InfoSection;
