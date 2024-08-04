"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";
import {TextRevealCard} from "@/components/ui/text-reveal-card";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Services from "@/components/Services";
import Campaigns from "@/components/Campaigns";
import Clients from "@/components/Clients"
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Career",
    link: "/career",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Campaigns",
    link: "#campaigns",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Our Services",
    link: "#services",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Our Clients",
    link: "#clients",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  }
];

const words = ["Content-Creation", "Meme-Marketing", "Social-Media-Management", "Graphic-Designing", "Organic-Content", "Web-Development"];

export default function Home() {
  return (
    <>


 <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>


    <div id="home">
    <HeroHighlight>
    <Image src={"https://i.ibb.co/R4653Hf/PITCHHME-FULL-LOGO.png" } alt={"blaH"} width={800} height={800} quality={100}/>
    </HeroHighlight>
    </div>
    
    <div id="about">
    <HeroHighlight >
    <div className="absolute z-50 inset-0 flex items-start -my-52 justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Who are we?
        </p>
      </div>
    <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        We are a Content Marketing Firm specializing in
        <br />
        <div className="flex justify-center pt-10">
        <FlipWords words={words} />  
        </div>
        
      </div>
    </HeroHighlight>
    </div>


    <div id="services">
    <HeroHighlight>
    <div className="absolute z-50 inset-0 flex items-start -my-16 justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          What do we do?
        </p>
      </div>
      <div>
      <Services />

      </div>
    </HeroHighlight>
    </div>
    
<div id="campaigns">
<HeroHighlight>
<div className="absolute z-50 inset-0 flex items-start -my-48 justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          ... and these are our meme campaigns! 
        </p>
      </div>
      <div>
      <Campaigns />

      </div>
    </HeroHighlight>
</div>
    

    <div id="clients">
    <HeroHighlight>
    <div className="absolute z-50 inset-0 flex items-start -my-52 justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Look who we worked for!
        </p>
      </div>
      <div>
      <Clients />

      </div>
    </HeroHighlight>

    </div>

  
    
    
    </>
  );
}
