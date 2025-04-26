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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress,
  multiline,
  everfirst,
  youtubeClone,
  movieShowcase,
  saasLandingPage,
  automateFinance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React JS Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: wordpress,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "FMC Fillipinas MultiLine Corp.",
    icon: wordpress,
    iconBg: "#383E56",
    date: "May 2019 - Present",
    points: [
      "Developing and maintaining web applications using Wordpress Costume Theme and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FMC Fillipinas MultiLine Corp.",
    icon: web,
    iconBg: "#E6DEDD",
    date: "May 2019 - Present",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Automation Finance App",
    description:
      "Personal finance automation tool in Python. used modules like Pandas, Plotly, & Streamlit.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Plotly",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: automateFinance,
    source_code_link: "https://github.com/janmikael/Automate-Finance", // Github Project link
    project_link: "https://automate-finance-1st.streamlit.app/", // Project link
  },
  {
    name: "Saas Landing Page",
    description:
      "SaaS Landing page with modern UI and mobile-first principles using React.js and Tailwind CSS.",
    tags: [
      {
        name: "React JS + Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "blue-text-gradient",
      },
    ],
    image: saasLandingPage,
    source_code_link: "https://github.com/janmikael/SaaS-App-Landing-Page",
    project_link: "https://saa-s-app-landing-page-q3w9.vercel.app/",
  },
  {
    name: "Trending Movies Showcase",
    description:
      "Movie app that Showcasing Trending movies with search optimize by using Debounce. using React + Vite TMDB api Appwrite for database.",
    tags: [
      {
        name: "React JS + Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "TMDB API",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "blue-text-gradient",
      },
    ],
    image: movieShowcase,
    source_code_link: "https://github.com/janmikael/Movie-Trending-Showcase",
    project_link: "https://movie-trending-showcase.vercel.app/",
  },

  {
    name: "Youtube Clone",
    description:
      "A YouTube Clone built with ReactJS, styled using Material UI 5, and powered by Rapid API. This project demonstrates dynamic video rendering, responsive UI design, and API integration, showcasing my skills in front-end development.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI 5",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "blue-text-gradient",
      },
    ],
    image: youtubeClone,
    source_code_link: "https://github.com/janmikael/Youtube-Clone",
    project_link: "https://youtube-clone-mauve-ten.vercel.app/",
  },

  {
    name: "EverFirst Loan",
    description:
      "EverFirst Loans is a financial services platform dedicated to providing various loan products and solutions to individuals and businesses. Whether you're looking for personal loans, business loans, mortgage loans, or other financing options, EverFirst Loans aims to be your trusted partner in securing the financial assistance you need.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Astra Theme",
        color: "green-text-gradient",
      },
      {
        name: "Costume CSS",
        color: "pink-text-gradient",
      },
    ],
    image: everfirst,
    source_code_link: "",
    project_link: "https://everfirstloans.com/",
  },

  {
    name: "Multi-Line Website",
    description:
      "Wordpress Website with custom Theme.Multi-Line Philippines is a comprehensive online platform offering a diverse range of products and services tailored to meet the needs of businesses and individuals alike. With a focus on quality, reliability, and customer satisfaction, Multi-Line Philippines serves as a one-stop destination for various industries, including telecommunications, technology, and beyond.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: multiline,
    source_code_link: "",
    project_link: "https://www.multi-line.com.ph/",
  },
];

export { services, technologies, experiences, testimonials, projects };
