"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function Campaigns() {
  return (
    <div className="flex flex-wrap items-center justify-center">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className={cn(
          "group overflow-hidden relative card h-80 sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/1.jpg)] bg-cover",
          "before:bg-[url(/images/campaignGif/scamgif.gif)]",
          "hover:bg-[url(/images/campaignGif/scamgif.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      ></div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className={cn(
          "group overflow-hidden relative card h-80 sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/2.jpg)] bg-cover",
          "before:bg-[url(/images/campaignGif/undekhi.gif)]",
          "hover:bg-[url(/images/campaignGif/undekhi.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      ></div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className={cn(
          "group overflow-hidden relative card h-80 sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/3.jpg)] bg-cover",
          "before:bg-[url(/images/campaignGif/mintree.gif)]",
          "hover:bg-[url(/images/campaignGif/mintree.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      ></div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className={cn(
          "group overflow-hidden relative card h-80 sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/4.jpg)] bg-cover",
          "before:bg-[url(/images/campaignGif/jmt.gif)]",
          "hover:bg-[url(/images/campaignGif/jmt.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      ></div>
    </div>
  </div>
  
  );
}
