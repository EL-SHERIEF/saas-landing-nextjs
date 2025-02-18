'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import productImage from '../assets/product-image.png';
import Link from 'next/link';
const InfoSection = ({
  title,
  image,
  brief,
  tag,
  align = 'right',
  id,
  alternate = false,
  showLink = false, // Prop to control the display of the link button
  linkHref = '#',   // Default link href
  linkText = 'Learn More' // Default link text
}) => {
  const sectionRef = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Create horizontal translation based on scroll progress.
  const x = useTransform(scrollYProgress, [0, 1], [align === 'left' ? -50 : 50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${
        alternate ? 'border border-[#e3e3e3]' : 'bg-white'
      } sm:px-12 overflow-hidden w-full max-w-screen flex flex-col md:flex-row items-center justify-between lg:py-20 sm:py-16 md:py-10 relative`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto w-[100%] md:w-[80%]">
        <div className="w-full md:w-1/2 lg:w-[60%] px-4 flex flex-col justify-start gap-4">
          {tag && (
            <span className="tag w-fit text-white bg-gradient-to-b from-black to-[#14255d]">
              {tag}
            </span>
          )}
          <h2
            className="text-3xl md:text-[44px] md:leading-[50px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="section-des my-5 text-start text-lg">{brief}</p>
          {showLink && (
            
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href={linkHref}  className="btn btn-primary px-4 py-3 hover:scale-[102%] hover:translate-x-2 transition-all ease-in-out">{linkText}</Link><p className="text-[#00000091] mx-4">(Resellers Rights Included)</p>
            </div>
          )}
        </div>
        {image && (
          <motion.div style={{ x, opacity }} className="w-full px-4 md:w-1/3 my-6 md:mt-0">
            <Image
              src={image}
              alt="Product Image"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InfoSection;
