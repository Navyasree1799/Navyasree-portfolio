import { Items } from "@radix-ui/react-select";
import Link from "next/link"
import { FaGithub, FaLinkedin} from 'react-icons/fa'


const socials=[
    { icon: <FaGithub/>, path: "https://github.com/Navyasree1799?tab=repositories"},
    { icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/navyasree-reddy-a2010421b/"}
];
const Social = ({containerStyles, iconStyles}) => {
  return  <div className= {containerStyles}> 
    {socials.map((item, index)=>{
        return(
            <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}</Link>
        )
    })}
  </div>
  
}

export default Social