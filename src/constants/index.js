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

export const HERO_BADGE = "Colby College '27 · Prev. SWE Intern @ LinkedIn & Gusto";

export const HERO_CONTENT = `I'm a Computer Science student at Colby College. This past summer at
LinkedIn, I shipped Workday capabilities for the company's internal conversational HR assistant —
stateful multi-turn agent orchestration with LangGraph, secured AI-initiated HR mutations, and
double-digit latency wins. Before that at Gusto, I designed and launched an ACH payment-recovery
service projected to save $1.25M annually. I care about distributed systems, applied machine
learning, and engineering that moves real business metrics.`;

export const ABOUT_TEXT = `I'm pursuing a B.A. in Computer Science at Colby College, graduating in
May 2027. My experience spans the stack: at LinkedIn I shipped end-to-end Workday capabilities for
an internal conversational HR assistant — multi-turn agent orchestration, TOCTOU-safe approval
flows, and latency optimizations across the pipeline. At Gusto I designed and launched a Ruby on
Rails ACH payment-recovery service projected to save $1.25M annually, and at SureStart I built
BERT and CNN pipelines as a machine learning intern. I also led development of the donation
platform that won first place at JPMorgan Chase's Code for Good hackathon. I'm drawn to problems
where distributed systems, machine learning, and product impact intersect — and I sweat the
details: idempotency, observability, fail-closed authorization, and safe rollouts.`;

export const HIGHLIGHTS = [
  { value: "$1.25M", label: "Projected annual savings from the ACH payment-recovery service I launched at Gusto" },
  { value: "80%", label: "Date-resolution accuracy for LinkedIn's HR assistant, up from a 50% deterministic baseline" },
  { value: "1st Place", label: "JPMorgan Chase Code for Good Hackathon, as lead developer" },
  { value: "82%", label: "Container startup latency reduction (45s → 8s) in my distributed monitoring system" },
];

export const EXPERIENCES = [
  {
    year: "May 2026 — Aug 2026",
    role: "Software Engineer Intern",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    bullets: [
      "Shipped end-to-end Workday capabilities for LinkedIn's internal conversational HR assistant using Python, LangGraph, React, TypeScript, Remix, gRPC, and REST/SOAP APIs — enabling natural-language time-off, recorded-time, timecard submission, and feedback workflows.",
      "Built stateful, multi-turn agent orchestration with model-directed tool sequencing, structured outputs, conversation memory, and date/intent interpretation — achieving 80% date-resolution accuracy against a 50% deterministic baseline and reducing excluded-date errors from 6.7% to 0% in live evaluations.",
      "Secured AI-initiated HR mutations with human approval, owner-bound and TOCTOU-safe confirmation claims, idempotency controls, fail-closed authorization, PII-safe logging, and read-after-write verification.",
      "Optimized concurrent data retrieval, identity caching, and HTTP client reuse — cutting contact-lookup latency by 31%, Workday identity-bootstrap latency by 50%, and median response latency by 12.5%.",
    ],
    technologies: ["Python", "LangGraph", "React", "TypeScript", "Remix", "gRPC"],
  },
  {
    year: "Oct 2025",
    role: "Lead Developer · 1st Place Winner",
    company: "Code for Good Hackathon, JPMorgan Chase",
    location: "Plano, TX",
    bullets: [
      "Led development of a first-place donation platform using Next.js, React, TypeScript, PostgreSQL, and Python — delivering payments, real-time social features, and AI-assisted donor outreach.",
      "Built 15+ type-safe APIs and integrated Stripe for $10–$100K donations with webhook verification and idempotent processing; reduced the donation flow from 8 steps to 2.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe"],
  },
  {
    year: "May 2025 — Sep 2025",
    role: "Software Engineer Intern",
    company: "Gusto",
    location: "San Francisco, CA",
    bullets: [
      "Designed and launched an automated ACH/NACHA payment-recovery service in Ruby on Rails, rerouting orphaned failed payments to newly verified bank accounts within a 12-business-day window — projected to save $1.25M annually.",
      "Built PostgreSQL/ActiveRecord eligibility queries spanning 3 payment types, 3 processing states, and 3 owner models, using outer joins and business rules across bank-account ownership and employment relationships.",
      "Integrated the service with payment state machines, Rails observers, and callbacks using per-payment database transactions, fault isolation, and feature flags to prevent partial updates and safely roll out the financial workflow.",
      "Expanded the end-to-end experience with secure double-entry bank verification, GraphQL paycheck-distribution mutations, customer email improvements, automated tests, structured logging, and Datadog metrics.",
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "GraphQL", "Datadog"],
  },
  {
    year: "May 2024 — Aug 2024",
    role: "Machine Learning Engineer Intern",
    company: "SureStart",
    location: "Waterville, ME",
    bullets: [
      "Built a BERT/PyTorch sentiment-analysis pipeline processing 50K+ customer-service tickets.",
      "Developed a TensorFlow CNN image-recognition system achieving a 0.89 F1-score on 10K labeled images.",
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
    title: "CloudPulse — Distributed Infrastructure Monitoring",
    image: project3,
    description:
      "A distributed monitoring service aggregating real-time CPU and memory telemetry across 20+ containerized microservices on AWS EKS, exposing Prometheus-compatible metrics endpoints with automated resource alerts. Reduced container startup latency by 82% (45s → 8s) through multi-stage Docker builds and ECR layer caching.",
    technologies: ["Python", "Flask", "Prometheus", "Docker", "Kubernetes", "AWS EKS"],
    github: "https://github.com/James23xr/CloudPulse-Real-Time-System-Monitor",
  },
  {
    title: "GiveHub — Code for Good Donation Platform",
    image: project4,
    award: "1st Place · JPMorgan Chase Code for Good",
    description:
      "First-place hackathon build: a donation platform with real-time social features and AI-assisted donor outreach. 15+ type-safe APIs and a Stripe integration handling $10–$100K donations with webhook verification and idempotent processing — cutting the donation flow from 8 steps to 2.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Python", "Stripe"],
  },
  {
    title: "Horizon — Financial SaaS Platform",
    image: project1,
    description:
      "A multi-bank financial SaaS platform with real-time transaction processing. Bank connectivity through Plaid, payment transfers via Dwolla, server-side-rendered authentication with Clerk, and type-safe forms with React Hook Form and Zod. Responsive dashboards visualize financial metrics with Chart.js.",
    technologies: ["Next.js", "TypeScript", "Plaid", "Dwolla", "Clerk", "TailwindCSS", "Chart.js"],
  },
  {
    title: "AI Podcast Studio",
    image: project2,
    description:
      "An AI SaaS platform for podcast creation and discovery, featuring multi-voice speech synthesis and AI image generation. Built on Next.js and TypeScript with Convex powering the realtime backend and Clerk handling authentication.",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk", "TailwindCSS"],
    github: "https://github.com/James23xr/ai-podcast-studio",
  },
];

export const EDUCATION = {
  school: "Colby College",
  location: "Waterville, Maine",
  degree: "B.A. in Computer Science",
  graduation: "Expected May 2027",
  gpa: "4.04 Recent Semester GPA · 3.74 Cumulative",
  coursework: [
    "Data Structures",
    "Algorithms & OOP (Java)",
    "Linear Algebra",
    "Software Engineering",
    "Operating Systems",
    "Analysis of Algorithms",
    "Neural Networks",
    "Parallel Computing (MIT)",
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
