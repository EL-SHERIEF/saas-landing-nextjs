"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto" id="features">
          <div className="flex justify-center">
            <div className="tag">BONUS            </div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          2 DAY FULL ACCESS PASS TO OUR UNIVERSITY
          </h2>
          <p className="section-des mt-5">
          For 2 Days you get unlimited access to our university.
          </p>
        </div>

            {/* 
            
            
            
            
              <div className="relative">
         <div className="relative flex flex-row flex-wrap align-top justify-start gap-3 pt-10">
          <div className="bg-white flex flex-col gap-6 p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
            <div className="icon">
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM16.68 10.5L15.51 14.06C15.36 14.65 14.73 15.13 14.09 15.13H12.24C11.92 15.13 11.47 15.02 11.27 14.82L9.8 13.67C9.77 14.31 9.48 14.58 8.77 14.58H8.29C7.55 14.58 7.25 14.29 7.25 13.59V8.82C7.25 8.12 7.55 7.83 8.29 7.83H8.78C9.52 7.83 9.82 8.12 9.82 8.82V9.18L11.76 6.3C11.96 5.99 12.47 5.77 12.9 5.94C13.37 6.1 13.67 6.62 13.57 7.08L13.33 8.64C13.3 8.77 13.33 8.91 13.42 9C13.5 9.09 13.62 9.15 13.75 9.15H15.7C16.08 9.15 16.4 9.3 16.59 9.57C16.77 9.83 16.8 10.16 16.68 10.5Z" fill="currentColor"></path> </g></svg>
            </div>
            <div className="text">
              <h3 className="text-2xl font-bold">Why Just $1?</h3>
              <p className="text-sm">
              Showcasing AI power to build lasting user relationships.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
            <div className="icon">
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.43 5.43V6.77C10.81 6.98 9.32 8.66 9.32 11.43V16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43Z" fill="currentColor"></path> <path d="M18.5703 8H14.0003C11.7103 8 10.5703 9.14 10.5703 11.43V18.57C10.5703 20.86 11.7103 22 14.0003 22H18.5703C20.8603 22 22.0003 20.86 22.0003 18.57V11.43C22.0003 9.14 20.8603 8 18.5703 8ZM18.1303 15.75H17.2503V16.63C17.2503 17.04 16.9103 17.38 16.5003 17.38C16.0903 17.38 15.7503 17.04 15.7503 16.63V15.75H14.8703C14.4603 15.75 14.1203 15.41 14.1203 15C14.1203 14.59 14.4603 14.25 14.8703 14.25H15.7503V13.37C15.7503 12.96 16.0903 12.62 16.5003 12.62C16.9103 12.62 17.2503 12.96 17.2503 13.37V14.25H18.1303C18.5403 14.25 18.8803 14.59 18.8803 15C18.8803 15.41 18.5403 15.75 18.1303 15.75Z" fill="currentColor"></path> </g></svg>
            </div>
            <div className="text">
              <h3 className="text-2xl font-bold">Future-Proof Your Skills</h3>
              <p className="text-sm">
              AI knowledge ensures long-term success.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
            <div className="icon">
            <svg className="w-16 h-16"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C15.2262 18 14.51 17.8643 13.8518 17.6141C13.5331 17.4929 13.4737 17.0851 13.6955 16.8262C14.8375 15.4938 15.4707 13.786 15.4707 12C15.4707 10.2082 14.8319 8.49432 13.6986 7.17467C13.4759 6.91543 13.5349 6.50621 13.8544 6.38494C14.5118 6.13537 15.2272 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z" fill="currentColor"></path> <path d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z" fill="currentColor"></path> </g></svg>
            </div>
            <div className="text">
              <h3 className="text-2xl font-bold">Save Time & Money</h3>
              <p className="text-sm">
              AI automation cuts costs & boosts efficiency.
              </p>
            </div>
          </div>
           <div className="bg-white flex flex-col gap-6 p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
            <div className="icon">
            <svg  className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.5 17.25C11.5 17.61 11.14 17.85 10.81 17.71C9.6 17.19 8.02 16.71 6.92 16.57L6.73 16.55C6.12 16.47 5.62 15.9 5.62 15.28V7.58C5.62 6.81 6.24 6.24 7 6.3C8.25 6.4 10.1 7 11.26 7.66C11.42 7.75 11.5 7.92 11.5 8.09V17.25ZM18.38 15.27C18.38 15.89 17.88 16.46 17.27 16.54L17.06 16.56C15.97 16.71 14.4 17.18 13.19 17.69C12.86 17.83 12.5 17.59 12.5 17.23V8.08C12.5 7.9 12.59 7.73 12.75 7.64C13.91 6.99 15.72 6.41 16.95 6.3H16.99C17.76 6.3 18.38 6.92 18.38 7.69V15.27Z" fill="currentColor"></path> </g></svg>
            </div>
            <div className="text">
              <h3 className="text-2xl font-bold">AI for Everyone</h3>
              <p className="text-sm">
              Empowering 1M+ students with affordable AI tools
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
            <div className="icon">
            <svg  className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.7184 18.9972C15.1163 18.8421 15.5758 19.1811 15.4905 19.5995C15.0005 21.4995 13.9005 21.9995 12.5505 21.9995H11.4605C10.1105 21.9995 9.00055 21.4995 8.52055 19.5895C8.4383 19.1705 8.89557 18.8342 9.2932 18.99C10.1478 19.3248 11.0613 19.4995 12.0005 19.4995C12.9442 19.4995 13.8624 19.3309 14.7184 18.9972Z" fill="currentColor"></path> <path d="M15.4908 4.4C15.5792 4.82271 15.1132 5.1669 14.7113 5.00871C13.8736 4.67891 12.9595 4.5 12.0008 4.5C11.0432 4.5 10.1309 4.68113 9.29243 5.01127C8.89454 5.16793 8.43543 4.82901 8.52078 4.41C9.00078 2.5 10.1108 2 11.4608 2H12.5508C13.9008 2 15.0008 2.5 15.4908 4.4Z" fill="currentColor"></path> <path d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12C5.5 14.1 6.49 15.96 8.03 17.15H8.04C9.14 18 10.51 18.5 12 18.5C13.51 18.5 14.89 17.99 15.99 17.13H16C17.52 15.94 18.5 14.08 18.5 12C18.5 8.41 15.59 5.5 12 5.5ZM13.93 14.38C13.78 14.53 13.59 14.6 13.4 14.6C13.21 14.6 13.02 14.53 12.87 14.38L11.47 12.98C11.33 12.84 11.25 12.65 11.25 12.45V9.66C11.25 9.25 11.59 8.91 12 8.91C12.41 8.91 12.75 9.25 12.75 9.66V12.14L13.93 13.32C14.22 13.61 14.22 14.09 13.93 14.38Z" fill="currentColor"></path> </g></svg>
            </div>
            <div className="text">
              <h3 className="text-2xl font-bold">Build in 30 Seconds</h3>
              <p className="text-sm">
              The bundle includes Bolt.new that creates apps & sites instantly.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
            <div className="icon">
            <svg  className="w-16 h-16"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9105 10.7209H14.8205V3.52087C14.8205 1.84087 13.9105 1.50087 12.8005 2.76087L12.0005 3.67087L5.2305 11.3709C4.3005 12.4209 4.6905 13.2809 6.0905 13.2809H9.1805V20.4809C9.1805 22.1609 10.0905 22.5009 11.2005 21.2409L12.0005 20.3309L18.7705 12.6309C19.7005 11.5809 19.3105 10.7209 17.9105 10.7209Z" fill="currentColor"></path> </g></svg>
            </div>
            <div className="text">
              <h3 className="text-2xl font-bold">Master AI Fast</h3>
              <p className="text-sm">
              Step-by-step training included.
              </p>
            </div>
          </div>
         </div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
            
            
            
            */}

      </div>
    </section>
  );
};
