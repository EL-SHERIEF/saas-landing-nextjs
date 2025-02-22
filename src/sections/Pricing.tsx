"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
const pricingTiers = [
  {
    title: "For Regular Customers",
    monthlyPrice: '299.99',
    buttonText: "renew now",
    popular: false,
    inverse: false,
    features: [
      "99 powerful automation bots",
      "Boost productivity & streamline tasks",
      "Full reseller rights to generate income",
      "Save time and cut costs in your business",
      "XAlready a customer? Keep automating for just $1!",
    ],
  },
  {
    title: "For New Customers",
    monthlyPrice: '1',
    buttonText: "ONLY 1$",
    popular: true,
    inverse: true,
    features: [
      "99 A.I. Automation Bots + Exclusive Bonuses",
      "Full reseller rights included",
      "Automate tasks and save hours of work",
      "Potential to cut costs by $10,000 in 2025",
      "BONUS: Exclusive training on maximizing A.I. automation",
      "BONUS: Priority access to future updates",
      "🔥 First-time users get extra perks!",

    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title" id="pricing">Your Price Today: $1          </h2>
          <p className="section-des mt-5">
          ONLY 500 FIRST TIME CUSTOMERS ACCEPTED AT THIS PRICE BEFORE.
          THE PRICE GOES BACK UP TO $299.99
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, features, inverse }) => (
            <div
              key={title}
              className={twMerge(
                "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full box-content",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <Link href={'/payment'}
                className={twMerge("btn btn-primary w-full mt-[30px]", inverse && "bg-white text-black")}
              >
                {buttonText}
              </Link>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
