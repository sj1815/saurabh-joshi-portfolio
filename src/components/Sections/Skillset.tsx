import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, memo} from 'react';
import {FaCode, FaJava} from 'react-icons/fa';
import {
  SiAmazonwebservices,
  SiAngular,
  SiCss3,
  SiDocker,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiR,
  SiReact,
  SiSnowflake,
  SiTypescript,
} from 'react-icons/si';

import {SectionId,skilldata} from '../../data/data';
import Section from '../Layout/Section';

const skills = [
  {name: 'Golang', icon: <SiGo className="text-blue-500" size={40} />},
  {name: 'Python', icon: <SiPython className="text-yellow" size={40} />},
  {name: 'Java', icon: <FaJava className="text-red-600" size={40} />},
  {name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" size={40} />},
  {name: 'JavaScript', icon: <SiJavascript className="text-yellow" size={40} />},
  {name: 'SQL / Snowflake', icon: <SiSnowflake className="text-blue-500" size={40} />},
  {name: 'AWS', icon: <SiAmazonwebservices className="text-white" size={40} />},
  {name: 'Docker', icon: <SiDocker className="text-blue-400" size={40} />},
  {name: 'Git', icon: <SiGit className="text-red-500" size={40} />},
  {name: 'HTML5', icon: <SiHtml5 className="text-orange-500" size={40} />},
  {name: 'CSS3', icon: <SiCss3 className="text-blue-500" size={40} />},
  {name: 'Node.js', icon: <SiNodedotjs className="text-green-500" size={40} />},
  {name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={40} />},
  {name: 'jQuery', icon: <SiJquery className="text-blue-400" size={40} />},
  {name: 'Angular', icon: <SiAngular className="text-red-500" size={40} />},
  {name: 'React.js', icon: <SiReact className="text-blue-400" size={40} />},
  {name: 'MySQL', icon: <SiMysql className="text-blue-600" size={40} />},
  {name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={40} />},
  {name: 'R', icon: <SiR className="text-blue-500" size={40} />},
  {name: 'RESTful APIs', icon: <FaCode className="text-white" size={40} />},
];

const Skillset: FC = memo(() => {
  const {skillBackgroundPic} = skilldata;
  return (
    <Section noPadding sectionId={SectionId.Skillset}>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-6 md:px-8">
        {/* Background Image */}
        <Image
          alt="skill-background-image"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={skillBackgroundPic}
        />

        {/* Content Wrapper */}
        <div className="z-10 max-w-5xl w-full">
          <div className="container mx-auto text-center">
            <h2 className="self-center text-2xl font-bold text-white mb-8 shadow-lg drop-shadow-md">
              Skill and Technologies
            </h2>
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  animate={{opacity: 1, scale: 1}}
                  className="flex flex-col items-center p-4 bg-white/00 rounded-2xl shadow-lg backdrop-blur-sm"
                  initial={{opacity: 0, scale: 0.8}}
                  key={index}
                  transition={{duration: 0.3, delay: index * 0.1}}>
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
