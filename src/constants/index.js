import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Computer Science and Mathematics student at Colby College with a keen interest in Machine Learning and Software Engineering. With hands-on experience in projects ranging from AI-powered platforms to financial SaaS solutions, I aim to leverage my skills in creating innovative technologies that solve real-world problems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile student developer with a passion for creating efficient and innovative solutions. Currently pursuing a double major in Computer Science and Mathematics at Colby College, I have gained experience in various technologies including Python, Java, JavaScript, and TypeScript. My journey in technology began with a deep curiosity for how things work, and it has evolved into a pursuit where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I'm involved in campus activities and have a keen interest in quantitative research and advanced computing technologies.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Machine Learning Engineer",
    company: "SureStart",
    description: `Collaborated on a team to develop and optimize predictive models using TensorFlow and PyTorch, resulting in a 20% increase in model accuracy. Crafted an NLP system with sentiment analysis, boosting customer service efficiency by 40%. Improved an image recognition system, reducing processing times by 30% and increasing detection accuracy by 25%.`,
    technologies: ["Python", "TensorFlow", "PyTorch", "NLP"],
  },
  {
    year: "August 2024 - Present",
    role: "Software Engineering Mentee",
    company: "Two Sigma Mentor Connect Program",
    description: `Partnered with a Software Engineer at Two Sigma to gain insights into advanced computing technologies and quantitative research methodologies. Engaged in personalized workshops and technical sessions, enhancing skills in algorithm development, data structures, and software optimization.`,
    technologies: ["Algorithm Development", "Data Structures", "Software Optimization"],
  },
  {
    year: "February 2024 - May 2024",
    role: "CS152 Lab Assistant",
    company: "Colby College",
    description: `Conducted code reviews and offered constructive feedback to students in a class of 60+, contributing to a 15% higher pass rate. Assisted in explaining complex programming concepts and debugging code.`,
    technologies: ["Python", "Teaching", "Code Review"],
  },
];

export const PROJECTS = [
  {
    title: "Horizon: Financial SaaS Platform",
    image: project1,
    description:
      "Developed a comprehensive financial SaaS platform using Next.js and TypeScript, incorporating Plaid and Dwolla for real-time transaction processing and multi-bank connectivity.",
    technologies: ["Next.js", "TypeScript", "Plaid", "Dwolla", "TailwindCSS", "Chart.js"],
  },
  {
    title: "AI-Powered Podcast Platform",
    image: project2,
    description:
      "Designed and built a Next.js and TypeScript-based AI SaaS platform featuring multi-voice synthesis and image generation, enhancing podcast creation and discovery by 35%.",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk", "TailwindCSS"],
  },
  {
    title: "CPU Performance Monitoring System",
    image: project3,
    description:
      "Engineered a Flask-based Python monitoring tool to oversee CPU performance, managing end-to-end development from local environment setup to cloud deployment.",
    technologies: ["Python", "Flask", "Docker", "Kubernetes", "AWS EKS", "AWS ECR"],
  },
  {
    title: "Lead Python Instructor & Curriculum Architect",
    image: project4,
    description:
      "Led the Appiadu Girls Code Club as a Python instructor, developing curriculum and teaching programming concepts to aspiring female coders.",
    technologies: ["Python", "Teaching", "Curriculum Development"],
  },
];

export const CONTACT = {
  address: "4000 Mayflower Hill Drive, Waterville, ME",
  phoneNo: "(207)-830-1361",
  email: "jbfeib27@colby.edu",
};