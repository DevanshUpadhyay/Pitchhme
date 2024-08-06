"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const ClientsOne = [
  {
    id: 1,
    name: "Netflix",
    // designation: "Software Engineer",
    image:
      "/images/logos/1.jpg",
  },
  {
    id: 2,
    name: "Marvel",
    // designation: "Product Manager",
    image:
      "/images/logos/2.jpg",
  },
  {
    id: 3,
    name: "Wings of Comfort",
    // designation: "Data Scientist",
    image:
      "/images/logos/3.jpg",
  },
  {
    id: 4,
    name: "Amazon miniTV",
    // designation: "UX Designer",
    image:
      "/images/logos/4.jpg",
  },
  {
    id: 5,
    name: "Applause",
    // designation: "Soap Developer",
    image:
      "/images/logos/5.jpg",
  },
  {
    id: 6,
    name: "Realme",
    // designation: "The Explorer",
    image:
      "/images/logos/6.jpg",
  },
];

const ClientsTwo = [
  {
    id: 1,
    name: "MX Player",
    // designation: "Software Engineer",
    image:
      "/images/logos/7.jpg",
  },
  {
    id: 2,
    name: "MamaEarth",
    // designation: "Product Manager",
    image:
      "/images/logos/8.jpg",
  },
  {
    id: 3,
    name: "Sony Liv",
    // designation: "Data Scientist",
    image:
      "/images/logos/9.jpg",
  },
  {
    id: 4,
    name: "Prime Video",
    // designation: "UX Designer",
    image:
      "/images/logos/10.jpg",
  },
  {
    id: 5,
    name: "TVF",
    // designation: "Soap Developer",
    image:
      "/images/logos/11.jpg",
  },
  {
    id: 6,
    name: "Myntra",
    // designation: "The Explorer",
    image:
      "/images/logos/12.jpg",
  },
];


export default function Clients() {
  return (
    <>
    <div className="flex items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={ClientsOne} />
    </div>
    <div className="flex items-center justify-center mb-10 my-16 w-full">
      <AnimatedTooltip items={ClientsTwo} />
    </div>
    </>
  );
}
