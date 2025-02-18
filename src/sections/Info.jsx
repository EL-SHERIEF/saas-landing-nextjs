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
      className="sm:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between p-8 relative"
    >
      <div className="w-[60%] px-4 flex flex-col justify-start gap-4">
        <span className="text-xs text-white bg-black rounded-lg px-3 py-2 w-fit">{tag}</span>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{brief}</p>
      </div>
      <motion.div
        style={{ x, opacity }}
        className="md:w-1/3 mt-6 md:mt-0 overflow-hidden bg-white rounded-xl shadow-lg backdrop-blur-sm"
      >
        <Image
          src={image || productImage}
          alt="Product Image"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default InfoSection;
