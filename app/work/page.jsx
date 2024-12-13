"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

import WorkSliderBtn from "@/components/ui/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "ValidateAlpha",
    title: "project 1",
    description: "ValidateAlpha is a cutting-edge AI-driven research marketplace revolutionizing brand-audience connections. This website project showcases seamless user experience and dynamic functionality, tailored to support professionals and brands in driving impactful qualitative research.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" },{ name: "React" },{ name: "Angular" }],
    image: '/assets/work/image.png',
    
  },
  {
    num: "02",
    category: "Online Movie",
    title: "project 2",
    description: "Developed an online movie platform that allows users to browse, search, and stream movies seamlessly. Integrated features like user authentication, reviews, and dynamic content updates for an engaging user experience",
    stack: [{ name: "React" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/image2.png",
    
  },
  {
    num: "03",
    category: "online Auction App",
    title: "project 3",
    description: "Created an Online Bidding Platform using Reactjs, Typescript Js, HTML, CSS, Material UI, ExpressJS, NodeJS, Mongoose, MongoDB, SNTP, Node-Corn, Node-Mailer",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "React.Js" },
      { name: "Angular.Js" },
    ],
    image: "/assets/work/image3.png",
    
  },
  {
    num: "04",
    category: "Mobile Application",
    title: "Pet care App",
    description: "Developed a pet care application for pet parents who have multiple or single pets to take care of and made it easy by having features like a calendar, task creator, and buying necessary things for pets, pop-up notification reminder.",
    stack: [
      { name: "JavaScript" },
      { name: "React Native" },
      { name: "Node.Js" },
      { name: "Kotlin" },
    ],
    image: "/assets/work/download.png",
    
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Section */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Updated Number Display */}
              <div className="w-full max-w-[100%] overflow-hidden"></div>
              <div className="text-8xl leading-none font-extrabold text-outline-lg text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-pink-600 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-pink-600">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-pink-600" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] flex justify-center items-center bg-pink-50/20">
                      {/* <p>{project.title}</p> */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image} // Replace with the actual image path
                          alt="" // Add alt text for accessibility
                          fill // The image will fill the container
                          className="object-cover" // Ensures the image covers the container without distortion
                          
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-pink-600 hover:bg-pink-600-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
