import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import IDE from "@/public/IDE.png";
import Artisary from "@/public/Artisary.png";
import EMS from "@/public/EMS.png";
import PSII from "@/public/PSII.png";
import PSIII from "@/public/PSIII.png";
import PSI from "@/public/PSI.png";
import NPTEL from "@/public/NPTEL.png";
import UN from "@/public/Urbannest.png";

export const projects = [
  "5 projects experience",
  "Online IDE",
  "Artisary",
  "UrbanNest",
  "Employee management system",
  "Explain",
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Diploma in Computer Engineering",
    location: "Government Polytechnic Khutri, Bokaro Jharkhand",
    description:
      "I completed my diploma in engineering, focusing on core technical subjects.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "BTech",
    location: "Lovely Professional University, Phagwara, Punjab",
    description:
      "Currently pursuing BTech with a focus on software development and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
];

export const certificatesData = [
  {
    title: "Core And Advance Java",
    location: "Online",
    description:
      "A comprehensive course covering core and advanced Java concepts, including OOP principles, data structures, and algorithms.",
    icon: React.createElement(FaCertificate),
    date: "Jun 2024 - Jul 2024",
  },
];

export const certificates = [
  {
    title: "Problem Solving I",
    description:
      "An introductory course focused on building strong logical thinking and algorithmic problem-solving skills using fundamental programming constructs and data structures.",
    tags: ["Algorithms", "Logic Building", "Programming Fundamentals"],
    imageUrl: PSI,
    url: "https://www.hackerrank.com/certificates/iframe/da6442e24bee",
  },
  {
    title: "SQL Basic",
    description:
      "A foundational course on SQL, covering basic queries, data manipulation, and database management concepts.",
    tags: ["SQL", "Database Management", "Data Manipulation"],
    imageUrl: PSII,
    url: "https://www.hackerrank.com/certificates/ac758b04bfdc",
  },
  {
    title: "Core and Advance Java",
    description:
      "A comprehensive course covering core and advanced Java concepts, including OOP principles, data structures, and algorithms.",
    tags: ["Java", "OOP", "Data Structures"],
    imageUrl: PSIII,
    url: "",
  },
  {
    title: "Internet of Things by NPTEL",
    description:
      "A foundational course on IoT concepts, architecture, and applications, providing hands-on experience with sensors, embedded systems, and network integration.",
    tags: ["IoT", "Sensors", "Embedded Systems", "NPTEL"],
    imageUrl: NPTEL,
    url: "",
  },
] as const;

export const projectsData = [
  {
    title: "Online IDE",
    description:
      "An in-browser code editor that supports multiple programming languages. Users can write, compile, and run code in real-time, save the code, share the code and formate the code, making it perfect for learning and testing small programs instantly.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Node.js"],
    imageUrl: IDE,
    url: "https://github.com/M-Pushkar-Varshney-K/Online-IDE",
  },
  {
    title: "Artisary",
    description:
      "An artistic e-commerce platform that supports local artisans. Users can browse, buy, and showcase handmade art products while artists get a dedicated space to promote their craft.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
    imageUrl: Artisary,
    url: "https://github.com/CoderKumarS/Artistry",
  },
  {
    title: "EMS (Employee Management System)",
    description:
      "A web-based Employee Management System for HR operations. It allows tracking of employee details, attendance, roles, departments, and performance insights in one place.",
    tags: ["React", "Tailwind", "ShadCN", "FireBase"],
    imageUrl: EMS,
    url: "https://react-project-jade-eight.vercel.app/",
  },
  {
    title: "UrbanNest",
    description:
      "A real estate platform that connects buyers and sellers. Users can list properties, search for homes, and get insights into the real estate market.",
    tags: ["PHP", "MySQL", "Bootstrap", "Tailwind", "GSAP"],
    imageUrl: UN,
    url: "https://github.com/CoderKumarS/UrbanNest",
  },
] as const;

export const skillsData = [
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#264de4" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "TypeScript", color: "#007acc" },
  { name: "Angular", color: "#dd0031" },
  { name: "Java", color: "#f89820" },
  { name: "C++", color: "#00599c" },
  { name: "Figma", color: "#a259ff" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Material UI", color: "#0081cb" },
  { name: "Shadcn", color: "#000000" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#68a063" },
  { name: "Git", color: "#f34f29" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Express", color: "#000000" },
  { name: "Python", color: "#306998" },
] as const;
