import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import { Stats } from "@/components/ui/Stats";



const Home = () => {
  
  return (
    <section className="h-full overflow-hidden">

    <div className="container mx-auto h-full">
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-1 " >
    
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span> Software Developer</span>
          <h1 className="h1">Hello I am <br/> <span className="text-pink-600">NavyaSree</span></h1>
          <p className="max-w-[500] mb-9 text-white/80">  I am a skilled software developer with over 4 years of experience specializing <br/>in front-end technologies like React, Angular, and Node.js. I focus on building scalable, <br/> responsive applications, integrating RESTful APIs, and leveraging cloud platforms like AWS <br/> and Azure for deployment. With expertise in UI/UX design and modern frameworks like Redux <br/> and Material UI, I create user-centric, high-performance applications. I thrive in Agile environments, collaborating across teams to deliver clean, maintainable code and continuously improve software quality.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
            variant="outline" 
            size="lg" 
            className=" uppercase flex items-center gap-2">
              <a
      href="/assets/resume/NAVYASREE.pdf" download="NAVYASREE.pdf"
    >
              <span>Download CV</span>
              </a>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
           
              <Social 

              containerStyles=" flex gap-6" 
              iconStyles="w-9 h-9 border border-pink-600 rounded-full 
              flex justify-center items-center text-pink-600 text-base 
              hover:bg-pink-600 hover:text-primary hover:transition-all 
              duration-500" 
             
                    
                      href= "https://github.com/Navyasree1799?tab=repositories"
                    
                 
              
              />
             
      
    </div>
          </div>
      </div>
      
      <div className="order-1 xl:order-none mb-8 xl:mb-0 flex-shrink-0 max-w-full">
  <Photo />
</div>

    </div>
    </div>
    <Stats />
    </section>
  )
}

export default Home