'use client';
import { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ReactElement } from 'react';

interface ProductShowcaseProps {
  bgGradient?: string;
  tagText?: string;
  headingText?: string;
  headingGradient?: string;
  descriptionText?: string;
  pyramidImage?: StaticImageData;
  tubeImage?: StaticImageData;
  children: ReactElement;  // Accept React elements with props (like <Image />)
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  bgGradient = 'bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]',
  tagText,
  headingText = 'Get instant access to 99 automation bots',
  headingGradient = 'bg-gradient-to-b from-black to-[#001E80]',
  descriptionText = '',
  pyramidImage,
  tubeImage,
  children,  // This will now accept elements like <Image />
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className={`${bgGradient} py-24 overflow-x-clip`}>
      <div className="md:max-w-[1000px] sm:max-w-[90%] mx-auto">
        <div className="max-w-[540px] mx-auto">
          {tagText && (
            <div className="flex justify-center">
              <div className="tag">{tagText}</div>
            </div>
          )}

          <h2
            className={`text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter ${headingGradient} text-transparent bg-clip-text mt-5`}
          >
            {headingText}
          </h2>

          <p className="section-des mt-5">{descriptionText}</p>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          {/* Render the image passed as a child */}
          {children}

          {pyramidImage && (
            <motion.img
              src={pyramidImage.src}
              alt="Pyramid image"
              height={262}
              width={262}
              className="hidden md:block absolute -right-40 -top-32"
              style={{ translateY }}
            />
          )}
          {tubeImage && (
            <motion.img
              src={tubeImage.src}
              alt="Tube image"
              height={248}
              width={248}
              className="hidden md:block absolute bottom-12 -left-56"
              style={{ translateY }}
            />
          )}
        </div>
      </div>
    </section>
  );
};
