import {FC, memo} from 'react';
import Section from '../Layout/Section';
import { motion } from "framer-motion";
import Image from 'next/image';
import { skilldata,SectionId } from '../../data/data';
import { 
  SiGo, SiPython, SiKubernetes, SiJavascript, SiSnowflake,  
  SiDocker, SiGit, SiHtml5, SiCss3, SiNodedotjs, SiTypescript, SiJquery, 
  SiAngular, SiReact, SiMysql, SiMongodb, SiR, 
  SiAmazonwebservices
} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";

const skills = [
  { name: "Golang", icon: <SiGo size={40} className="text-blue-500" /> },
  { name: "Python", icon: <SiPython size={40} className="text-yellow" /> },
  { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={40} className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow" /> },
  { name: "SQL / Snowflake", icon: <SiSnowflake size={40} className="text-blue-500" /> },
  { name: "AWS", icon: <SiAmazonwebservices size={40} className="text-white" /> },
  { name: "Docker", icon: <SiDocker size={40} className="text-blue-400" /> },
  { name: "Git", icon: <SiGit size={40} className="text-red-500" /> },
  { name: "HTML5", icon: <SiHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 size={40} className="text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
  { name: "jQuery", icon: <SiJquery size={40} className="text-blue-400" /> },
  { name: "Angular", icon: <SiAngular size={40} className="text-red-500" /> },
  { name: "React.js", icon: <SiReact size={40} className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "R", icon: <SiR size={40} className="text-blue-500" /> },
  { name: "RESTful APIs", icon: <FaCode size={40} className="text-white" /> },
];


const Skillset: FC = memo(() => {
  const { skillBackgroundPic } = skilldata;
  return (
    <Section noPadding sectionId={SectionId.Skillset}>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          alt="skill-background-image"
          src={skillBackgroundPic}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
        />

        {/* Content Wrapper */}
        <div className="z-10 max-w-5xl w-full px-6 md:px-8 lg:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8 shadow-lg drop-shadow-md">Skills</h2>
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white/00 rounded-2xl shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill.icon}
                  <p className="mt-2 text-lg text-white font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});


Skillset.displayName = 'Skill';
export default Skillset;
