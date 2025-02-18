"use client";  // Add this at the top
import { motion } from 'framer-motion';

const automationList = [
  "Excel formulas", "Customer Support", "Avatar Creator", "Idea Generator",
  "Book writer", "Blog writer", "VSL writer", "Logo creation",
  "Brand Creation", "Email Copy", "LinkedIn Strategies", "Organic Traffic",
  "Advertising Analysis", "App Development", "Software Coding", "Business Growth",
  "Ad Copy", "Social Media", "Sales Funnels", "Time Management",
  "Business Strategy", "Client Persona Generator", "Organic Traffic", "Web Designer",
  "Google Ad Creation", "Facebook Ads", "Advertising Automation", "Software Creation",
  "Data Analysis", "Video Sales Letters", "Viral Ideas", "Pitch Decks"
];

export default function AutomationSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center" id='benifits'>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col">
        <h2 className="text-center text-3xl md:text-[50px] md:leading-[50px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
        99 Custom Automation Bots
        </h2>
        <p className="section-des mt-5 text-2xl">
        Whether you're using a free or a paid ChatGPT account, these powerful AI bots will automate any task & save tens of thousands of dollars.
        </p>
        <p className="section-des mt-5 text-sm border border-black/20 text-black/60 rounded-xl w-fit px-4 py-2">
          Here's what you will automate
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {automationList.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-4 shadow-sm rounded-xl bg-white/30 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-gray-900 font-medium text-lg">💠 {item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
