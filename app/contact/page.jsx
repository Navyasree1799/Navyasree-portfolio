"use client";

import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
/* import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"; */
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
const info =[
    {
        icon: <FaPhoneAlt />,
        title : 'Phone',
        Description: ' (+1)9802904155'
    },
    {
        icon: <FaEnvelope />,
        title : 'Email',
        Description: ' navyasree1259@gmail.com'
    }
    
]


 const Contact = () => {
  return <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 1.4, ease: "easeIn" },
}}
 className= "py-6"
> 
<div className="container mx-auto">
<div className=" flex flex-col xl:flex-row gap-[30px]">
    <div className="xl:h-[54%] order-2 xl:order-none"> 
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" > 
        <h3 className="text-4xl text-pink-600"> Let's work together </h3>
        <p className="text-white/60"> Looking to collaborate on exciting projects? Let's create something amazing together! Reach out to explore opportunities to work together.</p>
        <div className="grid grid-cols-1 md:grid-colss-2 gap-6">
            <Input type="Firstname" placeholder="Firstname" />
            <Input type="Lastname" placeholder="Lastname" />
            <Input type="Phonenumber" placeholder="Phonenumber" />
            <Input type="email" placeholder="email" />
        </div>
    <Textarea  className="h-[200px]" placeholder="Type your message here." />
    <Button size='md' className="max-w-40" > Send Message</Button>
        </form>
    </div>
    <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0"> 
        <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-pink-600 rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                        <p>{item.title}</p></div>
                        <h3>{item.Description}</h3>
                </li>
            })}
            </ul>
    </div>
</div>
</div>
</motion.section>
}
export default Contact
