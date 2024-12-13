"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import { TabsContent } from "@radix-ui/react-tabs";
import { University } from "lucide-react";

const about={
    title: "About Me",
    description: 
    " I'm a passionate and driven software developer with a strong foundation in both front-end and back-end technologies. With a background in computer science and a focus on delivering high-quality user experiences, I enjoy tackling complex challenges and collaborating with teams to create innovative solutions. I'm always eager to learn and grow in the ever-evolving tech landscape, and I'm dedicated to continuously improving my skills to stay ahead in the industry.",
    info: [
        {
            filedName: "Name",
            filedValue: "Navyasree"
        },
        {
            filedName: "Phone",
            filedValue: "+1(616) 236 9207"
        },
        {
            filedName: "Experience",
            filedValue: "4+ years"
        },
        {
            filedName: "Email",
            filedValue: "Navyasree1259@gmail.com"
        },
        {
            filedName: "Freelance",
            filedValue: "Available"
        },
        {
            filedName: "Languages",
            filedValue: "English, Hindi, Telugu"
        },
    ]
};

const experience={
    icon: '/assests/resume/badge.svg',
    title: 'My Experience',
    description: 
    " I've worked with top tech companies, gaining hands-on experience in building web applications using React, Angular, and Node.js. From front-end design to API integrations, I've honed my skills in creating user-friendly solutions and collaborating with talented teams to bring projects to life.",
    items: [
        {
            company: "Syneos health ",
            position: " software developer",
            duration: "April 2024 - Present",
        },
        {
            company: "Grand Valley State University",
            position: " Graduate Research Assistant",
            duration: "Aug 2022 - April 2024",
        },
        {
            company: "Corewell Health",
            position: "Software Developer",
            duration: "May 2023 - Aug 2023",
        },
        {
            company: "Auccupia Online Private Services Limited",
            position: "Frontend Developer",
            duration: "Jan 2021 - Aug 2022",
        },
    ]
}

const education={
    icon: '/assests/resume/cap.svg',
    title: 'My Education',
    description: 
    " I hold a Master's in Applied Computer Science from Grand Valley State University, where I focused on database design, web architecture, and mobile application development. Prior to that, I earned a Bachelor's in Computer Science and Engineering from Jawaharlal Nehru Technological University in India.",
    items: [
        {
            University: "Grand Valley State University.",
            Degree: "Masters in Computer Information Systems",
            duration: "2022-2024",
        },
        {
            University: "Jawaharlal Nehru Technology University Kakinada.",
            Degree: "Bachelor's in Computer Science and Engineering",
            duration: "2017-2021",
        },
    ]
}

const skills={
    title: 'My Skills',
    description: 
    " I have strong skills in web development, specializing in React, Angular, and Node.js, with extensive experience in building responsive, scalable applications. I’m proficient in various front-end and back-end technologies like HTML, CSS, JavaScript, TypeScript, and SQL, and have a solid understanding of databases, Tailwind Css, API integration, and cloud platforms. I’m also experienced in Agile development and implementing modern design systems to enhance user experience and performance.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwand.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
}

const Resume =()=>{
    return <motion.div initial={{opacity: 0}}
    animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>

                </TabsList>
                <div className="min-h-[70vh] w-full">
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item,index)=>{
                                        return(
                                            <li key={index}
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-pink-600">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.position}
                                                </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-pink-600"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item,index)=>{
                                        return(
                                            <li key={index}
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                                            flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-pink-600">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.Degree}
                                                </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-pink-600"></span>
                                                <p className="text-white/60">{item.University}</p>
                                            </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px] ">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {skills.description}
                            </p>
                          </div>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gep-4 xl:gap-[30px]">
                            {skills.skillList.map((skill,index)=>{
                                return(
                                <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-pink-600 transition-all duration-300">{skill.icon} </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    {skill.name}</li>
                                )
                            })}
                          </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul>
                                {about.info.map((item,index)=>{
                                    return<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.filedName}</span>
                                        <span className="text-xl">{item.filedValue}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                   
                </div>
            </Tabs>
        </div>

    </motion.div>
}

export default Resume;



