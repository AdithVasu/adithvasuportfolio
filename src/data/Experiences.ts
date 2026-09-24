import fiwyseLogo from '../assets/FiWyseLogo.png';
import rgaLogo from '../assets/RGALogo.png';
import washULogo from '../assets/WashULogo.png';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Reinsurance Group of America, Incorporated",
    role: "Software Engineering Intern",
    period: "June 2026 – Present",
    location: "Chesterfield, Missouri",
    logo: rgaLogo,
    bullets: [
      "Migrated 120+ APIs from Postman to Bruno, rebuilding and standardizing collections in JavaScript to remove licensing costs and bring collection data under team control.",
      "Built an internal tool for troubleshooting accounts that replaced multiple manual API lookups with a single search, saving team time and enabling non-technical users to handle troubleshooting themselves.",
      "Built a Power BI medical dashboard for internal stakeholders using Power Query transformations, clear visuals, and reliable data refreshes.",
      "Wrote Playwright end-to-end tests and Confluence documentation to ensure all projects stayed supportable and extensible."
    ]
  },
  {
    company: "FiWyse",
    role: "Software Engineering Intern (Data)",
    period: "May 2025 – August 2025",
    location: "Tampa, Florida",
    logo: fiwyseLogo,
    bullets: [
      "Engineered 5+ automated ETL pipelines in Python and SQL to parse and structure complex XML data from IRS repositories.",
      "Deployed AWS Lambda functions to automate data ingestion, leveraging cloud triggers to reduce latency by 60%.",
      "Created RESTful API endpoints in Python to serve processed financial data to internal application modules.",
      "Developed interactive Power BI dashboards to visualize and analyze credit union data, delivering data-driven insights to stakeholders."
    ]
  },
  {
    company: "Washington University in St. Louis",
    role: "Teaching Assistant, Intro to Computer Science",
    period: "January 2024 – January 2025",
    location: "St. Louis, Missouri",
    logo: washULogo,
    bullets: [
      "Led active-learning sessions for 90+ students, facilitating hands-on coding and debugging in a Java course.",
      "Mentored students during 6 weekly office hours, helping them master Java fundamentals in OOP and data structures.",
      "Collaborated with faculty and TAs to develop course materials, contributing to a 5% improvement in class performance."
    ]
  }
];