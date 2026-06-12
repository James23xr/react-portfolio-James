import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const LINKS = {
  email: "jbfeib27@colby.edu",
  github: "https://github.com/James23xr",
  linkedin: "https://www.linkedin.com/in/james-fei-baffoe/",
  resume: "/resume.pdf",
  website: "https://jamesfeibaffoe.vercel.app",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_BADGE = "Software Engineer Intern @ LinkedIn · Summer 2026";

export const HERO_CONTENT = `I'm a Computer Science and Mathematics student at Colby College and a
Software Engineer Intern at LinkedIn, where I build LLM agent infrastructure powering an AI
assistant for 20,000+ employees. Previously at Gusto, I shipped a payment-recovery system that
processes 100K+ failed ACH transactions and saves $1.25M annually. I care about distributed
systems, applied machine learning, and engineering that moves real business metrics.`;

export const ABOUT_TEXT = `I'm pursuing a double major in Computer Science and Mathematics at Colby
College with a 4.0 major GPA, graduating in May 2027. My experience spans the stack: LLM agent
infrastructure and low-latency inference pipelines at LinkedIn, payment-recovery systems
safeguarding critical banking operations at Gusto, and BERT/CNN pipelines as a machine learning
intern at SureStart. I led development of the donation platform that won first place at JPMorgan
Chase's Code for Good hackathon. I'm drawn to problems where distributed systems, machine
learning, and product impact intersect — and I sweat the details: idempotency, observability,
p99 latency, and safe rollouts.`;

export const HIGHLIGHTS = [
  { value: "20K+", label: "Employees served by the LLM-powered assistant I helped ship at LinkedIn" },
  { value: "$1.25M", label: "Annual savings from the ACH payment-recovery system I built at Gusto" },
  { value: "<800ms", label: "p99 latency of the LLM inference pipeline I engineered at LinkedIn" },
  { value: "1st Place", label: "JPMorgan Chase Code for Good Hackathon, as lead developer" },
];

export const EXPERIENCES = [
  {
    year: "May 2026 — Aug 2026",
    role: "Software Engineer Intern",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    bullets: [
      "Shipped LLM agent infrastructure — tool-calling, multi-step planning, and RAG over 10+ HR data sources — powering an AI assistant for 20K+ employees that automates onboarding, transfers, and benefits workflows end-to-end.",
      "Engineered a low-latency inference pipeline on LinkedIn's distributed stack, driving p99 below 800ms via prompt caching, speculative tool execution, and async fan-out.",
      "Built an eval harness and guardrails for hallucination and PII leakage, enabling a safe rollout to HR operations.",
    ],
    technologies: ["Python", "Kafka", "Pinot", "gRPC", "LLMs", "RAG"],
  },
  {
    year: "Oct 2025",
    role: "Lead Developer · 1st Place Winner",
    company: "Code for Good Hackathon, JPMorgan Chase",
    location: "Plano, TX",
    bullets: [
      "Led development of the first-place full-stack donation platform, built with Next.js, React, and PostgreSQL with real-time messaging.",
      "Integrated Stripe payment processing with webhook verification and idempotent transaction handling for donations up to $100K.",
      "Developed backend APIs and AI-powered newsletter generation for donor outreach.",
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe"],
  },
  {
    year: "May 2025 — Sep 2025",
    role: "Software Engineer Intern",
    company: "Gusto",
    location: "San Francisco, CA",
    bullets: [
      "Built an automated payment-recovery system processing 100K+ failed ACH transactions, saving $1.25M annually in manual processing costs.",
      "Designed SQL queries to detect orphaned bank accounts within regulatory deadlines while maintaining transaction safety.",
      "Implemented production monitoring with Datadog, ensuring zero disruption to critical banking operations.",
    ],
    technologies: ["SQL", "Datadog", "ACH Payments"],
  },
  {
    year: "May 2024 — Aug 2024",
    role: "Machine Learning Engineer Intern",
    company: "SureStart",
    location: "Waterville, ME",
    bullets: [
      "Built a sentiment-analysis pipeline using BERT and PyTorch to process 50K+ customer-service tickets.",
      "Developed a CNN image-recognition system using TensorFlow, achieving a 0.89 F1-score on 10K labeled images.",
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "BERT"],
  },
  {
    year: "Feb 2024 — May 2024",
    role: "CS152 Lab Assistant",
    company: "Colby College",
    location: "Waterville, ME",
    bullets: [
      "Conducted code reviews and debugging sessions for 60+ students in a Data Structures and Algorithms course.",
    ],
    technologies: ["Python", "Code Review", "Teaching"],
  },
];

export const PROJECTS = [
  {
    title: "Horizon — Financial SaaS Platform",
    image: project1,
    description:
      "A multi-bank financial SaaS platform with real-time transaction processing. Bank connectivity through Plaid, payment transfers via Dwolla, server-side-rendered authentication with Clerk, and type-safe forms with React Hook Form and Zod. Responsive dashboards visualize financial metrics with Chart.js.",
    technologies: ["Next.js", "TypeScript", "Plaid", "Dwolla", "Clerk", "TailwindCSS", "Chart.js"],
  },
  {
    title: "CloudPulse — Real-Time System Monitor",
    image: project3,
    description:
      "A distributed Flask-based monitoring system tracking CPU and memory metrics across 20+ containerized microservices on AWS EKS, with custom Prometheus exporters for real-time alerting. Cut container startup time from 45s to 8s through multi-stage Docker builds and ECR caching strategies.",
    technologies: ["Python", "Flask", "Prometheus", "Docker", "Kubernetes", "AWS EKS"],
    github: "https://github.com/James23xr/CloudPulse-Real-Time-System-Monitor",
  },
  {
    title: "AI Podcast Studio",
    image: project2,
    description:
      "An AI SaaS platform for podcast creation and discovery, featuring multi-voice speech synthesis and AI image generation. Built on Next.js and TypeScript with Convex powering the realtime backend and Clerk handling authentication.",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk", "TailwindCSS"],
    github: "https://github.com/James23xr/ai-podcast-studio",
  },
  {
    title: "GiveHub — Code for Good Donation Platform",
    image: project4,
    award: "1st Place · JPMorgan Chase Code for Good",
    description:
      "First-place hackathon build: a full-stack donation platform with real-time messaging, Stripe payments hardened with webhook verification and idempotent transaction handling for donations up to $100K, and AI-powered newsletter generation for donor outreach.",
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe"],
  },
];

export const EDUCATION = {
  school: "Colby College",
  location: "Waterville, Maine",
  degree: "B.A. in Computer Science & Mathematics (Double Major)",
  graduation: "Expected May 2027",
  gpa: "4.0 Major GPA",
  coursework: [
    "Data Structures",
    "Analysis of Algorithms",
    "Software Engineering",
    "Operating Systems",
    "Programming Languages",
    "Neural Networks",
    "Parallel Computing (MIT)",
    "Linear Algebra",
    "Data Analysis & Visualization",
  ],
  awards: [
    "1st Place — JPMorgan Chase Code for Good Hackathon (2025)",
    "Two Sigma Software Engineering Mentee",
    "Dean's List",
    "ColorStack Member",
    "National Science & Mathematics Quiz Semifinalist",
  ],
};

export const CONTACT = {
  location: "Waterville, Maine",
  email: "jbfeib27@colby.edu",
  blurb:
    "I'm always open to conversations about software engineering, ML systems, and new opportunities. The fastest way to reach me is by email — I read everything.",
};
