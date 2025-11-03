import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  mother,
  father,
  kiss,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Nov 2025 - Present",
    points: [
      "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
      "Developed and deployed modern landing pages and portfolio websites for clients.",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mother's Day Special",
    description:
      "A heartfelt Mother's Day special website celebrating the love and sacrifices of mothers, featuring interactive elements and personalized messages to honor their invaluable role in our lives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mother,
    source_code_link: "https://github.com/Nabhansh/mothers-day-special.git",
    live_website_link: "https://mummyay.netlify.app/",
  },
  {
    name: "Father's Day Tribute",
    description:
      "A special Father's Day tribute website dedicated to honoring fathers and father figures, featuring interactive content and heartfelt messages that celebrate their unwavering support and guidance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
    ],
    image: father,
    source_code_link: "https://github.com/Nabhansh/fathers-day.git",
    live_website_link: "https://fatheray.netlify.app/",
  },
  {
    name: "Kiss ",
    description:
      "A romantic Kiss Day website designed to celebrate love and affection, featuring interactive elements and heartfelt messages that capture the essence of this special day dedicated to expressing love through a simple yet meaningful gesture.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kiss,
    // github link ⬇️
    source_code_link: "https://github.com/Nabhansh/kiss.git",
    // project link ⬇️
    live_website_link: "https://kissss.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };