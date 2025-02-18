import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Features } from "@/sections/Features";
import TrialSection from "@/sections/TrialSection";
import InfoSection from "@/sections/Info";
import JustTheTip from "@/sections/JustTheTip";
import Benifits from "@/sections/benifits";
import productImage from "@/assets/9b4b09799b6c775727eb850a7fd00fcf.webp";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";

import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      {/* DONE */}
      <InfoSection id={'about'} align="left" tag="Welcome to A.I. Pro University" 
 title="I’m Sam Blake, the founder, and I’m excited to share something that may sound too good to be true" 
  brief="We’re practically giving away 99 powerful A.I. automation bots (with full resellers rights)—for just $1.
These bots are game-changers—automation tools that help you save hours of work and streamline your day-to-day tasks without breaking a sweat. And we want you to see for yourself just how much easier life (and business) can be when you harness A.I. properly." 
  image={productImage}
/>
{/* DONE WHY ON EARTH اصلا */}
<ProductShowcase
headingText="Why on EARTH would we do this?"
 pyramidImage={pyramidImage}
tubeImage={tubeImage} >
 <div  className="mt-10" >
  <div className="flex flex-col align-top justify-center gap-3">
  <div className="relative flex flex-col items-start justify-center gap-3  rounded-2xl bg-white p-8 ">
  <span className="absolute -top-4 -left-4 bg-gradient-to-b from-black to-[#001E80] text-white w-10 h-10 min-w-10 min-h-10 text-2xl rounded-lg flex justify-center align-center items-center">
  1</span>  
  <h2 className=" flex flex-row items-center gap-3 text-2xl md:text-[24px] md:leading-[30px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
  
    It doesn't cost me a dime to hand them over​
  </h2>
  <p className=""> Our students originally built most of these bots using ChatGPT. Each bot is publicly available code that we’ve curated, organized, and tested. Now, we’re packing them all into one seamless bundle—and can freely share them with you.</p>
  </div>
  <div className="relative flex flex-col items-start justify-center gap-3  rounded-2xl bg-white p-6 ">
  <span className="absolute -top-4 -left-4 bg-gradient-to-b from-black to-[#001E80] text-white w-10 h-10 min-w-10 min-h-10 text-2xl rounded-lg flex justify-center align-center items-center">
  2</span>  
  <h2 className=" flex flex-row items-center gap-3 text-2xl md:text-[24px] md:leading-[30px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"> 
  We’re ‘Bribing’ You into a Long-Term Relationship.
  </h2>
  <p className="">
  We know these 99 bots will have you wondering what else A.I. can do for you. And after you see how quickly they cut through your workload, we hope you’ll trust
A.I. Pro University to be your go-to resource for the next wave of automation breakthroughs.

  </p>
  </div>

 </div>
 </div>
</ProductShowcase>
{/* DONE NORMAL SECTION*/}
<InfoSection id={'soconsider'} align="left" alternate={false} tag="" 
 title="So consider this our invitation to dive into the world of A.I." 
  brief="With your single dollar, you’ll grab 99 proven, ready-to-use automation bots—plus the legal rights to resell them if you choose.

Whether you’re an entrepreneur trying to scale up, a freelancer looking for an edge, or just someone hungry for efficiency, these bots can help you leapfrog the competition.

Go ahead, hit that button, and grab your 99 A.I. Bots for $1.

Then get ready to watch your productivity soar—and see why this is just the beginning of your journey with A.I. Pro University.

Let’s get started!" 
  image={productImage}
/>
{/* DONE OUR MISSION*/}
<ProductShowcase
headingText="What's our mission?"
 pyramidImage={starImage}
tubeImage={springImage} >
  <p className="max-w-xl text-center text-2xl">
  To empower 1+ million students through A.I. education. Our goal is to help usher in the new era of Hyper Abundance.
  </p>
