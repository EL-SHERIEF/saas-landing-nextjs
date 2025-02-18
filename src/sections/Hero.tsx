"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-0 md:pb-10 overflow-x-clip"
      style={{ background: "radial-gradient(ellipse 200% 50% at bottom left, #183EC2, #EAEEFE 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-[750px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            LIMITED TIME SPECIAL: New Customers ONLY!
            </div>
            <h1 className="text-4xl md:text-[2.5rem]/[1.1] font-bold tracking-tighter bg-gradient-to-l from-black to-[#00114a] text-transparent bg-clip-text mt-6">
            Gain an Unbeatable A.I. Edge 
            <span className=" bg-gradient-to-b from-[#0046ae] to-[#003cff] text-transparent bg-clip-text"> With 99 Powerful Bots </span> 
            To Automate 90% Of Your Tasks and Slash
            <span className=" bg-gradient-to-b from-[#0046ae] to-[#003cff] text-transparent bg-clip-text"> $10k in Costs </span>
             in 2025
             <span className=" bg-gradient-to-b from-[#0046ae] to-[#003cff] text-transparent bg-clip-text"> For Just $1 </span>

            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Get instant access to 99 automation bots —so you’ll always stay ahead in a rapidly evolving market.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href={'#pricing'} className="btn btn-primary px-4 py-3 hover:scale-[102%] hover:translate-x-2 transition-all ease-in-out">CLAIM 99 BOTS FOR $1</Link><p className="text-[#00000091] mx-4">(Resellers Rights Included)</p>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
