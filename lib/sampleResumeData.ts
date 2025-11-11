import { ResumeJSON } from "@/types";

export const SampleResumeData: ResumeJSON = {
  name: "DEEPAK SINGH",
  contacts: [
    {
      icon: "Phone",
      label: "(+91) 9625910876",
      link: "tel:+919625910876"
    },
    {
      icon: "Mail",
      label: "deepaksingh.dev.2002@gmail.com",
      link: "mailto:deepaksingh.dev.2002@gmail.com"
    },
    {
      icon: "Linkedin",
      label: "LinkedIn/profile",
      link: "#"
    },
    {
      icon: "Github",
      label: "github/deepakeon",
      link: "#"
    },
    {
      icon: "Globe",
      label: "portfolio/deepak",
      link: "#"
    }
  ],
  overview: "Full Stack Developer with 3+ years at R212 Partners, building scalable web apps across finance, healthcare, and education. Experienced in React, Next.js, SvelteKit, and Supabase, delivering end-to-end products like Numac, VisitPulse, and EduFeeHub with a focus on performance and clean design.",
  skills: [
    {
      category: "Frontend", items: "React JS, Sveltekit, Next JS, Svelte, Typescript, Javascript, TailwindCSS"
    },
    {
      category: "Backend", items: "FastAPI, Supabase, PostgreSQL, nHost"
    },
    {
      category: "DevOps & Tools", items: "Docker, Git, CockroachDB, CI/CD"
    },
    {
      category: "Architecture", items: "PWA, Caching, RLS, ABAC"
    }
  ],
  experiences: [
    {
      company: "R212 Partners",
      parentCompany: "R212 Group",
      link: "#",
      roles: "Frontend Developer → Full Stack Developer → Team Lead",
      duration: "January 2025 - Present",
      projects: [
        {
          name: "Numac - Secure Financial Analysis Platform",
          link: "#",
          role: "Full Stack Developer",
          duration: "4 months",
          techStack: "React, Next.js, FastAPI, Supabase",
          achievements: [
            "Architected a financial automation platform that converts raw datasets into executable Python scripts, improving analysis efficiency and eliminating manual workflows.",
            "Built a dual-backend system separating local spreadsheet handling from AI-driven logic to ensure stability and scalability.",
            "Implemented secure file storage, LLM integrations, and Supabase RLS-based access control, strengthening compliance and data protection.",
            "Delivered a tailored frontend for analysts, improving usability and cutting release cycles by 30% through full-stack integration."
          ]
        }
      ]
    }
  ],
  education: [{
    college: "Maharishi Dayanand University",
    duration: "May 2019 – May 2022",
    course: "Bachelor of Computer Applications (BCA)"
  }]
}