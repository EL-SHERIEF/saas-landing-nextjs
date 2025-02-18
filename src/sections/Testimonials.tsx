"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    "text": "These AI bots have completely changed how I work! Automation has saved me countless hours every week.",
    "imageSrc": avatar1.src,
    "name": "Jamie Rivera",
    "username": "@jamietechguru00"
  },
  {
    "text": "Our team's productivity has skyrocketed since we started using these AI bots. Tasks that took hours now take minutes!",
    "imageSrc": avatar2.src,
    "name": "Josh Smith",
    "username": "@jjsmith"
  },
  {
    "text": "This AI automation tool has streamlined my entire workflow. Managing projects has never been this easy!",
    "imageSrc": avatar3.src,
    "name": "Morgan Lee",
    "username": "@morganleewhiz"
  },
  {
    "text": "I was amazed at how quickly we integrated these AI bots into our daily processes. Game-changer!",
    "imageSrc": avatar4.src,
    "name": "Casey Jordan",
    "username": "@caseyj"
  },
  {
    "text": "Handling multiple clients and projects is now effortless. AI automation keeps everything running smoothly.",
    "imageSrc": avatar5.src,
    "name": "Taylor Kim",
    "username": "@taylorkimm"
  },
  {
    "text": "The customization and integration capabilities of these AI bots are top-notch. Perfect for scaling businesses!",
    "imageSrc": avatar6.src,
    "name": "Riley Smith",
    "username": "@rileysmith1"
  },
  {
    "text": "Since adopting AI automation, our team collaboration has improved drastically. No more repetitive tasks!",
    "imageSrc": avatar7.src,
    "name": "Jordan Patels",
    "username": "@jpatelsdesign"
  },
  {
    "text": "With these AI bots, we can easily assign tasks, track progress, and automate repetitive work in one place.",
    "imageSrc": avatar8.src,
    "name": "Sam Dawson",
    "username": "@dawsontechtips"
  },
  {
    "text": "This tool's intuitive interface and powerful AI features help me stay ahead in my industry!",
    "imageSrc": avatar9.src,
    "name": "Casey Harper",
    "username": "@casey09"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className} id="testi">
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 "
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white pt-32">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>

          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-des mt-5">
            From intuitive task management to powerful integrations, our app has become an essential tool for users
            around the world.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
