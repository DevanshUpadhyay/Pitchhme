"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const webD = [
    "/images/webd/greentoe.png",
    "/images/webd/indianwebshows.png",
    "/images/webd/jainshree.png",
    "/images/webd/ok7.png",
  ];
  const contentCreation = [
    "/images/contentCreation/1.png",
    "/images/contentCreation/2.png",
    "/images/contentCreation/3.png",
    "/images/contentCreation/4.png",
    "/images/contentCreation/5.png",
  ];
  const socialMediaMarketing = [
    "/images/socialMediaManagement/facebook.png",
    "/images/socialMediaManagement/instagram.png",
    "/images/socialMediaManagement/linkedin.png",
    "/images/socialMediaManagement/youtube.png",
    "/images/socialMediaManagement/social-media.png",
  ];
  const memeMarketing = [
    "/images/memes/1.jpg",
    "/images/memes/aarya.jpg",
    "/images/memes/scam.jpg",
    "/images/memes/Iron.jpg",
    "/images/memes/meesho.jpg",
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-center items-center gap-8 py-16">
      <Modal>
        <ModalTrigger className="relative bg-white text-black dark:text-black flex justify-center items-center group/modal-btn p-4 rounded-lg">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 overflow-hidden">
            Web Development
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <img
              className="object-cover h-8"
              src="/images/services/webdev.png"
              alt=""
            />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent >
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Get your own{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Aesthetic and Robust
              </span>{" "}
              website now!
            </h4>
            <div className="flex justify-center items-center">
              {webD.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-36 md:h-40 md:w-72 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  E-commerce
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Portfolio
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Media-sharing website
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Shopify{" "}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  E-learning
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Business website
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
      <ModalTrigger className="relative bg-white text-black dark:text-black flex justify-center items-center group/modal-btn p-4 rounded-lg">
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Content Creation
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <img
              className="object-cover h-8"
              src="/images/services/content.png"
              alt=""
            />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Content Creation
              </span>{" "}
            </h4>
            <div className="flex justify-center items-center">
              {contentCreation.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  UI-UX Designs
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Content Writing
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Short form content
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Podcasts
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  High Production shoot
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Video Editing
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
      <ModalTrigger className="relative bg-white text-black dark:text-black flex justify-center items-center group/modal-btn p-4 rounded-lg">
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Social Media Marketing
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <img
              className="object-cover h-8"
              src="/images/services/social.png"
              alt=""
            />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Social{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Media
              </span>{" "}
              Marketing!
            </h4>
            <div className="flex justify-center items-center">
              {socialMediaMarketing.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Instagram
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Facebook
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Youtube
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  LinkedIn
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Meta Ads
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Performace Marketing
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
      <ModalTrigger className="relative bg-white text-black dark:text-black flex justify-center items-center group/modal-btn p-4 rounded-lg">
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Meme Marketing
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <img
              className="object-cover h-8"
              src="/images/services/meme.png"
              alt=""
            />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Everything is a
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Meme
              </span>{" "}
              !
            </h4>
            <div className="flex justify-center items-center">
              {memeMarketing.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Static Memes
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Meme Campaigns
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Video Memes
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Meme Marketing
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Meme Advertising
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Meme Promotion
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
