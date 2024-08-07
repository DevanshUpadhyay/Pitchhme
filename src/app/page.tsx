"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

import { FlipWords } from "@/components/ui/flip-words";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Services from "@/components/Services";
import Campaigns from "@/components/Campaigns";
import Clients from "@/components/Clients";
import Image from "next/image";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-white" />,
  },
  {
    name: "Career",
    link: "/career",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
  {
    name: "Campaigns",
    link: "#campaigns",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
  {
    name: "Our Services",
    link: "#services",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
  {
    name: "Our Clients",
    link: "#clients",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
];

const words = [
  "Content-Creation",
  "Meme-Marketing",
  "Social-Media-Management",
  "Graphic-Designing",
  "Organic-Content",
  "Web-Development",
];
const dots = [".", "..", "...", "....", ".....", "......"];

export default function Home() {
  return (
    <>
      <div className="lg:max-w-[1300px] mx-auto">
        <FloatingNav navItems={navItems} />
      </div>

      <HeroHighlight containerClassName=" w-full mx-auto ">
        <div
          id="home"
          className="flex justify-center items-center py-20 w-full h-screen"
        >
          <div className="relative w-full max-w-[700px] px-4">
            <Image
              src="https://i.ibb.co/R4653Hf/PITCHHME-FULL-LOGO.png"
              alt="logo"
              layout="responsive"
              width={700}
              height={600}
              className="w-full h-auto "
            />
          </div>
        </div>
        <div
          id="about"
          className="flex items-center justify-center min-h-screen text-center py-10 md:py-20"
        >
          <div className="w-full lg:max-w-[1300px] mx-auto">
            <div className="z-50 flex items-start justify-center px-4 pointer-events-none">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold my-8 sm:my-12 md:my-16">
                Who are we?
              </p>
            </div>
            <div className="mx-auto font-normal text-white mt-6 sm:mt-8 md:mt-10 text-xl sm:text-xl md:text-2xl lg:text-4xl">
              We are a Content Marketing Firm specializing in
              <br />
              <div className="flex justify-center pt-6 sm:pt-8 md:pt-10">
                <FlipWords words={words} />
              </div>
              <div className="flex justify-center pt-6 sm:pt-8 md:pt-10">
                <FlipWords words={dots} />
              </div>
            </div>
          </div>
        </div>

        <div
          id="services"
          className="lg:max-w-[1300px] relative w-full text-center py-40"
        >
          <div className="z-50 flex items-start justify-center text-white font-bold px-4 pointer-events-none text-5xl md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 ">
              What do we do?
            </p>
          </div>
          <div className="">
            <Services />
          </div>
        </div>

        <div id="campaigns" className="relative w-full text-center py-20">
          <div className="z-50 flex items-start justify-center text-white font-bold px-4 pointer-events-none text-5xl md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              These are our meme campaigns!
            </p>
          </div>
          <div className="mt-10">
            <Campaigns />
          </div>
        </div>

        <div id="clients" className="relative w-full text-center py-28">
          <div className="z-50 flex items-start justify-center text-white font-bold px-4 pointer-events-none text-3xl md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Look who we worked for!
            </p>
          </div>
          <div className="mt-10 ">
            <Clients />
          </div>
        </div>

        <div id="enquiry" className="lg:w-max-[1300px]">
          <div className="z-10 flex items-center justify-center w-full px-4 text-center lg:py-12">
            <p className=" font-bold text-4xl  md:text-4xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 ">
              Contact us & ask us to "Pitchhme"
            </p>
          </div>

          <Enquiry />
        </div>

        <Footer />
      </HeroHighlight>
    </>
  );
}