</ProductShowcase>
{/* DONE TIPS*/}
<JustTheTip tag="AI Tip #1"  title="Always Be in The Know" icon="⚡"
 description="3 Months ago, Bolt.new released never before seen A.I. tech. to the public.."
  subheading="This technology is the most impactful technology ever released for development.
It's like 100 ChatGPTs working together at the same time to create world class apps & websites.
If you've heard of Bolt.new.. The4n you're ahead of 99% of the population.
But if you're like most people.. (Who didn't start using ChatGPT until 2024).. Then you're in the right place."
    buttonText="This is your chance to gain an A.I. edge"
  footerText="Only 6 months ago, these type of projects would cost $10,000+ in development costs and weeks of time.. I'm confident this software, and ones like it, are going to completely redefine the business landscape.
This software will make entire apps and websites in less than 30 seconds. Just 1 year ago, these same websites and apps would cost $10,000+ and weeks of development time.
The best part?
It's publicly available for 100% free to create an account."
  productImage={productImage}
  imageAlt="Product Image"
  features={[
    "We are proud to be the ONLY A.I. education platform in the world with a Bolt.new training.",
  ]}
/>
{/* DONE TIPS*/}
<JustTheTip tag="AI Tip #2"  title="You're either using A.I., or you're getting beat by it." icon="💫"
 description="In this new landscape - Fortunes will be made, and fortunes will be lost."
  subheading={'Some will say, "AI helped create abundance.."While others will say, "AI took my job.".'}
    buttonText="Get Started"
  footerText="Imagine what sort of impact you are going to make in this world now that you have the same power as fortune 500 companies. 99 Employees that will work day or night for you, for free.
And imagine how unstoppable you'll feel when you develop a unique and unbeatable 'AI Advantage' with over 99 custom A.I. bots that automate 90% of your tasks."
  productImage={productImage}
  imageAlt="Product Image"
  features={[
    "We are proud to be the ONLY A.I. education platform in the world with a Bolt.new training.",
  ]}
/>
{/* DONE TIPS*/}
<JustTheTip tube={false} tag="AI Tip #3"  title="Get ahead NOW. And STAY ahead." icon="💪"
 description="I have a team of 6 full time employees who's sole job is to learn about new A.I. softwares which we immediately translate into trainings.."
  subheading="Progress is happening faster than ever...
If there was a course or a training that came out 1 month ago.. It's no longer relevant.
Just like that, new softwares are coming out at the speed of light and if you're not using what everyone else is using, you get dropped down to the lowest totem on the pole."
    buttonText="CLAIM 99 BOTS FOR $1"
  footerText="Which is why we update our trainings. DAILY . And now, for just $1, you can get your hands on 99 powerful A.I. Bots— with Reseller Rights included —so you can stay miles ahead of the pack."
  productImage={productImage}
  imageAlt="Product Image"
  features={[
    "(Resellers Rights Included)",
  ]}
/>
      {/* DONE  Adapt or die*/}
         <div className="bg-gradient-to-b to-[#FFFFFF] from-[#D2DCFF] border-b border-[#e3e3e3]">
<InfoSection id={'AdaptorDie'}
  tag="" 
  title="As they say: Adapt.. Or Die !" 
  brief="When it comes to education, you’ll learn from one of the most experienced teams in the field. I didn’t start this company by accident; I did it because my own success with A.I. has been off the chart.
I feel an obligation to share the inside scoop and level the playing field…
Because nobody likes playing a game without the cheat codes (especially when everyone else has them in hand)." 
  image={productImage}
  align="left"
/>
      {/* DONE  What These 99 Bots Will Do For You..*/}

<InfoSection id={'WhatThese99'}
  tag="" 
  title="What These 99 Bots Will Do For You.." 
  brief="When you see how much value you're getting today for $1, you're going to feel like a little kid at Christmas.
Most importantly, you're going to have an unbeatable A.I. edge in 2025.
Imagine having 99 employees who work for you 24/7..
Who never get tired..
​Who never call in sick.. Or ask for a raise..
Who will work for FREE!" 
  image={productImage}
  align="left"
