export interface ProjectItem {
  title: string;
  technologies: string[];
  period: string;
  description: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "PennyPilot",
    technologies: ["React.js", "CSS", "Django", "OpenAI API", "PostgreSQL"],
    period: "May 2025",
    description: [
      "Developed a full-stack budget concierge using the OpenAI API to generate cost-optimized travel itineraries.",
      "Engineered a Django REST Framework backend with JWT auth and PostgreSQL for persistent plan storage.",
      "Built a high-performance frontend with React and Vanilla CSS using a modular, framework-independent UI."
    ]
  },
  {
    title: "Abroad 360",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Socket.io", "PostgreSQL"],
    period: "March 2025 – April 2025",
    description: [
      "Engineered a type-safe React frontend with TypeScript and Tailwind CSS for a high-density, mobile-responsive UI.",
      "Architected a PostgreSQL relational schema with Express.js to manage many-to-many user coordination and trip data.",
      "Implemented a bi-directional chat system using Socket.io for real-time, low-latency messaging across concurrent users."
    ]
  }
];