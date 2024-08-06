'use client'
import React from 'react'
import { cn } from '@/lib/utils';

export default function Campaigns() {
    return(
        <div className="flex items-center">
      <div className="max-w-xs w-full mr-8">
      <div
        className={cn(
          "group  overflow-hidden relative card h-96 w-64 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/1.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/images/campaignGif/scamgif.gif)]",
          "hover:bg-[url(/images/campaignGif/scamgif.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      >
       
      </div>
    </div>
    <div className="max-w-xs w-full mr-8">
      <div
        className={cn(
          "group w-64 overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/2.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/images/campaignGif/undekhi.gif)] ",
          "hover:bg-[url(/images/campaignGif/undekhi.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      >
       
      </div>
    </div>
    <div className="max-w-xs w-full mr-8">
      <div
        className={cn(
          "group w-64 overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/3.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/images/campaignGif/mintree.gif)] ",
          "hover:bg-[url(/images/campaignGif/mintree.gif)]",
          "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      >
        
      </div>
    </div>
    <div className="max-w-xs w-full mr-8">
      <div
        className={cn(
          "group w-64 overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/images/campaignsPics/4.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/images/campaignGif/jmt.gif)] ",
          "hover:bg-[url(/images/campaignGif/jmt.gif)]",
          "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-10",
          "transition-all duration-500"
        )}
      >
       
      </div>
    </div>
    <br />
  
    </div>
    );
}