/>
      {/* I'm going to ask you for ONE favor..*/}

<InfoSection id={'YouWillBeUnstoppable'}
  tag="" 
  title="You Will Be Unstoppable.." 
  brief={`At the end of 2025..
Some people will say, "A.I. changed my life.."
As opposed to looking back with regret and saying, "A.I. took my job."
And feeling embarrassed every time you here AI mentioned on the TV or radio. These 99 bots are going to save you $10,000's of in 2025.
And all you pay is $1.`} 
  image={productImage}
  align="left"
/>

  

<InfoSection id={'mission'}
  tag="mission-guarantee" 
  title="Our Bold Mission & Unbeatable Guarantee – Join the A.I. Revolution Today" 
  brief="At A.I. Pro University, our mission is to empower over 1 million students through transformative A.I. education. With our ‘10X Productivity or Personal Coaching or Your Money Back’ guarantee, you’re not just investing in technology – you’re stepping into a future of boundless opportunity and abundance." 
  image={productImage}
/>
         </div>
      {/* DONE FAVOR*/}

         <InfoSection image='' id={'mission'}  tag=""  title="I'm going to ask you for ONE favor.." 
  brief={
    `
    It's not a BIG favor..

In fact, it's a favor so small it's not even worth mentioning.

We are going to give you a sneak peak of our new dashboard..
All we ask is that 7 days later, you give us feedback on our platform.
Inside, you'll get be able to access your bots and step by step trainings on how to implement them..
In fact, it's a favor so small it's not even worth mentioning.
All I ask from you, is when these 99 bots help you save time, money and make you more productive, is that you share them with your friends and family.
Together, we will help usher in the new Age of Abundance.
Enjoy!
Sam Blake
Founder
AI Pro University
    `
  }
  showLink={true}
  linkHref={'https://ai-pro-university.com/feedback'}
  linkText={'CLAIM 99 BOTS FOR $1'}
/>

      {/* DONE  MILLION DOLLAR QUESTION*/}

<ProductShowcase
headingText="Why on EARTH would we do this?"
 pyramidImage={pyramidImage}
tubeImage={tubeImage} >
 <div  className="mt-10" >
  <div className="flex flex-col align-top justify-center gap-3">
  <div className="relative flex flex-col items-start justify-center gap-3  rounded-2xl bg-white p-8 ">
  <span className="absolute -top-4 -left-4 bg-gradient-to-b from-black to-[#001E80] text-white w-10 h-10 min-w-10 min-h-10 text-2xl rounded-lg flex justify-center align-center items-center">
  1</span>  
  <h2 className=" flex flex-row items-center gap-3 text-2xl md:text-[24px] md:leading-[30px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
  
    It doesn't cost me a dime to hand them over​
  </h2>
  <p className=""> Our students originally built most of these bots using ChatGPT. Each bot is publicly available code that we’ve curated, organized, and tested. Now, we’re packing them all into one seamless bundle—and can freely share them with you.</p>
  </div>
  <div className="relative flex flex-col items-start justify-center gap-3  rounded-2xl bg-white p-6 ">
  <span className="absolute -top-4 -left-4 bg-gradient-to-b from-black to-[#001E80] text-white w-10 h-10 min-w-10 min-h-10 text-2xl rounded-lg flex justify-center align-center items-center">
  2</span>  
  <h2 className=" flex flex-row items-center gap-3 text-2xl md:text-[24px] md:leading-[30px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"> 
  We’re ‘Bribing’ You into a Long-Term Relationship.
  </h2>
  <p className="">
  We know these 99 bots will have you wondering what else A.I. can do for you. And after you see how quickly they cut through your workload, we hope you’ll trust
A.I. Pro University to be your go-to resource for the next wave of automation breakthroughs.

  </p>
  </div>

 </div>
 </div>
</ProductShowcase>

<Features />

<Pricing />

      <Benifits/>
      <Testimonials />

      <TrialSection />

      <CallToAction />
      <Footer />
    </div>
  );
}
