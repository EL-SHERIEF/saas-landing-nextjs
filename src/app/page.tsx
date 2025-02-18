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
import Benifits from "@/sections/benifits";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
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
<ProductShowcase />

<InfoSection 
  tag="mission-guarantee" 
  title="Our Bold Mission & Unbeatable Guarantee – Join the A.I. Revolution Today" 
  brief="At A.I. Pro University, our mission is to empower over 1 million students through transformative A.I. education. With our ‘10X Productivity or Personal Coaching or Your Money Back’ guarantee, you’re not just investing in technology – you’re stepping into a future of boundless opportunity and abundance." 
  image={productImage}
/>
         </div>

         <JustTheTip tag="AI Tip #1"  title="Always Be in The Know" icon="⚡"
 description="3 Months ago, Bolt.new released never before seen A.I. tech. to the public.."
  subheading="This technology is the most impactful technology ever released for development.
It's like 100 ChatGPTs working together at the same time to create world class apps & websites.
If you've heard of Bolt.new.. Then you're ahead of 99% of the population.
But if you're like most people.. (Who didn't start using ChatGPT until 2024).. Then you're in the right place."
  emailPlaceholder="Enter your email"  buttonText="Get Started"
  footerText="Only 6 months ago, these type of projects would cost $10,000+ in development costs and weeks of time.. I'm confident this software, and ones like it, are going to completely redefine the business landscape. This software will make entire apps and websites in less than 30 seconds. Just 1 year ago, these same websites and apps would cost $10,000+ and weeks of development time."
  productImage="/path/to/your/image.webp"
  imageAlt="Product Image"
  stats={[
    { value: '1M+', label: 'Student Users' },
    { value: '950M+', label: 'Task Organized' },
    { value: '70+', label: 'ran Companies' },
    { value: '10M+', label: 'Users' },
  ]}
  features={[
    "We are proud to be the ONLY A.I. education platform in the world with a Bolt.new training.",
  ]}
/>



         <InfoSection  tag="welcome"  title="Welcome to A.I. Pro University – Your Gateway to A.I. Mastery and Productivity" 
  brief="I’m Sam Blake, founder of A.I. Pro University. We’re dedicated to revolutionizing your productivity with our state-of-the-art automation tools. Experience the power of 99 transformative bots for just $1 and see how our cutting-edge solutions can elevate your business and creative endeavors." 
  image={productImage}
/>

<JustTheTip tag="AI Tip #2"  title="You're either using A.I., or you're getting beat by it." icon="💫"
 description="In this new landscape - Fortunes will be made, and fortunes will be lost."
  subheading="Some will say, `AI helped create abundance..`While others will say, `AI took my job.`."
  emailPlaceholder="Enter your email"  buttonText="Get Started"
  footerText="Imagine what sort of impact you are going to make in this world now that you have the same power as fortune 500 companies. 99 Employees that will work day or night for you, for free.
And imagine how unstoppable you'll feel when you develop a unique and unbeatable 'AI Advantage' with over 99 custom A.I. bots that automate 90% of your tasks."
  productImage="/path/to/your/image.webp"
  imageAlt="Product Image"
  stats={[
    { value: '1M+', label: 'Student Users' },
    { value: '950M+', label: 'Task Organized' },
    { value: '70+', label: 'ran Companies' },
    { value: '10M+', label: 'Users' },
  ]}
  features={[
    "We are proud to be the ONLY A.I. education platform in the world with a Bolt.new training.",
  ]}
/>

<JustTheTip tag="AI Tip #3"  title="Get ahead NOW. And STAY ahead." icon="💪"
 description="I have a team of 6 full time employees who's sole job is to learn about new A.I. softwares which we immediately translate into trainings.."
  subheading="Progress is happening faster than ever...
If there was a course or a training that came out 1 month ago.. It's no longer relevant.
If there was a course or a training that came out 1 month ago.. It's no longer relevant.
Just like that, new softwares are coming out at the speed of light and if you're not using what everyone else is using, you get dropped down to the lowest totem on the pole."
  emailPlaceholder="Enter your email"  buttonText="Get Started"
  footerText="That why we update our trainings. DAILY . And now, for just $1, you can get your hands on 99 powerful A.I. Bots— with Reseller Rights included —so you can stay miles ahead of the pack."
  productImage="/path/to/your/image.webp"
  imageAlt="Product Image"
  stats={[
    { value: '1M+', label: 'Student Users' },
    { value: '950M+', label: 'Task Organized' },
    { value: '70+', label: 'ran Companies' },
    { value: '10M+', label: 'Users' },
  ]}
  features={[
    "As they say: Adapt.. Or Die !",
  ]}
/>
      <Pricing />
      <Benifits/>
      <Testimonials />
      
      <TrialSection />

      <CallToAction />
      <Footer />
    </div>
  );
}
