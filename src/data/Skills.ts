export interface SkillItem {
  category: string;
  skills: string[];
}

export const skillCategories: SkillItem[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Django", "React Native", "Tailwind CSS", "Socket.IO", "Playwright"]
  },
  {
    category: "Data & BI",
    skills: ["Power BI", "Microsoft Excel", "PostgreSQL"]
  },
  {
    category: "Cloud & Developer Tools",
    skills: ["AWS", "Git", "GitHub", "VS Code", "Postman", "Bruno"]
  }
];