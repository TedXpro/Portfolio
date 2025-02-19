import {
  dataAnalyst,
  backend,
  machineLearning,
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
  edir,
  ilri,
  studentTeacherCommunication,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: dataAnalyst,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: machineLearning,
  },
];

const technologies = [
  {
    name: "machine learning",
    icon: machineLearning,
  },
  {
    name: "data analysis",
    icon: dataAnalyst,
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
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "JFX Developer",
    company_name: "Edir Management System",
    icon: edir,
    iconBg: "#383E56",
    date: "January 2023 - June 2023",
    points: [
      "Developing and maintaining JFX applications using Java and other related technologies.",
      "Collaborating with classmates to create high-quality product.",
      "Helps community members to gather money and save it for future use.",
      "It notifies the members about the upcoming events and the amount of money they have to pay.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Student Teacher Communication",
    icon: studentTeacherCommunication,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using Node.js, mongodb, and other related technologies.",
      "Collaborating with classmates to create high-quality product.",
      "Implements a platform where students can communicate with their teachers.",
      "It notifies students about class events and helps students submit their assignments online.",
    ],
  },
  {
    title: "Network and System Adminstrator",
    company_name: "ILRI",
    icon: ilri,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Adminstrating and maintaining the network and system of the organization.",
      "Configuring and managing the network devices. (such as switches, routers, firewalls, etc)",
      "Imaging and deploying the operating system to the organization's computers.",
      "Troubleshooting and resolving the network and system issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
