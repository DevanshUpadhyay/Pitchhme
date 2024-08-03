"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const ClientsOne = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/images/logos/1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/images/logos/2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "/images/logos/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/images/logos/4.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "/images/logos/5.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "/images/logos/6.jpg",
  },
];

const ClientsTwo = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/images/logos/7.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/images/logos/8.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "/images/logos/9.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/images/logos/10.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "/images/logos/11.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
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
