import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
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
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tu Dao Xuan\'s Resume',
  description: "Tu Dao Xuan\\'s Resume site built nextjs and taiwind",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Tu Dao Xuan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ha Noi based <strong className="text-stone-100">Front-end Developer</strong>,
        <br/>
        I’ve been working as a web developer for a few years now, 
        and I’m passionate about everything that goes into making websites work well and look beautiful. 
        <br/>
        The web is my passion because it’s where I can find the most exciting projects to work on.
         It’s also where I get to express my creativity in ways that are hard to find elsewhere.

      </p>
      
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey there! 👋. I'm Tu Dao, a Front End Developer based in Ha Noi, that loves to code and build products with a delightful user experience.
  
  I love working in between product, engineering and developer experience. Some things that make me excited are JavaScript, Open Source, CI & CD systems, simplicity, automating things and building meaningful user-centric products.
    
  Outside of work, I'm obsessed with sports, doing open source and travelling with my family.`,
  aboutItems: [
    {label: 'Location', text: 'Ha Noi, VN', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Viet Nam', Icon: FlagIcon},
    {label: 'Interests', text: 'AOE , Football, Fishing', Icon: SparklesIcon},
    {label: 'Study', text: 'HUST', Icon: AcademicCapIcon},
  ],
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
        level: 7,
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
        name: 'HTML & CSS',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Jest',
        level: 8,
      }, 
      {
        name: 'Tailwindcss',
        level: 8,
      },
      {
        name: 'Monorepo',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'PHP',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 7,
      },
    ],
  },
  {
    name: 'Tracking Tool',
    skills: [
      {
        name: 'GA',
        level: 8,
      },
      {
        name: 'Hotjar',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2010 - May 2015',
    location: 'HUST',
    title: 'Information Technology - K55',
    content: <p></p>,
  },
  {
    date: 'September 2012 - September 2014',
    location: 'Ha Noi Aptech',
    title: 'Computer Programmer - A1403M ',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2019 - Present',
    location: 'Xpon.ai',
    title: 'Front-end developer',
    content: (
      <p> 
          I'm working on outsource department, I was released ~ 2x projects on this time. 
          <br/>
          <br/>
          <strong>Wordpress: ~ 10 sites: </strong>
          <br/>
            Teargas: <a href='https://teargas.amnesty.org/'>https://teargas.amnesty.org/</a> 
            <br/>
            Iran-shutdown: <a href='https://iran-shutdown.amnesty.org/' >https://iran-shutdown.amnesty.org/ </a>
            <br/>
            Raqqa: <a href='https://raqqa.amnesty.org/'>https://raqqa.amnesty.org/</a> 
            <br/>
            Strongandbendy: <a href='https://strongandbendy.co.uk/'>https://strongandbendy.co.uk/</a> 
            <br/>
            Seerave: <a href='https://seerave.org/ '> https://seerave.org/ </a>
            <br/>
            .....
            <br/>
          <strong>Drupal: 1 big sites </strong>
          <br/>
            Iec: <a href='https://iec.ch/'>https://iec.ch/</a> 
            <br/>
          <strong>Yii: humhub opensource: </strong>
          <br/>
            Craftworld: <a href='https://craftworld.com/'>https://craftworld.com/</a>   
            <br/>
          <strong>Nextjs: ~10 sites</strong>
          <br/>
            Acadsbsg: <a href='https://www.acadsbsg.com.au/'>https://www.acadsbsg.com.au/</a> : Using nextjs and handontable for building software
            <br/>
            Darkreading: <a href='https://www.darkreading.com/'>https://www.darkreading.com/</a>
            <br/>
            informationweek: <a href='https://www.informationweek.com/'>https://www.informationweek.com/</a>
            <br/>
            gamedeveloper: <a href='https://gamedeveloper.com/'>https://gamedeveloper.com/</a>
            <br/>
            streamly: <a href='https://streamly.video/'>https://streamly.video/</a>
            <br/>
            quantumbusinessnews: <a href='https://www.quantumbusinessnews.com/'>https://www.quantumbusinessnews.com/</a>
            <br/>
            ....
            <br/>
          <strong>ReactNative</strong>
          <br/>
          
          crewstudio <a href='https://apps.apple.com/vn/app/crewstudio/id1398899998'>https://apps.apple.com/vn/app/crewstudio/id1398899998</a>
          
          
      </p>
    ),
  },
  {
    date: 'March 2017 - February 2019',
    location: 'Onesoft inc',
    title: 'IOS Developer',
    content: (
      <p>
          Create livestream app base on Webrtc for ios
      </p>
    ),
  },
  {
    date: 'March 2015 - February 2017',
    location: 'Framgia Inc',
    title: 'PHP Developer',
    content: (
      <p>
        In this time, i am working on Laravel 5.x and training freshers.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
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
  headerText: 'Contact.',
  description: 'Please contact to me if you want to more informations',
  items: [
    {
      type: ContactType.Email,
      text: 'unipuzz@gmail.com',
      href: 'mailto:unipuzz@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ha Noi, Viet Nam',
      href: 'https://www.google.ca/maps/place/%C4%90%E1%BA%A1i+M%E1%BB%97,+Nam+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9979414,105.7424851,14z/data=!3m1!4b1!4m6!3m5!1s0x3134536a55039567:0xc2711b127c475a95!8m2!3d20.9898009!4d105.7615252!16s%2Fg%2F1hb_gp2_k',
    },
    {
      type: ContactType.Github,
      text: 'tudxndvn',
      href: 'https://github.com/tudxndvn',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tudxndvn'},
];
