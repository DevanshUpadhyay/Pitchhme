"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
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
      link: "/#campaigns",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Our Services",
      link: "/#services",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Our Clients",
      link: "/#clients",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    }
  ];

export default function CardHoverEffectDemo() {
  return (
    <div>
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
    <HeroHighlight>
    <HoverEffect items={projects} />
    </HeroHighlight>
    </div>
   
    
  );
}
 const projects = [
    {
      "title": "Web Developer",
      "description": "A team responsible for designing, coding, and modifying websites, from layout to function and according to client’s specifications.",
      "link": "/career/career-form"
    },
    {
      "title": "Business Development",
      "description": "A department focused on identifying new business opportunities, expanding into new markets, and increasing sales through new channels.",
      "link": "/career/career-form"
    },
    {
      "title": "Lead Generation",
      "description": "A specialized unit within marketing that focuses on generating leads through various methods such as content marketing, SEO, social media, and paid advertising.",
      "link": "/career/career-form"
    },
    {
      "title": "Technician",
      "description": "A technical support role that involves troubleshooting and repairing hardware and software issues, ensuring systems run smoothly and efficiently.",
      "link": "/career/career-form"
    },
    {
      "title": "HR cum Talent Acquisition",
      "description": "A combined HR and recruitment role responsible for managing employee relations, benefits, compensation, and sourcing and interviewing potential candidates.",
      "link": "/career/career-form"
    },
    {
      "title": "Teaching Intern",
      "description": "An educational role where interns assist in teaching activities, lesson planning, and student engagement, under the guidance of experienced educators.",
      "link": "/career/career-form"
    }
];