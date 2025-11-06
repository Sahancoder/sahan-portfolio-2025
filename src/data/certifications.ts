export type Cert = {
  title: string;
  issuer: string;
  issued: string;         // e.g., "Oct 2025"
  expires?: string;       // e.g., "Oct 2026"
  credentialUrl?: string; // link to verify
  image?: string;         // optional proof image in /public/certs
  skills?: string[];
  icon: string;           // iconify id
};

export const certifications: Cert[] = [
  {
    title: "Active Contribution of IEEE",
    issuer: "IEEE",
    issued: "Oct 2025",
    expires: "Oct 2026",
    icon: "simple-icons:ieee"
  },
  {
    title: "Open-source AI Models",
    issuer: "Scrimba",
    issued: "May 2025",
    icon: "simple-icons:scrimba"
  },
  {
    title: "Learn Basics Of Adobe After Effects CC for Beginners",
    issuer: "Udemy",
    issued: "Sep 2024",
    image: "/certs/CERTIFICATE.png",
    skills: ["After Effects"],
    icon: "simple-icons:udemy"
  },
  {
    title: "Java Training Crash Course 2022",
    issuer: "Udemy",
    issued: "Jul 2024",
    image: "/certs/UC-4677c0d2-efc3-4880-8f97-9672daf1fc4a.jpg",
    icon: "simple-icons:udemy"
  },
  {
    title: "Mastering Java Development with IntelliJ IDEA and JavaFX",
    issuer: "Udemy",
    issued: "Jul 2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-2a00fac5-dc93-45cf-97e4-0ee4bf9c12ee/",
    icon: "simple-icons:udemy"
  },
  {
    title: "IT & Systems – Completion badge",
    issuer: "University of Kelaniya, Sri Lanka",
    issued: "Apr 2024",
    image: "/certs/Unit_2__IT__Systems__-_Completion_badge.png",
    skills: ["Systems Analysis"],
    icon: "mdi:school-outline"
  },
  {
    title: "Master Adobe Illustrator: Design Awesome Logos and Graphics",
    issuer: "Udemy",
    issued: "Apr 2024",
    icon: "simple-icons:udemy"
  },
  {
    title: "IntelliJ IDEA Mastery",
    issuer: "Udemy",
    issued: "Mar 2024",
    icon: "simple-icons:udemy"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issued: "Nov 2023",
    icon: "simple-icons:freecodecamp"
  },
  {
    title: "Introduction to Programming Using HTML and CSS",
    issuer: "HackerRank",
    issued: "Oct 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/ead88464101a",
    skills: ["CSS"],
    icon: "simple-icons:hackerrank"
  },
  {
    title: "SQL Fundamentals",
    issuer: "HackerRank",
    issued: "Jan 2023",
    expires: "Dec 2033",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/e4c09d18b43a",
    skills: ["SQL"],
    image: "/certs/sql_basic_certificate.jpg",
    icon: "simple-icons:hackerrank"
  }
];

export const achievements = [
  {
    label: "Semi-Finalist – Cre8X Innovation Challenge",
    icon: "mdi:lightbulb-on-outline",
    link: ""   // Add your LinkedIn post URL here
  },
  {
    label: "Semi-Finalist – HackX 8.0",
    icon: "mdi:rocket-launch-outline",
    link: ""   // Add your HackX post or project repo URL here
  },
  {
    label: "Winner – EXE 2025 Flagship Game Development",
    icon: "mdi:gamepad-variant-outline",
    link: ""   // Add your EXE competition announcement or game repo link here
  },
  {
    label: "Active IEEE Contributor (2025–2026)",
    icon: "simple-icons:ieee"
  },
  {
    label: "Poverty Hack 2025 – Hackathon Team Finalist",
    icon: "mdi:trophy-outline",
    link: "https://github.com/Sahancoder/poverty-hack-2025"
  }
];
