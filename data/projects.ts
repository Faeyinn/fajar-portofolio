export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  images: string[];
  techStack: string[];
  role: string;
  demoLink: string;
  repoLink: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "laporan-keuangan-bem-stia-adabiah",
    title: "Laporan Keuangan BEM STIA Adabiah",
    shortDescription: "A financial reporting web app for BEM KM STIA Adabiah.",
    description:
      "This web-based financial reporting system was developed specifically for BEM KM STIA Adabiah to manage and visualize their financial data transparently. It features comprehensive transaction tracking, real-time financial summaries, and interactive data visualization using Chart.js to help stakeholders monitor budget allocation and expenditures efficiently.",
    images: ["/keubemadabiah1.png", "/keubemadabiah2.png"],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Laravel",
      "PHP",
      "Chart.js",
      "MySQL",
    ],
    role: "Fullstack Developer",
    demoLink: "https://bemstiaadabiah.online/",
    repoLink:
      "https://github.com/Faeyinn/laporan-keuangan-bem-stia-adabiah.git",
  },
  {
    id: "2",
    slug: "andalora",
    title: "Andalora",
    shortDescription:
      "A marketplace for used goods among Andalas University students.",
    description:
      "Andalora is a dedicated marketplace platform designed specifically for students of Andalas University. It facilitates the buying and selling of used goods within the campus community, providing a safe and convenient way for students to trade items. The platform features user authentication, product listing management, search and filtering, and a responsive design for easy access on mobile devices.",
    images: ["/andalora.png", "/andalora2.png"],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Lucide React",
      "Recharts",
      "PostgreSQL",
      "Supabase",
    ],
    role: "Fullstack Developer",
    demoLink: "https://andalora.vercel.app",
    repoLink: "https://github.com/Faeyinn/andalora",
  },
  {
    id: "3",
    slug: "lestariin-admin",
    title: "Lestariin Admin",
    shortDescription:
      "Admin dashboard for monitoring waste reports and environmental issues.",
    description:
      "Lestariin Admin is a comprehensive dashboard used by administrators to monitor and manage reports regarding waste, water quality, and other environmental issues submitted by the public. It includes data visualization with charts, report status management, and location tracking of reported incidents.",
    images: ["/lestariin.jpg", "/lestariin2.jpg"],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Recharts",
      "TypeScript",
    ],
    role: "Frontend Developer",
    demoLink: "https://admin-lestariin.vercel.app",
    repoLink: "https://github.com/Faeyinn/admin-lestariin",
  },
  {
    id: "4",
    slug: "lestariin-mobile",
    title: "Lestariin Mobile",
    shortDescription:
      "Mobile app for reporting environmental issues with gamification.",
    description:
      "Lestariin Mobile is an application that empowers citizens to report environmental problems such as waste accumulation, murky water, forest fires, and illegal logging. To encourage participation, the app incorporates a gamification system where users earn points for verified reports, which can be redeemed for rewards.",
    images: ["/lestariin-mobile.jpg", "/lestariin-mobile2.jpg"],
    techStack: ["React Native", "TypeScript"],
    role: "Frontend Mobile Developer",
    demoLink: "https://play.google.com/store/apps/details?id=com.lestariin",
    repoLink: "https://github.com/Faeyinn/lestari.in-app",
  },
  {
    id: "5",
    slug: "scholarmatch",
    title: "ScholarMatch",
    shortDescription:
      "A platform for finding and sharing scholarship information.",
    description:
      "ScholarMatch is a web platform designed to help students find scholarship opportunities that match their profile. It aggregates various scholarship information and provides easy-to-use search and filter functionalities. The interface is built with DaisyUI for a clean and modern look.",
    images: ["/scholarmatch.png", "/scholarmatch2.png"],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "DaisyUI"],
    role: "Frontend Developer",
    demoLink: "https://scholarmatch-fr.netlify.app",
    repoLink: "https://github.com/Faeyinn/capstone-frontend",
  },
  {
    id: "6",
    slug: "portfolio",
    title: "Personal Portfolio",
    shortDescription:
      "My personal portfolio website showcasing my work and skills.",
    description:
      "This is my personal portfolio website, built to showcase my projects, skills, and experience. It features a modern, cute, and interactive design with smooth animations and a responsive layout. It serves as a central hub for my professional identity online.",
    images: ["/myporto.png", "/myporto2.png"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    role: "Fullstack Developer",
    demoLink: "https://fajar-jaeyi.vercel.app",
    repoLink: "https://github.com/Faeyinn/fajar-portofolio",
  },
  {
    id: "7",
    slug: "bc-food-net",
    title: "BC FOOD NET",
    shortDescription:
      "A food ordering web app for Andalas University connecting buyers, sellers, and admins.",
    description:
      "BC FOOD NET is a comprehensive food ordering platform designed for the Andalas University community. It connects three main user roles: buyers who can browse and order food, sellers who manage their menus and incoming orders, and administrators who oversee the entire ecosystem. The platform features real-time order tracking, menu management, and sales analytics.",
    images: ["/bcfood.png", "/bcfood2.png"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Framer Motion",
      "Lucide React",
      "Recharts",
    ],
    role: "Fullstack Developer",
    demoLink: "https://bcfoodnet.vercel.app/",
    repoLink: "https://github.com/Faeyinn/bc-food-net-kel4.git",
  },
];
