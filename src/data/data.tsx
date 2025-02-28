import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import logopic from '../images/saurabhlogo.png';
import skillsImage from '../images/skills-background.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Skillset,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Saurabh Joshi Portfolio',
  description: 'This is portfolio page by Saurabh Joshi',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'main',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'projects',
  Resume: 'resume',
  Skillset: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Saurabh Joshi`,
  logo: logopic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base font-bold lg:prose-xl">
        Experienced Software Engineer working in AdTech, building high-performance, scalable and real-time bidding
        solutions for digital advertising.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, I am Saurabh Joshi and I work as a Software Engineer at Kargo Global Inc., developing high-performance advertising solutions for mobile, desktop, and CTV.
    I started my career in Quality Assurance (QA), where I built automated testing solutions and ensured system reliability. 
    Over time, I transitioned into software engineering, contributing to backend development, large-scale system optimizations, and ad tech integrations.
    My experience includes working with real-time bidding (RTB), header bidding, OpenRTB, and Prebid, as well as optimizing bidding strategies and maintaining integrations with publishers and DSPs.`,
  description2: `I hold an M.S. in Information Sciences & Technologies from RIT and a B.E. in IT from Mumbai University. I have been living in Northeast USA for almost a decade now, but Mumbai, India is still the city I call home. Outside of work, I enjoy hiking, cooking vegetarian food, learning guitar, and exploring new technologies.`,
  aboutItems: [
    {label: 'Based in', text: 'Jersey City, NJ, USA', Icon: MapPinIcon},
    {label: 'From', text: 'Mumbai, MH, India', Icon: HomeModernIcon},
    {label: 'Studied at', text: 'R.I.T & Mumbai University', Icon: AcademicCapIcon},
    {label: 'Work', text: 'Kargo Global Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * skillset section
 */

export const skilldata: Skillset = {
  skillBackgroundPic: skillsImage,
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'RESTful API Client for Emergency Service Directory',
    description:
      'Designed and developed using module pattern, a Web portal for emergency services with User Interface.',
    url: 'https://github.com/sj1815/RESTful-API-Client-for-Emergency-Service-Directory',
    image: porfolioImage1,
  },
  {
    title: 'Enhanced RTO Driving License System',
    description:
      'A prototype system which can work on any touchscreen mobile device containing NFC by law enforcement officer.',
    url: 'https://github.com/sj1815/RTO_Automation',
    image: porfolioImage2,
  },
  {
    title: 'Tweets Search Application',
    description:
      'Simple application to search tweets using MongoDB and Node.js. Based on the user query the application creates a list on the Frontend.',
    url: 'https://github.com/sj1815/MongoDb-Tweet-Search-Tool',
    image: porfolioImage3,
  },
  {
    title: 'Weather Application using React.js',
    description:
      'Single page weather application with React.js and Open Weather Map API. Provides latest weather updates of various cities worldwide.',
    url: 'https://github.com/sj1815/React-Weather-APP',
    image: porfolioImage4,
  },
  {
    title: 'Fake News Data Analysis',
    description: 'Creation of data models such as linear regression to get meaningful analysis on data on fake news.',
    url: 'https://github.com/sj1815/Fake-news-Analysis',
    image: porfolioImage5,
  },
  {
    title: 'Performance Appraisal System',
    description:
      'Designed and developed an appraisal system for a diploma college where students can confidentially appraise professors’ performance.',
    url: 'https://github.com/sj1815',
    image: porfolioImage6,
  },
  {
    title: 'Soccer Dream Team Web Application',
    description:
      'Vanilla JavaScript application exhibiting the dynamically created dropdown menu after selecting each choice to create a futsal team.',
    url: 'https://github.com/sj1815/Javascript-Soccer-Dream-team',
    image: porfolioImage7,
  },
  {
    title: 'Data Warehouse Creation',
    description:
      'Data warehouse project where data from different company divisions was cleaned, transformed, and loaded using ETL tools.',
    url: 'https://github.com/sj1815/Data-Warehouse',
    image: porfolioImage8,
  },
  {
    title: 'California Fire Arc-GIS Mapping',
    description:
      'GIS-based analysis of forest fires in California, creating maps to understand threats and mitigation options.',
    url: 'https://github.com/sj1815/Arc-GIS-California-Fire',
    image: porfolioImage9,
  },
  {
    title: 'RESTful API Client for Emergency Service Directory',
    description: 'A Web portal for emergency services with User Interface.',
    url: 'https://github.com/sj1815/RESTful-API-Client-for-Emergency-Service-Directory',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2017 - Dec 2019',
    location: 'Masters in Information Sciences and Technology',
    title: 'Rochester Institute of Technology, USA',
    content: <p></p>,
  },
  {
    date: 'August 2013 - August 2016',
    location: 'B.E in Information Technology',
    title: 'Mumbai University, India',
    content: <p></p>,
  },
  {
    date: 'August 2010 - June 2013',
    location: 'Diploma in Computer Technology',
    title: 'Maharashra State Board, India',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2024 - February 2025',
    location: 'Kargo Global Inc.',
    title: 'Associate Software Engineer',
    content: (
      <p>
        Developing and optimizing Kargo’s large-scale ad-serving platform, integrating CTV solutions, and enhancing
        bidding strategies. Tech stack includes Golang, Kubernetes, AWS and Aerospike.
      </p>
    ),
  },
  {
    date: 'March 2020 - February 2024',
    location: 'Kargo Global Inc.',
    title: 'Associate Software Engineer in Test',
    content: (
      <p>
        Built automated testing solutions and ensured the scalability of Kargo’s SSP, contributing to revenue growth and
        cost savings while leading QA efforts across ad-serving and data teams. Worked on Snowflake, AWS kinesis and S3,
        Javascript and Cypress.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  // imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sj1815'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/saurabhvjjoshi/'},
];
