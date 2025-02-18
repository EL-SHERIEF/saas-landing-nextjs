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
import productImage from '@/assets/9b4b09799b6c775727eb850a7fd00fcf.webp'; // renamed to avoid conflict
import JustTheTip from "@/sections/JustTheTip";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <InfoSection align="left"
  tag="limited-offer" 
  title="Limited Time Special: 99 A.I. Automation Bots For Just $1 – New Customers ONLY!" 
  brief="Unlock a groundbreaking offer with 99 powerful automation bots meticulously curated from top A.I. technologies. Automate 90% of your tasks and slash your operating costs by $10K in 2025. Embrace an unbeatable A.I. edge with full reseller rights and secure your future today." 
  image={productImage}
/>
      <Features />
         <div className="bg-gradient-to-b to-[#FFFFFF] from-[#D2DCFF] border-b border-[#e3e3e3]">
<InfoSection 
  tag="bot-benefits" 
  title="Revolutionize Your Workflow: 99 Bots That Transform Your Productivity" 
  brief="Imagine having 99 digital assistants at your command – automating tasks from Excel formulas and customer support to app development, content creation, and business strategy. These bots are engineered to save you time, reduce costs, and empower you to focus on growth and innovation." 
  image={productImage}
  align="left"
/>

<InfoSection 
  tag="mission-guarantee" 
  title="Our Bold Mission & Unbeatable Guarantee – Join the A.I. Revolution Today" 
  brief="At A.I. Pro University, our mission is to empower over 1 million students through transformative A.I. education. With our ‘10X Productivity or Personal Coaching or Your Money Back’ guarantee, you’re not just investing in technology – you’re stepping into a future of boundless opportunity and abundance." 
  image={productImage}
/>
         </div>
         <JustTheTip />
         <InfoSection 
  tag="welcome" 
  title="Welcome to A.I. Pro University – Your Gateway to A.I. Mastery and Productivity" 
  brief="I’m Sam Blake, founder of A.I. Pro University. We’re dedicated to revolutionizing your productivity with our state-of-the-art automation tools. Experience the power of 99 transformative bots for just $1 and see how our cutting-edge solutions can elevate your business and creative endeavors." 
  image={productImage}
/>

      <Pricing />
      <Testimonials />
      <TrialSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
